import { useRef, useEffect } from 'react';
import type { Dispatch } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { useIsVisible } from '@/hooks/useIsVisible';

import styles from './navStyles.module.scss';

type HamburgerLinksProps = {
	setExpanded: Dispatch<React.SetStateAction<boolean>>;
};

export function HamburgerLinks({ setExpanded }: HamburgerLinksProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useIsVisible(ref);
	useEffect(() => {
		if (!isVisible) {
			setExpanded(false);
		}
	}, [isVisible]);

	return (
		<div ref={ref} className={styles.hamburgerLinks}>
			<ul
				className="absolute bg-transparent"
				onClick={() => setExpanded(false)}
			>
				<li>
					<ScrollIntoView alignToTop={true} selector="#about">
						<a>ABOUT</a>
					</ScrollIntoView>
				</li>
				<li>
					<ScrollIntoView alignToTop={true} selector="#menu">
						<a>MENU</a>
					</ScrollIntoView>
				</li>
				<li>
					<ScrollIntoView alignToTop={true} selector="#contact">
						<a>CONTACT</a>
					</ScrollIntoView>
				</li>
			</ul>
		</div>
	);
}
