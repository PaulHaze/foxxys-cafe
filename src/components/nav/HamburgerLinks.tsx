import type { Dispatch } from 'react';
import styles from './navStyles.module.scss';

type HamburgerLinksProps = {
	setExpanded: Dispatch<React.SetStateAction<boolean>>;
};

export function HamburgerLinks({ setExpanded }: HamburgerLinksProps) {
	return (
		<div className={styles.hamburgerLinks}>
			<ul className="">
				<li>
					<a href="#about">ABOUT</a>
				</li>
				<li>
					<a href="#menu">MENU</a>
				</li>
				<li>
					<a href="#contact">CONTACT</a>
				</li>
			</ul>
		</div>
	);
}
