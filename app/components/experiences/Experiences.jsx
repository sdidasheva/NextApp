import Elements from "./Elements";
import Platform from "../../icons/Platform";
import Channel from "../../icons/Channel";
import Technology from "../../icons/Technology";
import Crew from "../../icons/Crew";
import Studio from "../../icons/Studio";
import Management from "../../icons/Management";

export default function Experiences() {
	const elements = [
		{ icon: <Platform />, title: `Virtual Event Platform` },
		{
			icon: <Channel />,
			title: "Broadcasting Channels",
		},
		{
			icon: <Technology />,
			title: "High-quality AV and broadcasting technology",
			classname: "long",
		},
		{ icon: <Crew />, title: "Professional crew" },
		{ icon: <Studio />, title: "Variety of Venues" },
		{ icon: <Management />, title: "Safe Event Management" },
	];
	return (
		<section className="experiences">
			<div className="experiences__wrapper">
				<h2 className="section__title">
					Key Elements of Virtual and Hybrid Event Experiences
				</h2>
				<p className="experiences__text">
					We elevate simple live streams to professionally curated top-notch
					virtual events with engaging content and seamless execution. With
					decades of experience in video production and live events, our core
					specialties have converged to enable us to deliver exceptional virtual
					and hybrid event experiences.{" "}
				</p>
				<div className="experiences__elements">
					{elements.map((element) => (
						<Elements
							icon={element.icon}
							title={element.title}
							classname={element.classname}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
