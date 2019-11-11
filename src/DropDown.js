import React from 'react';

const Players = [
	{ name: '🐏Michael Jordan' },
	{ name: '🐍Kobe Bryant' },
	{ name: '👑Lebron James' },
	{ name: '💦Stephen Curry' }
];
const DropDown = ({ dropDownRef, setIsOpened }) => {
	return (
		<div className="DropDown-container">
			{Players &&
				Players.map((player) => (
					<li ref={dropDownRef} onClick={() => setIsOpened(false)} key={player.name}>
						{player.name}
					</li>
				))}
		</div>
	);
};
export default DropDown;
