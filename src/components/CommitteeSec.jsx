import React from 'react'




const CommitteeSec = () => {

    const committeeMembers = [
        {
            name: "Prof. G. Kannabiran",
            university: "Director, IIIT Sri City",
            role: "Chief Patron &#38; Chairperson",
            detailsLink: "https://www.iiits.ac.in/home/administration/director/"
        },
        {
            name: "Prof. Leehter Yao",
            university: "NTUT, Taiwan",
            role: "Former Acting Minister of Education, Taiwan",
            detailsLink: "https://itlab.ee.ntut.edu.tw/"
        },
        {
            name: "Prof. Arnon Karnieli",
            university: "Ben-Gurion University of the Negev, Israel",
            role: "",
            detailsLink: "https://www.bgu.ac.il/bidr/research/phys/remote/Personnel/Arnon-in.htm"
        },
        {
            name: "Prof. Jocelyn Channusot",
            university: "Grenoble Institute of Technology, France",
            role: "IEEE Fellow",
            detailsLink: "http://www.gipsa-lab.grenoble-inp.fr/~jocelyn.chanussot/"
        },
        {
            name: "Prof. B Krishna Mohan",
            university: "IIT Bombay",
            role: "",
            detailsLink: "http://www.csre.iitb.ac.in/bkmohan/"
        },
        {
            name: "Prof. Ganesh Ramakrishnan",
            university: "IIT Bombay",
            role: "",
            detailsLink: "https://www.cse.iitb.ac.in/~ganesh/"
        },
        {
            name: "Dr. Ittai Herrmann",
            university: "The Hebrew University of Jerusalem, Israel",
            role: "",
            detailsLink: "https://plantscience.agri.huji.ac.il/ittai-herrmann"
        },
        {
            name: "Dr. Kuldeep Kurte",
            university: "Oak Ridge National Laboratory, USA",
            role: "",
            detailsLink: "https://www.linkedin.com/in/kuldeepkurte/"
        },
        {
            name: "Prof. Matloob Khushi",
            university: "The University of Sydney, Australia",
            role: "",
            detailsLink: "https://www.sydney.edu.au/engineering/about/our-people/academic-staff/matloob-khushi.html"
        },
        {
            name: "Dr. Viswanath Pulabaigari ",
            university: "IIIT- SriCity",
            role: "",
            detailsLink: "https://www.iiits.ac.in/people/faculty/viswanath-pulabaigari/"
        },
        {
            name: "Dr. Mrinmoy Ghorai ",
            university: "IIIT- SriCity",
            role: "",
            detailsLink: "https://www.iiits.ac.in/people/faculty/mrinmoy-ghorai/"
        },
        {
            name: " Dr. Himangshu Sarma",
            university: "IIIT- SriCity",
            role: "",
            detailsLink: "https://www.iiits.ac.in/people/faculty/himangshu-sarma/"
        },
        {
            name: "Dr. Girish G N ",
            university: "IIIT- SriCity",
            role: "",
            detailsLink: "https://www.iiits.ac.in/people/faculty/girish-g-n/"
        },
        {
            name: "Dr. Sreeja S R ",
            university: "IIIT- SriCity",
            role: "",
            detailsLink: "https://www.iiits.ac.in/people/faculty/sreeja-s-r/"
        },

    ]


    return (
        <div id="committee" className="container-fluid max-width">
            <h2 className="row text-center col-sm-12">Organizing Committee</h2>
            <h4 className="committee-list">
                <br />
                {
                    committeeMembers.map((member, index) => {
                        return (
                            <div key={index}>
                                <br/>
                                <b>
                                    <i className="fa fa-caret-right"></i>
                                    <a href={member.detailsLink} target="_blank">{member.name}</a>
                                </b>
                                {member.university}
                                {   
                                    member.role !== "" ? `(${member.role})` : ""
                                }
                                <br />
                            </div>
                        )
                    })
                }
            </h4>

        </div>
    )
}

export default CommitteeSec