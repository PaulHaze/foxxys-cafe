export function NavBar() {
	return (
		<nav className="mx-auto flex h-[64px] w-full max-w-lg items-center justify-between px-6 text-white">
			<div className="">LOGO</div>

			<ul className="flex gap-x-4">
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
		</nav>
	);
}
