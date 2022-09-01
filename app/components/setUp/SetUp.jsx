import setup1 from "../../../public/assets/images/setup1.jpg";
import setup2 from "../../../public/assets/images/setup2.jpg";
import setup3 from "../../../public/assets/images/setup3.jpg";
import setup4 from "../../../public/assets/images/setup4.jpg";
import SetUpType from "./SetUpType";

export default function SetUp() {
	const swiper = [
		{
			image1: setup1,
			image2: setup2,
			image3: setup3,
			title: "At Your Office Location",
			text: "Build a studio in your office from scratch and deliver your townhalls, AGMs and etc. from the comfort of your office.",
		},
		{
			image1: setup2,
			image2: setup1,
			image3: setup3,
			title: "Studio with LED",
			text: "Present your content in fully-equipped broadcast studio. It provides facilities which are far superior to the office environment. With cameras, LED wall, lights and audio systems in place – your event can be streamed to any platform you choose",
			classname: "align",
		},
		{
			image1: setup3,
			image2: setup1,
			image3: setup4,
			title: "Green Screen Studio",
			text: "Green Screen technology creates a user experience like no other and provides a completely immersive experience to take your audience into a world of imagination and creativity. Connect speakers from the most distanced places in the world and make them magically appear on the same stage, create jaw-dropping virtual designs or add exciting 3D effects to keep your audience hooked.",
		},
		{
			image1: setup4,
			image2: setup2,
			image3: setup1,
			title: "From the Comfort of Your Home",
			text: "With travel restrictions put in place and staying home becoming the new norm, we offer our clients an option to host virtual events from anywhere in the world. Add interactive and gamification elements to your online experience to keep your audience engaged.",
			classname: "align",
		},
	];
	return (
		<section className="setup">
			<div className="setup__wrapper">
				<h2 className="section__title">Select Your Event Set Up</h2>
				<div className="setup__types">
					{swiper.map((slide) => (
						<SetUpType
							image1={slide.image1}
							image2={slide.image2}
							image3={slide.image3}
							title={slide.title}
							text={slide.text}
							classname={slide.classname}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
