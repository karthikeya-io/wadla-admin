import React, { useEffect, useState } from 'react'
import '../css/styles.css'
import firstBanner from '../assets/images/covers/first_banner.jpg'
import inauguration from '../assets/images/covers/inauguration.jpeg'
import academiaAll from '../assets/images/covers/Academia_all_foreign.jpg'
import governmentAll from '../assets/images/covers/Government_all.png'
import industryAll from '../assets/images/covers/industry_all.png'
import academiaNational from '../assets/images/covers/Academia_national.png'
import programSchedule from '../assets/images/covers/program_schedule.png'


const BannerSec = () => {

    const images = [
        firstBanner,
        inauguration,
        academiaAll,
        governmentAll,
        industryAll,
        academiaNational,
        programSchedule
    ]

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const showSlides = () => {
            setSlideIndex((prevSlideIndex) => {
                const nextSlideIndex = (prevSlideIndex + 1) % images.length;
                return nextSlideIndex;
            });
        };

        const slideInterval = setInterval(showSlides, 5000); // Change image every 5 seconds

        return () => {
            clearInterval(slideInterval);
        };
    }, [images]);


    return (
        <div className="slideshow-container">

            {
                images.map((image, index) => {
                    return (
                        <div key={index} className="mySlides"
                            style={{ display: index === slideIndex ? 'block' : 'none' }}
                        >
                            <div className="numbertext">{index + 1} / 7</div>
                            <img src={image} className="bg-img" />
                            <div className="text">
                                {
                                    index === 0 ? (
                                        <center>
                                            <h1 className="col-sm-12 cover-text">
                                                <p id="series-title">2nd International Research
                                                    Workshop on Advances in Deep Learning and Applications (2022)</p>
                                                <br />
                                                <span id="event-title">

                                                    WADLA 2.0</span>
                                                <br />
                                                <span id="date-location-info">Workshop on Advances in Deep Learning and Applications (2022) </span>
                                                <br />
                                                Sponsored By <br />
                                                <p id="series-title"> DST, GoI </p>
                                            </h1>
                                        </center>
                                    ) : null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BannerSec