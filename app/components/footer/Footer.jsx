import Image from "next/image";
import logo from "../../../public/assets/images/logo.svg";
import Twitter from "../../icons/Twitter";
import Facebook from "../../icons/Facebook";
import Instagram from "../../icons/Instagram";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div className="footer__logo">
					<Image className="logo" src={logo} alt="logo" layout="fixed" />
				</div>
				<div className="footer__mobile-social">
					<div className="footer__mobile-social-item">
						<Twitter />
					</div>
					<div className="footer__mobile-social-item">
						<Instagram />
					</div>
					<div className="footer__mobile-social-item">
						<Facebook />
					</div>
				</div>
				<nav className="footer__nav">
					<ul className="footer__nav-list">
						<li>
							<a href="#">HOME</a>
						</li>
						<li>
							<a href="#">PROJECTS</a>
						</li>
						<li>
							<a href="#">ABOUT</a>
							<ul className="footer__nav-list-sublist">
								<li>
									<a href="#">ABOUT US</a>
								</li>
								<li>
									<a href="#">MEET THE TEAM</a>
								</li>
								<li>
									<a href="#">AWARDS</a>
								</li>
							</ul>
						</li>
						<li className="footer__nav-services-list">
							<a href="#">ADDITIOANL SERVICES</a>
							<ul className="footer__nav-list-sublist">
								<li>
									<a href="#">VIDEO PRODUCTION</a>
								</li>
								<li>
									<a href="#">DESIGHN SERVICES</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">CLIENTS</a>
						</li>
					</ul>
				</nav>
				<div className="footer__contacts">
					<div className="footer__contacts-social ">
						<div className="footer__contacts-social-item">
							<Twitter />
						</div>
						<div className="footer__contacts-social-item">
							<Instagram />
						</div>
						<div className="footer__contacts-social-item">
							<Facebook />
						</div>
					</div>
					<button className="footer__contacts-button ">CONTACT US</button>
				</div>
			</div>
		</footer>
	);
}
