
import HeaderBox from '@/components/HeaderBox'
import RecentTransaction from '@/components/RecentTransaction';
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/action/bank.actions';
import { getLoggedInUser } from '@/lib/action/user.actions';

import React from 'react'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
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

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transaction efficiently."
                    />
                    <TotalBalanceBox
                        accounts={accountsData}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />

                </header>
                <RecentTransaction
                    accounts={accountsData}
                    transactions={transactions}
                    appwriteItemId={appwriteItemId}
                    page={currentPage}
                />

            </div>
            <RightSideBar
                user={loggedIn}
                transactions={account?.transactions}
                banks={accountsData?.slice(0, 2)}
            />
        </section>
    )
}

export default Home 