import Package from "./Package";
import { Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function Services() {
	const packages = [
		{ title: "Package 1", number: "1" },
		{ title: "Package 2", number: "2" },
		{ title: "Package 3", number: "3" },
		{ title: "Package 4", number: "4" },
	];
	return (
		<section className="services">
			<div className="services__wrapper">
				<h2 className="section__title">Hybrid and Virtual Event Services</h2>
				<div className="services__packages">
					{packages.map((item) => (
						<Package title={item.title} number={item.number} />
					))}
				</div>
				<div className="services__packages-mobile">
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
						loop
						className="services__packages-swiper"
					>
						{packages.map((item) => (
							<SwiperSlide>
								<Package title={item.title} number={item.number} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
