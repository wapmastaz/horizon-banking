'use client';
import React from 'react';
import CountUp from 'react-countup';

function AnimatedCounter({ amount }: { amount: number }) {
	return (
		<div>
			<CountUp
				end={amount}
				decimal={','}
				prefix='$'
				separator=','
				duration={3}
			/>
		</div>
	);
}

export default AnimatedCounter;
