import React from 'react'
import DrIttai from '../assets/images/speakers/all/ittai_herrmann1.jpg'
import DrMatloob from '../assets/images/speakers/all/matloob.png'
import DrDevendra from '../assets/images/speakers/all/ddhami.jpg'
import DrKuldeep from '../assets/images/speakers/all/kuldeep_usa.jfif'
import DrVishnu from '../assets/images/speakers/all/deputy.png'
import ColKuldeep from '../assets/images/speakers/all/kuldeep.png'

const SpeakersSec = () => {

  const academicInternational = [
    {
      name: "Dr. Ittai Herrmann",
      img: DrIttai,
      link: "https://plantscience.agri.huji.ac.il/ittai-herrmann",
      university: "Hebrew University of Jerusalem, Israel",
      designation: ""
    },
    {
      name: "Dr. Matloob Ahmad",
      img: DrMatloob,
      link: "https://www.sydney.edu.au/engineering/about/our-people/academic-staff/matloob-khushi.html",
      university: "The University of Sydney, Australia",
      designation: ""
    },
    {
      name: "Dr. Devendra Singh Dhami",
      img: DrDevendra,
      link: "https://www.ml.informatik.tu-darmstadt.de/people/ddhami/",
      university: "TU Darmstadt, Germany",
      designation: ""
    },
  ]

  const industryExpertsPublic = [
    {
      name: "Dr. Kuldeep Kurte",
      img: DrKuldeep,
      link: "https://www.linkedin.com/in/kuldeepkurte/",
      university: "Oak Ridge National Laboratory, USA",
      designation: ""
    },
    {
      name: "Dr. Vishnu Chandra",
      img: DrVishnu,
      link: "https://www.linkedin.com/in/vishnu-chandra-6362a98/",
      university: "Deputy Director General & Head of Group",
      designation: "National Informatics Centre"
    },
    {
      name: "Col. Kuldeep Yadav",
      img: ColKuldeep,
      link: "",
      university: "HoD of the Computer Systems Department and driving AI projects in Artificial Intelligence",
      designation: "Indian Army, GoI"

    }
  ]

  return (
    <div id="speakers" className="container-fluid text-center max-width">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="speakers-text">Speakers</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <h2 className="speakers-text"> ACADEMIC EXPERTS (INTERNATIONAL)</h2><br />
        </div>
      </div>
      <div className="row slideanim speaker-list">
        {
          academicInternational.map((speaker, index) => (
            <div className="col-sm-4" key={index}>
              <div className="speaker" id=""> <img className="thumbnail-circle"
                src={speaker.img} alt={speaker.name} />
                <a href={speaker.link}
                  target="_blank">
                  <h4> {speaker.name}
                    {
                      speaker.designation ? ` (${speaker.designation})` : ''
                    }
                  </h4>
                </a>
                {speaker.university}
              </div>
            </div>
          ))
        }
      </div>

      <div className="row">
        <div className="col-sm-12">
          <h2 className="speakers-text"> INDUSTRY EXPERTS (PUBLIC SECTOR)</h2><br />
        </div>
      </div>
      <div className="row slideanim speaker-list">
        {
          industryExpertsPublic.map((speaker, index) => (
            <div className="col-sm-4 " key={index}>
              <div className="speaker" id=""> <img className="thumbnail-circle"
                src={speaker.img} alt={speaker.name} />
                <a href={speaker.link}
                  target="_blank">
                  <h4> {speaker.name}
                    {
                      speaker.designation ? ` (${speaker.designation})` : ''
                    }
                  </h4>
                </a>
                {speaker.university}
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default SpeakersSec