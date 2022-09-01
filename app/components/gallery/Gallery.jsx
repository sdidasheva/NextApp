import Image from "next/image";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import gallery1 from "../../../public/assets/images/gallery1.jpg";
import gallery2 from "../../../public/assets/images/gallery2.jpg";
import gallery3 from "../../../public/assets/images/gallery3.jpg";

export default function Gallery() {
	return (
		<section className="gallery">
			<div className="gallery__wrapper">
				<h2 className="section__title">Photo Gallery</h2>
				<Swiper
					modules={[Navigation, Pagination]}
					slidesPerView="auto"
					navigation
					pagination={{ clickable: true }}
					centeredSlides={true}
					loop={true}
					slideToClickedSlide={true}
					breakpoints={{
						320: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
					className="gallery__swiper"
				>
					<SwiperSlide className="gallery__slide">
						<Image src={gallery1} alt="gallery" width="461" height="469" />
					</SwiperSlide>
					<SwiperSlide className="gallery__slide">
						<Image src={gallery2} alt="gallery" width="461" height="469" />
					</SwiperSlide>
					<SwiperSlide className="gallery__slide">
						<Image src={gallery3} alt="gallery" width="461" height="469" />
					</SwiperSlide>
					<SwiperSlide className="gallery__slide">
						<Image src={gallery2} alt="gallery" width="461" height="469" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
}
