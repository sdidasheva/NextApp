import { useState } from "react";
import Arrow from "../../icons/Arrow";
import { motion } from "framer-motion";

export default function Navigation() {
	const [show, setShow] = useState(false);

	const animateFrom = { opacity: 0, y: -30 };
	const animateTo = { opacity: 1, y: 0 };

	return (
		<nav className="header__nav">
			<ul>
				<li>
					<a href="#">HOME</a>
				</li>
				<li>
					<a href="#">PROJECTS</a>
				</li>
				<li className="header__nav-dropdown">
					<a href="#" className="header__nav-dropdown-about">
						ABOUT
						<button
							onClick={() => setShow(!show)}
							className="header__nav-dropdown-button"
						>
							<Arrow />
						</button>
					</a>
					{show && (
						<motion.div
							initial={animateFrom}
							animate={animateTo}
							className="header__nav-dropdown-list"
						>
							<a href="#">ABOUT US</a>
							<a href="#">MEET THE TEAM</a>
							<a href="#">AWARDS</a>
						</motion.div>
					)}
				</li>
				<li>
					<a href="#">ADDITIONAL SERVICES</a>
				</li>
				<li>
					<a href="#">CLIENTS</a>
				</li>
			</ul>
		</nav>
	);
}
