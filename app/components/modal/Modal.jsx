import { createPortal } from "react-dom";
import CloseModal from "../../icons/CloseModal";

export default function Modal({ isOpened, children, onClose }) {
	if (!isOpened) {
		return null;
	}

	return createPortal(
		<>
			<div className="overlay" onClick={onClose} />
			<div className="c-modal experiences__element-modal">
				<div>
					<span className="c-modal__close-button" onClick={onClose}>
						<CloseModal />
					</span>
					<div className="c-modal__content ">{children}</div>
				</div>
			</div>
		</>,
		document.getElementById("portal")
	);
}
