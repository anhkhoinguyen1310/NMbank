import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionTable from '@/components/TransactionTable';
import { getAccount, getAccounts } from '@/lib/action/bank.actions';
import { getLoggedInUser } from '@/lib/action/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHIstory = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({
        userId: loggedIn.$id
    })
    const accountsData = accounts?.data;
    const currentPage = Number(page as string) || 1;
    if (!accountsData || !loggedIn) {
        return <p>No data available</p>;
        // Show a fallback message
    }
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
    const account = await getAccount({ appwriteItemId })
    const { transactions } = account || { transactions: [] };
    console.log({ account })

    const rowsPerPage = 10;
    const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);
    const indexOfLastTransaction = currentPage * rowsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;
    const currentTransactions = account?.transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);



    return (
        <div className="transactions">
            <div className="transactions-header">
                <HeaderBox
                    title='Transaction History'
                    subtext='See your bank details and transactions.'
                />
            </div>
            <div className="space-y-6">
                <div className="transactions-account">
                    <div className="flex flex-col gap-2">
                        <h2 className='text-18 font-bold text-white'>
                            {account?.data?.name || 'No Account Name Available'}
                        </h2>
                        <p className="text-14 text-blue-25">
                            {account?.data?.officialName || 'No Official Name Available'}
                        </p>
                        <p className="text-14 font-semibold tracking-[1.1px] text-white">
                            **** **** **** {account?.data.mask}

                        </p>
                    </div>
                    <div className="transactions-account-balance">
                        <p className="text-14">
                            Current Balance
                        </p>
                        <p className="text-24 text-center font-bold">
                            {formatAmount(account?.data.currentBalance)}
                        </p>
                    </div>
                </div>
                <section className="flex w-ful flex-col gap-6">
                    <TransactionTable
                        transactions={currentTransactions}

                    />
                    <Pagination totalPages={totalPages} page={currentPage} />
                </section>


            </div>
        </div>
    )
}

export default TransactionHIstory