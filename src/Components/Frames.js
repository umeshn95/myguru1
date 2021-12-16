import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Frames = () => {
    return (
        <div>
            <Carousel responsive={responsive}>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><h5><a href="javascript:;"><b>Law College in India</b></a></h5></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><h5><a href="javascript:;"><b>Law College in India</b></a></h5></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><h5><a href="javascript:;"><b>Law College in India</b></a></h5></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><h5><a href="javascript:;"><b>Law College in India</b></a></h5></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><h5><a href="javascript:;"><b>Law College in India</b></a></h5></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><iframe src="https://player.vimeo.com/video/531707463" width="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><h5><a href="javascript:;"><b>Law College in India</b></a></h5></div>

            </Carousel>
        </div>
    )
}

export default Frames
