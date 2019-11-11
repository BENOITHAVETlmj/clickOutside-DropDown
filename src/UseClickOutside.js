import { useEffect } from 'react';

const useClikOutside = (ref, callback) => {
	const handleClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
};

export default useClikOutside;
