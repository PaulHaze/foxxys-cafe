import type { Dispatch } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

import styles from './navStyles.module.scss';

type HamburgerLinksProps = {
	setExpanded: Dispatch<React.SetStateAction<boolean>>;
};

export function HamburgerLinks({ setExpanded }: HamburgerLinksProps) {
	return (
		<div className={styles.hamburgerLinks}>
			<ul className="" onClick={() => setExpanded(false)}>
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
