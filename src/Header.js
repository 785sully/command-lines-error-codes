import React from 'react';

export default function Header() {
	return (
		<header className='App-header'>
			<h1 className='title'>
				Command Lines
				<img
					src={
						process.env.PUBLIC_URL + '/images/dragon-ampersand.jpg'
					}
					alt='and'
					className='ampersand'
				/>
				Error Codes
			</h1>
		</header>
	);
}
