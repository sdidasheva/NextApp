import Image from "next/image";
import { Pagination, A11y, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import slide1 from "../../../public/assets/images/main-slide1.jpg";
import slide2 from "../../../public/assets/images/main-slide2.jpg";

export default function MainSlider() {
	return (
		<div className="main-slider">
			<Swiper
				modules={[Pagination, A11y, EffectFade]}
				pagination={{
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class=" ' +
							className +
							'">' +
							"0" +
							(index + 1) +
							"</span>"
						);
					},
				}}
				effect={"fade"}
				speed={800}
				slidesPerView={1}
				loop
				className="main-slider__swiper"
			>
				<SwiperSlide className="main-slider__slide">
					<Image src={slide1} alt="logo" width="1920" />
					<div className="main-slider__slide-info">
						<h1 className="main-slider__slide-info-title">GROUP TRIPLEX</h1>
						<div className="main-slider__slide-info-text">
							We are re-imagining virtual events in the new normal, converging
							two of our core specialties – video production and live events to
							create bespoke virtual and hybrid experiences, helping our clients
							elevate their events to the new levels
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="main-slider__slide">
					<Image src={slide2} alt="logo" width="1920" />
					<div className="main-slider__slide-info">
						<h1 className="main-slider__slide-info-title">LOREM IPSUM</h1>
						<div className="main-slider__slide-info-text">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Recusandae natus incidunt id debitis voluptatibus officiis
							sapiente unde dicta beatae, nam sit eveniet consequatur
							necessitatibus velit autem veritatis doloremque facilis rem?
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className="main-slider__slide">
					<Image src={slide2} alt="logo" width="1920" />
					<div className="main-slider__slide-info">
						<h1 className="main-slider__slide-info-title">LOREM IPSUM</h1>
						<div className="main-slider__slide-info-text">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Recusandae natus incidunt id debitis voluptatibus officiis
							sapiente unde dicta beatae, nam sit eveniet consequatur
							necessitatibus velit autem veritatis doloremque facilis rem?
						</div>
					</div>
				</SwiperSlide>
				{/* <div className="main-slider_numbers">
					<p>01</p>
					<p>02</p>
					<p>03</p>
				</div> */}
				{/* Попробовать через before в пагинации */}
			</Swiper>
		</div>
	);
}
