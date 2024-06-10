import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

function Homepage() {
	const isLoggedIn = {
		firstName: 'Demola',
		lastName: 'Demmy',
		email: 'demolatheophilus8@gmail.com',
	};

	return (
		<section className='home'>
			<div className='home-content'>s
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title={`Welcome`}
						user={isLoggedIn?.firstName || 'Guest'}
						subtext='Access and Manage your account and transactions efficiently'
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1500.56}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>

			<RightSidebar
				user={isLoggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
			/>
		</section>
	);
}

export default Homepage;
