import About from "../app/components/about/About";
import Experiences from "../app/components/experiences/Experiences";
import Footer from "../app/components/footer/Footer";
import Gallery from "../app/components/gallery/Gallery";
import Header from "../app/components/header/Header";
import MainSlider from "../app/components/main-slider/Main-Slider";
import Modal from "../app/components/modal/Modal";
import Services from "../app/components/services/Services";
import SetUp from "../app/components/setUp/SetUp";

export default function Home() {
	return (
		<>
			<Header />
			<MainSlider />
			<Services />
			<About />
			<Experiences />
			<SetUp />
			<Gallery />
			<Footer />
		</>
	);
}
