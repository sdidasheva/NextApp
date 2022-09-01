import Image from "next/image";
import aboutImg from "../../../public/assets/images/about-image.jpg";

export default function About() {
	return (
		<section className="about">
			<div className="about__wrapper">
				<div className="about__image">
					<Image src={aboutImg} alt="about" width="804px" height="473px" />
				</div>
				<div className="about__info">
					<div className="section__title">About Us</div>
					<div className="about__info-text">
						Our team includes in-house writers, video and event producers,
						directors, editors, designers and VFX specialists, live-stream and
						broadcast specialists, enabling us to continue a tradition of
						producing projects all over the world, including the US, Europe and
						almost every country in Asia.
					</div>
					<button className="about__info-button">More</button>
				</div>
			</div>
		</section>
	);
}
