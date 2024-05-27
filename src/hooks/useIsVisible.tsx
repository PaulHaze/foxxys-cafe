import { useEffect, useState } from 'react';

import type { RefObject } from 'react';

// interface RefObject<T> {
// 	// immutable
// 	readonly current: T | null;
// }

export function useIsVisible(ref: RefObject<HTMLElement>) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);

		observer.observe(ref.current as HTMLElement);
		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}
