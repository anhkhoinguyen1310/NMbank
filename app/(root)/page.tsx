import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Kay', lastName: 'Nguyen', email: 'anhkhoinguyen1310@superpro.com' };
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
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1000.00}
                    />

                </header>
                Recent Transaction

            </div>
            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 500.80 }]}
            />
        </section>
    )
}

export default Home 