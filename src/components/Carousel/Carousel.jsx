import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Carousel.scss";

export default function Carousel({ data }) {
	const [current, setCurrent] = useState(0);
	const [modal, setModal] = useState(false);

	const len = data.length;

	const prevImage = () => {
		setCurrent(current === 0 ? len - 1 : current - 1);
	};

	const nextImage = () => {
		setCurrent(current === len - 1 ? 0 : current + 1);
	};

	const moveDot = (index) => {
		setCurrent(index);
	};

	const toggleModal = () => {
		setModal(!modal);
	};

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	return (
		<div className="carousel">
			<FaChevronLeft className="left-arrow" onClick={prevImage} />
			<FaChevronRight className="right-arrow" onClick={nextImage} />
			{data.map((item, index) => (
				<img
					key={index}
					className={current === index ? "slide active" : "slide"}
					src={`../../images/${item.image}`}
					alt={item.alt}
					onClick={toggleModal}
					loading={item.id !== 0 ? "lazy" : "eager"}
				/>
			))}

			<div className="slider-dots">
				{data.map((item, index) => (
					<div
						key={index}
						onClick={() => moveDot(index)}
						className={current === index ? "dot active" : "dot"}
					></div>
				))}
			</div>

			{modal && (
				<div className="modal" onClick={toggleModal}>
					<div className="modal-overlay"></div>
					<img
						className="modal-content"
						src={`../../images/${data[current].image}`}
						alt={data[current].alt}
						laoding="lazy"
					/>
					{console.log(data[current].id)}
				</div>
			)}
		</div>
	);
}
