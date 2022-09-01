import Image from "next/image";
import { Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
export default function SetUpSwiper(props) {
	return (
		<div className="setup__type">
			<Swiper
				modules={[Pagination, EffectFade]}
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
				centeredSlides={true}
				loop
				className="setup__type-swiper"
			>
				<SwiperSlide className="setup__type-slide">
					<Image src={props.image1} alt="setupImage" width="804" height="428" />
				</SwiperSlide>
				<SwiperSlide className="setup__type-slide">
					<Image src={props.image2} alt="setupImage" width="804" height="428" />
				</SwiperSlide>
				<SwiperSlide className="setup__type-slide">
					<Image src={props.image3} alt="setupImage" width="804" height="428" />
				</SwiperSlide>
			</Swiper>

			<div className={`setup__type-info setup__type-info-${props.classname}`}>
				<h3 className="setup__type-info-title">{props.title}</h3>
				<p className="setup__type-info-text">{props.text}</p>
			</div>
		</div>
	);
}
