import React, { useState } from "react";
import Image from "next/image";
import logoLarge from "../../../public/assets/images/logo_large.svg";
import Burger from "../../icons/Burger";
import Close from "../../icons/Close";
import { motion } from "framer-motion";

export default function Mobile_Navigation() {
	const [open, setOpen] = useState(false);

	const burgerIcon = (
		<div className="mobilenav__burger-icon" onClick={() => setOpen(!open)}>
			<Burger />
		</div>
	);

	const closeIcon = (
		<div className="mobilenav__close-icon" onClick={() => setOpen(!open)}>
			<Close />
		</div>
	);

	const closeMobileNav = () => setOpen(false);
	const animateFrom = { opacity: 0, y: -70 };
	const animateTo = { opacity: 1, y: 0 };

	return (
		<div className="header__mobilenav">
			{open ? closeIcon : burgerIcon}
			{open && (
				<motion.div
					initial={animateFrom}
					animate={animateTo}
					className="mobilenav"
				>
					{closeIcon}
					<div className="mobilenav__logo">
						<Image src={logoLarge} alt="logo" width="83" height="95" />
					</div>
					<nav className="mobilenav__nav">
						<ul className="mobilenav__nav-list">
							<li>
								<a onClick={() => closeMobileNav()} href="#">
									HOME
								</a>
							</li>
							<li>
								<a onClick={() => closeMobileNav()} href="#">
									PROJECTS
								</a>
							</li>
							<li>
								<a onClick={() => closeMobileNav()} href="#">
									ABOUT
								</a>
								<ul className="mobilenav__nav-list-sublist">
									<li>
										<a onClick={() => closeMobileNav()} href="#">
											ABOUT US
										</a>
									</li>
									<li>
										<a onClick={() => closeMobileNav()} href="#">
											MEET THE TEAM
										</a>
									</li>
									<li>
										<a onClick={() => closeMobileNav()} href="#">
											AWARDS
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a onClick={() => closeMobileNav()} href="#">
									ADDITIOANL SERVICES
								</a>
								<ul className="mobilenav__nav-list-sublist">
									<li>
										<a onClick={() => closeMobileNav()} href="#">
											VIDEO PRODUCTION
										</a>
									</li>
									<li>
										<a onClick={() => closeMobileNav()} href="#">
											DESIGHN SERVICES
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a onClick={() => closeMobileNav()} href="#">
									CLIENTS
								</a>
							</li>
						</ul>
						<button
							onClick={() => closeMobileNav()}
							className="mobilenav__nav-button"
						>
							CONTACT US
						</button>
					</nav>
				</motion.div>
			)}
		</div>
	);
}
