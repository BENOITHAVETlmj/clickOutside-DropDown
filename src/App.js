import React, { useRef, useState } from 'react';
import DropDown from './DropDown';
import useClickOutside from './UseClickOutside';

const App = () => {
	const [ isOpened, setIsOpened ] = useState(false);
	const dropDownRef = useRef();

	useClickOutside(dropDownRef, () => {
		if (isOpened) setIsOpened(false);
	});
	return (
		<div className="App">
			<button onClick={() => setIsOpened(!isOpened)}>
				WHO IS THE GOAT?<span role="img" aria-label="ball">
					🏀
				</span>
			</button>
			{isOpened && <DropDown dropDownRef={dropDownRef} isOpened={isOpened} setIsOpened={setIsOpened} />}
		</div>
	);
};

export default App;
