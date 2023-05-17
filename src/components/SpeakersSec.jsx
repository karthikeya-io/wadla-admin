import React from 'react'
import DrIttai from '../assets/images/speakers/all/ittai_herrmann1.jpg'
import DrMatloob from '../assets/images/speakers/all/matloob.png'
import DrDevendra from '../assets/images/speakers/all/ddhami.jpg'
import DrAnna from '../assets/images/speakers/all/ans.jfif'
import DrElvys from '../assets/images/speakers/all/Elvys.jfif'
import DrZhou from '../assets/images/speakers/all/Zhang.png'
import DrRishab from '../assets/images/speakers/all/Rishabh.jfif'

import DrKuldeep from '../assets/images/speakers/all/kuldeep_usa.jfif'
import DrVishnu from '../assets/images/speakers/all/deputy.png'
import ColKuldeep from '../assets/images/speakers/all/kuldeep.png'
import MrPankaj from '../assets/images/speakers/all/pankaj_mishra.jpeg'

import DrRamsuri from '../assets/images/speakers/all/Ramasuri.jpeg'
import MrSumant from '../assets/images/speakers/all/sumant.jpeg'
import MrMegh from '../assets/images/speakers/all/megh_shukla.jpeg'
import MrAmit from  '../assets/images/speakers/all/amit.jpg'
import MrSasank from '../assets/images/speakers/all/Sasank.jfif'
import MrAbhishek from '../assets/images/speakers/all/abhishek.png'
import MrDil from '../assets/images/speakers/all/thomos.jfif'
import MrRateesh from '../assets/images/speakers/all/Reteesh.jpeg'
import MrMandar from '../assets/images/speakers/all/gaurav.jfif'
import MrJigar from '../assets/images/speakers/all/jl.jfif'
import MrAnkur from '../assets/images/speakers/all/ankur.jfif'
import MrPankajMal from '../assets/images/speakers/all/pankaj.jfif'
import MrPrantikSen from '../assets/images/speakers/all/Prantik.jpg'
import DrShabber from '../assets/images/speakers/all/shabbir.jfif'


import ProfCChandra from '../assets/images/speakers/all/cc_IITM.png'
import ProfBKrishna from '../assets/images/speakers/all/bkm.jpg'
import ProfCVJawahar from '../assets/images/speakers/all/JAWAHAR.jpg'
import ProfSumantra from '../assets/images/speakers/all/sumantra.jpg'
import ProfGanesh from '../assets/images/speakers/all/ganeshramakrishnan.png'
import ProfBSDayasagar from '../assets/images/speakers/all/Sagar_2015.jpg'
import ProfSridharan from '../assets/images/speakers/all/sridhar.png'

import DrVineeth from "../assets/images/speakers/all/Vineeth_N_Balasubramanian.jpg"
import DrRajiv from "../assets/images/speakers/all/rajiv.png"
import DrAnand from "../assets/images/speakers/all/anand_mishra.jpg"
import DrPratha from "../assets/images/speakers/all/Partha.jpeg"
import DrSriparna from "../assets/images/speakers/all/sriparna.jpg"
import DrAnish from "../assets/images/speakers/all/anand.jpeg"
import DrArjith from "../assets/images/speakers/all/Arijit.jpg"
import DrMurali from "../assets/images/speakers/all/subbumurala.jpg"

