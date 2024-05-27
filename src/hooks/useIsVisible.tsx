import { useEffect, useState } from 'react';

// import type { RefObject } from 'react';

// interface RefObject<T> {
// 	// immutable
// 	readonly current: T | null;
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useIsVisible(ref: any) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line no-undef
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);

		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}
