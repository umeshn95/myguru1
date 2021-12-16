import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
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

const Lists = () => {
    return (
        <div>
            <Carousel responsive={responsive}>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3 mb-2"><h3>Aerospace Engineer</h3>
                    <p className="fs-5">
                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                        Aeronautical and astronautical engineering are two major branches of ...
                    </p>
                    <a class="button btn-primary" href="javascript:;">Download</a></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><h3>Aerospace Engineer</h3>
                    <p className="fs-5">
                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                        Aeronautical and astronautical engineering are two major branches of ...
                    </p>
                    <a class="button btn-primary" href="javascript:;">Download</a></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><h3>Aerospace Engineer</h3>
                    <p className="fs-5">
                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                        Aeronautical and astronautical engineering are two major branches of ...
                    </p>
                    <a class="button btn-primary" href="javascript:;">Download</a></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><h3>Aerospace Engineer</h3>
                    <p className="fs-5">
                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                        Aeronautical and astronautical engineering are two major branches of ...
                    </p>
                    <a class="button btn-primary" href="javascript:;">Download</a></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><h3>Aerospace Engineer</h3>
                    <p className="fs-5">
                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                        Aeronautical and astronautical engineering are two major branches of ...
                    </p>
                    <a class="button btn-primary" href="javascript:;">Download</a></div>
                <div style={{ border: "1px solid #ddd", borderRadius: "10px" }} className="mx-4 px-3 py-3"><h3>Aerospace Engineer</h3>
                    <p className="fs-5">
                        Aerospace engineering deals with employees who design or build missiles and aircraft for national defense, or spacecraft.
                        Aeronautical and astronautical engineering are two major branches of ...
                    </p>
                    <a class="button btn-primary" href="javascript:;">Download</a></div>


            </Carousel>
        </div>
    )
}

export default Lists
