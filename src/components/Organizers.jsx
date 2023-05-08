import React from 'react'
import DrRakesImg from '../assets/images/organizers/rakesh.jpg'
import DrArunImg from '../assets/images/organizers/arun.jpg'

const Organizers = () => {

    const organizers = [
        {
            name: "Dr. Rakesh Kumar Sanodiya",
            img: DrRakesImg,
            link: "https://www.iiits.ac.in/people/regular-faculty/dr-rakesh-kumar-sanodiya/",
            university: "IIIT Sri City, Chittoor, India",
            designation: "Convener"
        },
        {
            name: "Dr. Arun PV",
            img: DrArunImg,
            link: "https://www.iiits.ac.in/people/regular-faculty/dr-arun-pv/",
            university: "IIIT Sri City, Chittoor, India",
            designation: "Co-Convener"
        }
    ]

  return (
    <div id="sponsors-organizers" className="container-fluid text-center max-width">
    <div className="text-center">

        <h2>Organizers</h2>

    </div>
    <div className="row text-center slideanim organizers-list">
        <div className="img-container">
            {organizers.map((organizer, index) => (
                <div className="col-sm-4" key={index}>
                    <div className="speaker" id="Rakesh"> <img className="thumbnail-circle"
                        src={organizer.img} alt={organizer.name}/>
                    <a href={organizer.link}
                        target="_blank">
                        <h4> {organizer.name}
                            {
                                organizer.designation ? ` (${organizer.designation})` : ''
                            }
                        </h4>
                    </a>
                    {organizer.university}
                </div>
            </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default Organizers