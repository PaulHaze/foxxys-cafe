import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { useClickAway } from '@uidotdev/usehooks';

import { Hamburger } from './Hamburger';
import { HamburgerLinks } from './HamburgerLinks';

import foxxyNavLogo from '@/assets/images/logo_blk_text_sm.png?url';

export function NavBar() {
	const [isExpanded, setExpanded] = useState(false);
	const { getCollapseProps } = useCollapse({ isExpanded });

	const ref = useClickAway<HTMLDivElement>(() => {
		setExpanded(false);
	});

	return (
		<div ref={ref} className="relative bg-white/40 backdrop-blur">
			<nav className="mx-auto flex h-[64px] w-full max-w-lg items-center justify-between px-6 text-black/80">
				<a href="/">
					<img
						className="h-12 opacity-80"
						src={foxxyNavLogo}
						alt="Foxxy Logo"
					/>
				</a>
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
			<div className="absolute w-full backdrop-blur sm:hidden">
				<div {...getCollapseProps()}>
					<HamburgerLinks setExpanded={setExpanded} />
				</div>
			</div>
		</div>
	);
}
