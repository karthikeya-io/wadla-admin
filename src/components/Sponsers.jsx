import React from 'react'
import SERBLogo from '../assets/images/sponsors/SERB-LOGO.jpg'


const Sponsers = () => {
    const sponsors = [
        {
            name: "SERB",
            img: SERBLogo,
            link: "https://www.serb.gov.in/",
            university: "Science and Engineering Research Board (SERB), India",
            designation: ""
        }

    ]


    return (
        <div id="sponsors" class="container-fluid text-center max-width">
            <div class="text-center">
                <h2 class="sponsors">Sponsors</h2>
            </div>
            {/* for multiple sponser replace classNames row text-center -> col-sm-4 */}
            {
                sponsors.map((sponsor, index) => (
                    <div key={index} className="row text-center slideanim">
                        <div className="img-container">
                            <div className="sponsor-logo"> <a href={sponsor.link} target="_blank">
                                <img src={sponsor.img} alt={sponsor.name} /> </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Sponsers