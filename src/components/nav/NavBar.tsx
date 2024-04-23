import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { useClickAway } from '@uidotdev/usehooks';

import { Hamburger } from './Hamburger';
import { HamburgerLinks } from './HamburgerLinks';

export function NavBar() {
	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps } = useCollapse({ isExpanded });

	const ref = useClickAway<HTMLDivElement>(() => {
		setExpanded(false);
	});

	return (
		<div ref={ref}>
			<nav className="mx-auto flex h-[64px] w-full max-w-lg items-center justify-between px-6 text-white">
				<div>
					<a href="/">LOGO</a>
				</div>

				{/* DESKTOP LINKS */}
				<ul className="hidden gap-x-4 sm:visible sm:flex">
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
				{/* HAMBURGER */}
				<div className="sm:hidden">
					<Hamburger isOpen={isExpanded} setOpen={setExpanded} />
				</div>
			</nav>
			<div>
				<div className="">
					<div {...getCollapseProps()}>
						<HamburgerLinks setExpanded={setExpanded} />
					</div>
				</div>
			</div>
		</div>
	);
}
