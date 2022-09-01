import Image from "next/image";
import logo from "../../../public/assets/images/logo.svg";
import Navigation from "./Navigation";
import Mobile_Navigation from "./Mobile_Navigation";
import Instagram from "../../icons/Instagram";
import Facebook from "../../icons/Facebook";
import LinkedIn from "../../icons/LinkedIn";

export default function Header() {
	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="header__logo">
					<Image src={logo} alt="logo" width="63" height="73" layout="fixed" />
					<div className="header__logo--line"></div>
				</div>
				<Navigation />
				<div className="header__contacts">
					<div className="header__social">
						<div className="header__social--item">
							<Instagram />
						</div>
						<div className="header__social--item">
							<Facebook />
						</div>
						<div className="header__social--item">
							<LinkedIn />
						</div>
					</div>
					<button className="header__button">CONTACT US</button>
				</div>
				<Mobile_Navigation />
			</div>
		</header>
	);
}
