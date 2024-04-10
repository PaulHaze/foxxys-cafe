import styles from './navStyles.module.scss';

export function HamburgerLinks() {
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
