import React from 'react';

const Players = [
	{ name: '🐏Michael Jordan' },
	{ name: '🐍Kobe Bryant' },
	{ name: '👑Lebron James' },
	{ name: '💦Stephen Curry' }
];
const DropDown = ({ dropDownRef, setIsOpened }) => {
	return (
		<div ref={dropDownRef}  className="DropDown-container">
			{Players &&
				Players.map((player) => (
					<li onClick={() => setIsOpened(false)} key={player.name}>
						{player.name}
					</li>
				))}
		</div>
	);
};
export default DropDown;
