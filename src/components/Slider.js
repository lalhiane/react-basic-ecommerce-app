import Image_1 from "../imgs/img-1.jpg";

import Image_2 from "../imgs/img-2.jpg";

import Image_3 from "../imgs/img-3.jpg";

import "./Slider.css";

function Slider() {
    
    return (

        <div id="carouselExample" className="carousel slide">

            <div className="carousel-inner">

                <div className="carousel-item active">

                    <img src={Image_1} className="d-block w-100 slider-height" alt="..." />

                </div>

                <div className="carousel-item">

                    <img src={Image_2} className="d-block w-100 slider-height" alt="..." />

                </div>

                <div className="carousel-item">

                    <img src={Image_3} className="d-block w-100 slider-height" alt="..." />

                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">

                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

                <span className="visually-hidden">Previous</span>

            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">

                <span className="carousel-control-next-icon" aria-hidden="true"></span>

                <span className="visually-hidden">Next</span>

            </button>

        </div>

    );

}

export default Slider;