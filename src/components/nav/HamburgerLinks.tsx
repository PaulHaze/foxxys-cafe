import styles from './navStyles.module.scss';

export function HamburgerLinks() {
	return (
		<div className={styles.hamburgerLinks}>
			<ul className="">
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#menu">Menu</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
}