const SpeakersSec = () => {

  const academicInternational = [
    {
      name: "Dr. Ittai Herrmann",
      img: DrIttai,
      link: "https://plantscience.agri.huji.ac.il/ittai-herrmann",
      university: "Hebrew University of Jerusalem, Israel",
      designation: "",
      center: false
    },
    {
      name: "Dr. Matloob Ahmad",
      img: DrMatloob,
      link: "https://www.sydney.edu.au/engineering/about/our-people/academic-staff/matloob-khushi.html",
      university: "The University of Sydney, Australia",
      designation: "",
      center: false
    },
    {
      name: "Dr. Devendra Singh Dhami",
      img: DrDevendra,
      link: "https://www.ml.informatik.tu-darmstadt.de/people/ddhami/",
      university: "TU Darmstadt, Germany",
      designation: "",
      center: false
    },
    {
      name: "Dipl.-Ing. Anna Saranti",
      img: DrAnna,
      link: "https://www.linkedin.com/in/dr-techn-dipl-ing-anna-saranti-865b7812a/",
      university: "Medical University of Graz, Austria",
      designation: "",
      center: false
    },
    {
      name: "Dr. Elvys Linhares Pontes ",
      img: DrElvys,
      link: "https://www.linkedin.com/in/elvys-linhares-pontes-350a2810a/",
      university: "Trading Central, France ",
      designation: "Data Scientist",
      center: false
    },
    {
      name: "Dr. Zhou Zhang",
      img: DrZhou,
      link: "https://bse.wisc.edu/staff/zhang-zhou/",
      university: "University of Wisconsin-Madison",
      designation: "",
      center: false
    },
    {
      name: "Mr. Rishabh Anand",
      img: DrRishab,
      link: "https://www.linkedin.com/in/rishabhanand16/",
      university: "National University of Singapore",
      designation: "",
      center: true
    }
  ]

  const industryExpertsPublic = [
    {
      name: "Dr. Kuldeep Kurte",
      img: DrKuldeep,
      link: "https://www.linkedin.com/in/kuldeepkurte/",
      university: "Oak Ridge National Laboratory, USA",
      designation: "",
      center: true
    },
    {
      name: "Dr. Vishnu Chandra",
      img: DrVishnu,
      link: "https://www.linkedin.com/in/vishnu-chandra-6362a98/",
      university: "Deputy Director General & Head of Group",
      designation: "National Informatics Centre",
      center: false
    },
    {
      name: "Col. Kuldeep Yadav",
      img: ColKuldeep,
      link: "#",
      university: "HoD of the Computer Systems Department and driving AI projects in Artificial Intelligence",
      designation: "Indian Army, GoI",
      center: false
    },
    {
      name: "Mr. Pankaj Mishra",
      img: MrPankaj,
      university: "Deputy Surveyor General at Survey of India",
      designation: "",
      link: "https://www.linkedin.com/in/pankaj-mishra-40a37417/?originalSubdomain=in",
      center: false
    }
  ]

  const industryExpertsPrivate = [
    {
      name: "Dr. Ramasuri Narayanam",
      img: DrRamsuri,
      link: "https://www.linkedin.com/in/ramasuri-narayanam-0694025/",
      university: "Adobe",
      designation: "Senior Research Scientist",
      center: false
    },
    {
      name: "Mr. Sumant Tyagi",
      img: MrSumant,
      link: "https://www.linkedin.com/in/sumanttyagi/",
      university: "Data Scientist",
      designation: "",
      center: false
    },
    {
      name: "Mr. Megh Shukla",
      img: MrMegh,
      link: "https://www.linkedin.com/in/megh-shukla/",
      university: "Mercedez Benz",
      designation: "Computer Vision Engineer",
      center: false
    },
    {
      name: "Mr. Amit Kumar",
      img: MrAmit,
      link: "https://www.linkedin.com/in/amit-kumar-b4b43ab/",
      university: "NVIDIA",
      designation: "Senior Scientist",
      center: false
    },
    {
      name: "Mr. Sasank Chilamkurthy",
      img: MrSasank,
      link: "https://www.linkedin.com/in/sasank-chilamkurthy/",
      university: "Qure.ai (Founder), Co-author of Pytorch",
      designation: "",
      center: false
    },
    {
      name: "Mr. Abhishek Potnis",
      img: MrAbhishek,
      link: "https://abhishekvp.github.io/",
      university: "AI Researcher, Honda, Japan",
      designation: "",
      center: false
    },
    {
      name: "Mr. Dil Thomas",
      img: MrDil,
      link: "https://www.linkedin.com/in/dil-thomas/",
      university: "Rakuten, Japan",
      designation: "Mobile Engineer",
      center: false
    },
    {
      name: "Mr. Reteesh Mukul",
      img: MrRateesh,
      link: "#",
      university: "Huawei R&D",
      designationo: "Senior Scientist",
      center: false
    },
    {
      name: "Mr. Mandar Gurav",
      img: MrMandar,
      link: "https://www.linkedin.com/in/mandargurav/?originalSubdomain=in",
      university: "HPC Developer",
      designation: "Freelancer, Formerly Intel Cocoperation",
      center: false
    },
    {
      name: "Mr. Jigar Halani",
      img: MrJigar,
      link: "https://contactout.com/Jigar-Halani-41495573",
      university: "NVIDIA",
      designation: "Director-Solution Architech & Engg",
      center: false
    },
    {
      name: "Mr. Ankur Shukla",
      img: MrAnkur,
      link: "https://www.linkedin.com/in/thisisashukla/",
      university: "Data Science Consultant",
      designation: "",
      center: false
    },
    {
      name: "Mr Pankaj Malhotra",
      img: MrPankajMal,
      university: "TCS",
      designation: "Research Scientist (DL and AI)",
      link: "https://www.linkedin.com/in/pankaj-malhotra-76b60a24/?originalSubdomain=in",
      center: false
    },
    {
      name: "Mr. Prantik Sen",
      img: MrPrantikSen,
      link: "https://pransen.github.io/#",
      university: "JOHNSON CONTROLS INC.",
      designation: "Senior Data Scientist",
      center: false
    },
    {
      name: "Dr. Shabbeer Basha ",
      img: DrShabber,
      link: "https://www.linkedin.com/in/shabbeersh/",
      university: "DryvAmigo, Bang.",
      designation: "Technical Lead (CV & ML)",
      center: false
    }
  ]

  const academicNational = [
    {
      name: "Prof. C. Chandra Sekhar",
      img: ProfCChandra,
      link: "http://www.cse.iitm.ac.in/profile.php?arg=Nw==",
      university: "IIT Madras",
      designation: "(HoD)",
      center: false
    },
    {
      name: "Prof. B Krishna Mohan",
      img: ProfBKrishna,
      link: "http://www.csre.iitb.ac.in/bkmohan/",
      university: "IIT Bombay",
      designation: "",
      center: false
    },
    {
      name: "Prof. C. V. Jawahar",
      img: ProfCVJawahar,
      link: "https://faculty.iiit.ac.in/~jawahar/",
      university: "IIIT Hyderabad",
      designation: "",
      center: false
    },
    {
      name: "Prof. Sumantra Dutta Roy",
      img: ProfSumantra,
      link: "https://www.cse.iitd.ac.in/~sumantra/",
      university: "IIT Delhi",
      designation: "",
      center: false
    },
    {
      name: "Prof. Ganesh Ramakrishnan",
      img: ProfGanesh,
      link: "https://www.cse.iitb.ac.in/~ganesh/",
      university: "IIT Bombay",
      designation: "",
      center: false
    },
    {
      name: "Prof. B S Dayasagar",
      img: ProfBSDayasagar,
      link: "https://www.isibang.ac.in/~bsdsagar/",
      university: "ISI Bangalore",
      designation: "",
      center: false
    },
    {
      name: "Dr. Sridharan Devarajan",
      img: ProfSridharan,
      link: "http://www.cns.iisc.ac.in/home/people/sridharan-devarajan/",
      university: "IISc Bangalore",
      designation: "",
      center: false
    },
    {
      name: "Dr. Vineeth N Balasubramanian", 
      img: DrVineeth,
      link: "https://www.iith.ac.in/~vineethnb/",
      university: "IIT Hyderabad",
      designation: "",
      center: false
    },
    {
      name: "Dr. Rajiv Ranjan Sahay",
      img: DrRajiv,
      link: "http://www.iitkgp.ac.in/department/EE/faculty/ee-rajiv",
      university: "IIT Kharagpur",
      designation: "",
      center: false
    },
    {
      name: "Dr Anand Mishra",
      img: DrAnand,
      link: "https://anandmishra22.github.io/",
      university: "IIT Jodhpur",
      designation: "",
      center: false
    },
    {
      name: "Dr. Partha Pratim Roy",
      img: DrPratha,
      link: "hhttps://www.iitr.ac.in/~CSE/Partha_Pratim_Roy",
      university: "IIT Roorkee",
      designation: "",
      center: false
    },
    {
      name: "Dr. Sriparna Saha",
      img: DrSriparna,
      link: "https://www.iitp.ac.in/~sriparna/",
      university: "IIT Patna",
      designation: "",
      center: false
    },
    {
      name: "Dr. Ashish Anand",
      img: DrAnish,
      link: "https://www.iitg.ac.in/anand.ashish/",
      university: "IIT Guwahati",
      designation: "",
      center: false
    },
    {
      name: "Dr. Arijit Mondal",
      img: DrArjith,
      link: "https://www.iitrpr.ac.in/electrical/subbumurala",
      university: "IIT Patna",
      designation: "",
      center: false
    },
    {
      name: "Dr. Subrahmanyam Murala",
      img: DrMurali,
      link: "https://www.iitrpr.ac.in/electrical/subbumurala",
      university: "IIT Ropar",
      designation: "",
      center: false
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
      <div className="row  slideanim speaker-list">
        {
          academicInternational.map((speaker, index) => {
          
          return speaker.center === false? 
          (
            <div className="col-sm-4 " key={index}>
              <div className="speaker" id=""> <img className="thumbnail-circle"
                src={speaker.img} alt={speaker.name} />
                <a href={speaker.link}
                  target="_blank">
                  <h4>
                   {speaker.name}  
                  </h4>
                </a>
                {speaker.university} {
                      speaker.designation ? ` (${speaker.designation})` : ''
                    }
              </div>
            </div>
          )
          :
          (
            <div className="row slideanim speaker-list">
            <div className="col-sm-12 " key={index}>
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
            </div>
          )
          }
          )
        }
      </div>

      <div className="row">
        <div className="col-sm-12">
          <h2 className="speakers-text"> INDUSTRY EXPERTS (PUBLIC SECTOR)</h2><br />
        </div>
      </div>
      <div className="row  slideanim speaker-list">
        {
          industryExpertsPublic.map((speaker, index) => {
          
          return speaker.center === false? 
          (
            <div className="col-sm-4 " key={index}>
              <div className="speaker" id=""> <img className="thumbnail-circle"
                src={speaker.img} alt={speaker.name} />
                <a href={speaker.link}
                  target="_blank">
                  <h4> {speaker.name}
                  </h4>
                </a>
                {speaker.university} {
                      speaker.designation ? ` (${speaker.designation})` : ''
                    }
              </div>
            </div>
          )
          :
          (
            <div className="row slideanim speaker-list">
            <div className="col-sm-12 " key={index}>
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
            </div>
          )
          }
          )
        }
      </div>

      <div className="row">
        <div className="col-sm-12">
          <h2 className="speakers-text"> INDUSTRY EXPERTS (PRIVATE SECTOR)</h2><br />
        </div>
      </div>
      <div className="row  slideanim speaker-list ">
        {
          industryExpertsPrivate.map((speaker, index) => {
          
          return speaker.center === false? 
          (
            <div className="col-sm-4" key={index}>
              <div className="speaker" id=""> <img className="thumbnail-circle"
                src={speaker.img} alt={speaker.name} />
                <a href={speaker.link}
                  target="_blank">
                  <h4> {speaker.name}
                  </h4>
                </a>
                {speaker.university} {
                      speaker.designation ? ` (${speaker.designation})` : ''
                    }
              </div>
            </div>
          )
          :
          (
            <div className="row slideanim speaker-list">
            <div className="col-sm-12 " key={index}>
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
            </div>
          )
          }
          )
        }
      </div>

      <div className="row">
        <div className="col-sm-12"> 
          <h2 className="speakers-text"> ACADEMIC EXPERTS (NATIONAL)</h2><br />
        </div>
      </div>
      <div className="row  slideanim speaker-list ">
        {
          academicNational.map((speaker, index) => {
          
          return speaker.center === false? 
          (
            <div className="col-sm-4" key={index}>
              <div className="speaker" id=""> <img className="thumbnail-circle"
                src={speaker.img} alt={speaker.name} />
                <a href={speaker.link}
                  target="_blank">
                  <h4> {speaker.name}
                  </h4>
                </a>
                {speaker.university} {
                      speaker.designation ? ` (${speaker.designation})` : ''
                    }
              </div>
            </div>
          )
          :
          (
            <div className="row slideanim speaker-list">
            <div className="col-sm-12 " key={index}>
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
            </div>
          )
          }
          )
        }
      </div>


    </div>
  )
}

export default SpeakersSec