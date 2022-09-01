import React, { useState } from "react";
import Modal from "../modal/Modal";
import PackageArrow from "../../icons/PackageArrow";
import Image from "next/image";
import modalImage from "../../../public/assets/images/modal-image2.jpg";

export default function Package(props) {
	const [isModalOpened, setIsModalOpened] = useState(false);

	return (
		<>
			<div
				className={`services__packages-item services__packages-item--${props.number}`}
				onClick={() => setIsModalOpened(true)}
			>
				<p className="services__packages-item-title">{props.title}</p>
				<div className="services__packages-item-arrow">
					<PackageArrow />
				</div>
			</div>
			<Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
				<div className="services__packages-modal">
					<div className="services__packages-modal-title">{props.title}</div>
					<div className="services__packages-modal-info">
						<div className="services__packages-modal-info-text">
							On arrival at the main entrance of Suntec Singapore, expect to be
							wowed by the grandeur of The Big Picture - the world’s largest
							high definition LED video wall.
							<br />
							<br />
							Leverage on this impressive screen which provides a stunning
							backdrop with customisable digital content to help promote your
							event and impress your guests as they alight at Suntec Singapore’s
							driveway.
							<br />
							<br />
							On arrival at the main entrance of Suntec Singapore, expect to be
							wowed by the grandeur of The Big Picture - the world’s largest
							high definition LED video wall.
							<br />
							<br />
							Leverage on this impressive screen which provides a stunning
							backdrop with customisable digital content to help promote your
							event and impress your guests as they alight at Suntec Singapore’s
							driveway. On arrival at the main entrance of Suntec Singapore,
							expect to be wowed by the grandeur of The Big Picture - the
							world’s largest high definition LED video wall.
							<br />
							<br />
						</div>
						<div className="services__packages-modal-info-image">
							<Image
								src={modalImage}
								alt="package"
								width="800px"
								height="232px"
							/>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
}
