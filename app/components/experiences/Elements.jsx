import React, { useState } from "react";
import Modal from "../modal/Modal";

export default function Elements(props) {
	const [isModalOpened, setIsModalOpened] = useState(false);
	return (
		<>
			<div className="experiences__element">
				<div className="experiences__element-image">{props.icon}</div>
				<h3
					className={`experiences__element-title experiences__element-title--${props.classname}`}
				>
					{props.title}
				</h3>
				<button
					className="experiences__element-button"
					onClick={() => setIsModalOpened(true)}
				>
					More
				</button>
			</div>
			<Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
				<div className="experiences__element-modal--black">
					<div className="experiences__element-image">{props.icon}</div>
					<h3
						className={`experiences__element-title experiences__element-title--${props.classname}`}
					>
						{props.title}
					</h3>
					<p className="experiences__element-modal--black-text">
						A new breed of virtual platforms can offer a suite of integrated
						services with extended features that are different from any
						traditional video-conferencing platform. We partnered up with some
						of the top virtual event platforms to create “wow” effect in any of
						our virtual events
					</p>
					<span
						className="experiences__element-button"
						onClick={() => setIsModalOpened(false)}
					>
						Close
					</span>
				</div>
			</Modal>
		</>
	);
}
