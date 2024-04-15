import { useState, useRef } from 'react';
import { useCollapse } from 'react-collapsed';
import useClickAway from 'react-use/lib/useClickAway';

import { Hamburger } from './Hamburger';
import { HamburgerLinks } from './HamburgerLinks';

export function NavBar() {
	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps } = useCollapse({ isExpanded });

	const ref = useRef(null);
	useClickAway(ref, () => setExpanded(false));

	return (
		<div>
			<nav className="mx-auto flex h-[64px] w-full max-w-lg items-center justify-between px-6 text-white">
				<div className="">LOGO</div>

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
			<div ref={ref}>
				<div {...getCollapseProps()}>
					<HamburgerLinks setExpanded={setExpanded} />
				</div>
			</div>
		</div>
	);
}
