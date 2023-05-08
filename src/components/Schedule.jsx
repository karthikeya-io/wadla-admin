import React from 'react'

const Schedule = () => {
  return (
    <div id="program" className="container-fluid max-width">
    <div className="row">
        <div className="col-sm-12">
            <h2 className="progam-school">Program</h2>
            <br />
            <p>Tentative program - All times are given in IST time (UTC+5:30)</p>
        </div>
    </div>
    <ul className="nav nav-tabs">
        <li className="active"><a data-toggle="tab" href="#Day1">Day 1: Mon 21 Feb</a></li>
        <li><a data-toggle="tab" href="#Day2">Day 2: Tue 22 Feb</a></li>
        <li><a data-toggle="tab" href="#Day3">Day 3: Wed 23 Feb</a></li>
        <li><a data-toggle="tab" href="#Day4">Day 4: Thu 24 Feb</a></li>
        <li><a data-toggle="tab" href="#Day5">Day 5: Fri 25 Feb</a></li>
    </ul>
    <div className="tab-content program-table-vertical">
        <div id="Day1" className="tab-pane fade in active">
            <h3>Day 1: Mon 21 Feb 2022 [IST time (UTC+5:30)]</h3>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" className="program-table-header">WADLA 2.0 Opening Remarks</td>
                    </tr>
                    <tr>
                        <td>09.00 - 10.00 am.</td>
                        <td> Welcome speeches (<a href="#" target="_blank">video</a>)</td>
                    </tr>
                    <tr>
                        <td colspan="1" className="program-table-header">DL Foundation Session-1 </td>
                        <td colspan="1" className="program-table-header"> </td>
                    </tr>

                    <tr>
                        <td>10.15 - 11.15 am.</td>
                        <td><b>Speaker:</b> <a href="http://www.csre.iitb.ac.in/bkmohan/"><i>Prof. B Krishna Mohan,
                                    IIT Bombay</i></a>,
                            <br /><b>Topic:</b> Introduction to Machine Learning
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>11.30am - 12.30 pm.</td>
                        <td><b>Speaker:</b> <a href="http://home.iitj.ac.in/~mishra/"><i>Dr. Anand Mishra, IIT
                                    Jodhpur</i></a>
                            <br /><b>Topic:</b> Introduction to Neural Network & Deep Learning
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td>12.45 - 01.45 pm.</td>
                        <td><b>Speaker:</b> <i><a href="https://www.linkedin.com/in/sumanttyagi/"> Mr. Sumant
                                    Tyagi</a></i>

                            <br /><b>Topic:</b> Introductin to Pytorch(<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" className="program-table-header">Break</td>
                    </tr>


                    <tr className="table-row-break">
                        <td>01.45 pm- 02.15 pm.</td>
                        <td>Lunch Break</td>
                    </tr>
                    <tr>
                        <td colspan="1" className="program-table-header">DL Foundation Session-2 </td>
                        <td colspan="1" className="program-table-header"></td>
                    </tr>

                    <tr>
                        <td>02.15 - 03.15 pm.</td>
                        <td><b>Speaker:</b> <i><a href="https://pransen.github.io/#"> Mr. Prantik Sen, Jhonson
                                    Controls</a></i>

                            <br /><b>Topic:</b> Convolutional Neural Networks &#38; Computer Vision(<a href="#"
                                target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>3.30 - 04.30 pm.</td>
                        <td><b>Speaker:</b> 
                        <i><a
                                href="https://www.linkedin.com/in/amit-kumar-b4b43ab/?originalSubdomain=in">Mr.
                                    Amit Kumar, NVIDIA </a>

                                    </i>
                                        <br /><b>Topic:</b> Deep Learning
                                        (<a href="#" target="_blank">video</a>)
                                        (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td>04.45 - 05.45 pm.</td>
                        <td><b>Speaker:</b> <i><a href="https://www.iitr.ac.in/~CSE/Partha_Pratim_Roy"> Dr. Parth
                                    Pratim Roy, IIT Roorkee</a></i>

                            <br /><b>Topic:</b> Auto Encoders and Unsupervised Learning. (<a href="#"
                                target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>


                    <tr>
                        <td>6.00 - 07.00 pm.</td>
                        <td><b>Speaker:</b> <i><a
                                href="https://www.linkedin.com/in/amit-kumar-b4b43ab/?originalSubdomain=in">Mr.
                                    Amit Kumar
                                    <br /><b>Topic:</b> Hands-on Demo on Deep Learning Frameworks
                                    (<a href="#" target="_blank">video</a>)
                                    (<a href="#" target="_blank">slides</a>)
                                    </a></i>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div id="Day2" className="tab-pane fade in">
            <h3>Day 2: Tue 22 Feb 2022 [IST time (UTC+5:30)]</h3>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td colspan="1" className="program-table-header">Advance DL Session-1</td>
                        <td colspan="1" className="program-table-header"> </td>
                    </tr>

                    <tr>
                        <td>09.00 - 10.00 am.</td>
                        <td><b>Speaker:</b> <a
                                href="https://www.iitp.ac.in/index.php/hi/8-hindi/53-arijit-mondal-hi"><i>Dr. Arijit
                                    Mondal</i></a>,
                            <br /><b>Topic:</b> Recurrent Neural Network &#38; LSTM
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>10.15am - 11.15 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.iitrpr.ac.in/electrical/subbumurala"><i>Dr.
                                    Subramanium Murala, IIT Ropar</i></a>,
                            <br /><b>Topic:</b> Generative Adversarial Networks and Applications to Computer Vision
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td>11.30am - 12.30 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.ml.informatik.tu-darmstadt.de/people/ddhami/"><i>Dr.
                                    Devendra
                                    Singh Dhami, TU Darmstadt</i></a>,
                            <br /><b>Topic:</b> Deep Learning on Graphs
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td>12.45am - 1:45 pm.</td>
                        <td><b>Speaker:</b> <a href="https://ashutosh-modi.github.io/"><i>Dr. Ashutosh Modi, IIT
                                    Kanpur</i></a>,
                            <br /><b>Topic:</b> Deep Learning for NLP
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="program-table-header">Break</td>
                    </tr>


                    <tr className="table-row-break">
                        <td>01.45 pm- 02.15 pm.</td>
                        <td>Lunch Break</td>
                    </tr>
                    <tr>
                        <td colspan="1" className="program-table-header">Advance DL Session-2 </td>
                        <td colspan="1" className="program-table-header"> </td>
                    </tr>





                    <tr>
                        <td>02.15 - 03.15 pm.</td>
                        <td><b>Speaker:</b> <i><a
                                    href="https://www.linkedin.com/in/mandargurav/?originalSubdomain=in">Mr. Mandar
                                    Gurav
                                    HPC Developer (Freelancer, Formerly Intel Cocoperation)</a></i>

                            <br /><b>Topic:</b>HPC & Deep Learning(<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>03.30 - 04.30 pm.</td>
                        <td><b>Speaker:</b> <i><a href="https://plantscience.agri.huji.ac.il/ittai-herrmann">Dr.
                                    Ittai Hermann, Hebrew University of Jerusalem</a></i>

                            <br /><b>Topic:</b> Machine Learning in Agriculture(<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)

                        </td>
                    </tr>

                    <tr>
                        <td>04.45 - 05.45 pm.</td>
                        <td><b>Speaker:</b> <i><a href="https://www.linkedin.com/in/shabbeersh/">Dr. Shabbeer Basha,
                                    DryvAmigo</a></i>

                            <br /><b>Topic:</b> Transfer &#38; Multi-Task Learning(<a href="#"
                                target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>06.00 - 07:00 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.linkedin.com/in/thisisashukla/"><i>Mr. Ankur Shukla
                                </i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank">Hands-on Demo for Generative Networks</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div id="Day3" className="tab-pane fade in">
            <h3>Day 3: Wed 23 Feb 2022 [IST time (UTC+5:30)]</h3>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="1" className="program-table-header">Research Trends Foundation Session-1 </td>
                        <td colspan="1" className="program-table-header"> </td>
                    </tr>
                    <tr>
                        <td>09.00 - 10.00 am.</td>
                        <td><b>Speaker:</b> <a
                                href="https://www.linkedin.com/in/pankaj-malhotra-76b60a24/?originalSubdomain=in"><i>
                                    Mr. Pankaj Malhotra, TCS </i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank">AI-powered Enterprise Personalization</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>


                    <tr>
                        <td>10.15 am - 11.15 am.</td>
                        <td><b>Speaker:</b> <a href="https://www.iith.ac.in/~vineethnb/"><i> Dr. Vineeth N
                                    Balasubramanian, IIT Hyderabad</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Deep Learning with Limited Supervision:
                                Challenges and Trends</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>11.30 pm - 12.30 pm.</td>
                        <td><b>Speaker:</b> <a href="http://www.cse.iitm.ac.in/profile.php?arg=Nw=="><i></i>Prof.
                                Chandra Sekhar C, IIT Madras</a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Attention Transformers</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>12.45 - 01.45 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.linkedin.com/in/dil-thomas/"><i>Mr. Dil Thomas,
                                    Raukuten, Japan</i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank"> Hands-on Transformers</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" className="program-table-header">Break</td>
                    </tr>


                    <tr className="table-row-break">
                        <td>01.45 pm- 02.15 pm.</td>
                        <td>Lunch Break</td>
                    </tr>
                    <tr>
                        <td colspan="1" className="program-table-header">Research Trends Session-2 </td>
                        <td colspan="1" className="program-table-header"> </td>
                    </tr>

                    <tr>
                        <td>02.15 pm - 03.15 pm.</td>
                        <td><b>Speaker:</b> <i><a href="https://www.cse.iitb.ac.in/~ganesh/">Prof. Ganesh
                                    Ramakrishnan, IIT Bombay</a></i>

                            <br /><b>Topic:</b> Deep Learning on IR (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>03.30 pm - 04:30m.</td>
                        <td><b>Speaker:</b> <i><a
                                    href="https://www.linkedin.com/in/dipl-ing-anna-saranti-865b7812a/">Dipl.-Ing.
                                    Anna Saranti, Medical University of Graz, Austria</a></i>

                            <br /><b>Topic:</b> Explainable AI (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>




                    <tr>
                        <td>04.45pm - 05.45 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.linkedin.com/in/megh-shukla/"><i>Mr. Megh Shukla,
                                    Mercedez Benz</i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank">Handson on key point detection</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>

                        <td>06.00 - 07.00 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.linkedin.com/in/kuldeepkurte/"><i>Dr. Kuldeep R
                                    Kurte, Oak Ridge National Laboratory, USA</i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank"> Deep Reinforcement Learning in control
                                optimiztion</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>


        <div id="Day4" className="tab-pane fade in">
            <h3>Day 4: Thu 24 Feb 2022 [IST time (UTC+5:30)]</h3>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="1" className="program-table-header">DL Application Session-1 </td>
                        <td colspan="1" className="program-table-header"> </td>
                    </tr>

                    <tr>
                        <td>09.00 - 10.00 am.</td>
                        <td><b>Speaker:</b> <a href="#"><i>Dr. Rahul Raj, Pixxel,
                                    Microsoft</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Role of AI and deep learning in
                                Agriculture</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>10.15 - 11.15 pm.</td>
                        <td><b>Speaker:</b> <i><a href="https://www.linkedin.com/in/ramasuri-narayanam-0694025/">Dr.
                                    Ramasuri Narayanam, Adobe
                                </a></i>

                            <br /><b>Topic:</b> Deep Learning for Social Network Analysis (<a href="#"
                                target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>


                    <tr>
                        <td>11.30am - 12.30 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.cse.iitd.ac.in/~sumantra/"><i>Prof. Sumantra Dutta
                                    Roy, IIT Delhi</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Some Wanderings in Medical Informatics and
                                Biometrics with Machine Learning and Deep Learning</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>12.45am - 1.45 pm.</td>
                        <td><b>Speaker:</b> <a href="http://www.cns.iisc.ac.in/home/people/sridharan-devarajan/"><i>Dr.
                                    Sridharan
                                    Devarajan, IISc Banglore</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Efficent remedies for outlier detection
                                with varational autoencoders</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className="program-table-header">Break</td>
                    </tr>


                    <tr className="table-row-break">
                        <td>01.45 pm- 02.15 pm.</td>
                        <td>Lunch Break</td>
                    </tr>
                    <tr>
                        <td colspan="1" className="program-table-header">DL Application Session-2 </td>
                        <td colspan="1" className="program-table-header">
                        </td>
                    </tr>
                    <tr>

                        <td>02.15 - 03.15 pm.</td>
                        <td><b>Speaker:</b> <i><a
                                    href="https://www.sydney.edu.au/engineering/about/our-people/academic-staff/matloob-khushi.html">Matloob
                                    Khushi, University of Sydney</a></i>

                            <br /><b>Topic:</b>Hands-on Demo for Time Series Prediction(<a href="#"
                                target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>





                    <tr>
                        <td>03.30 - 04.30 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.iitp.ac.in/~sriparna/"><i>Dr. Sriparna Saha</i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank"> Deep Learning based Dialogre systems</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td>04.45am - 05.45 am.</td>
                        <td><b>Speaker:</b> <a href="http://www.iitkgp.ac.in/department/EE/faculty/ee-rajiv"><i>Dr.
                                    Rajiv Ranjan Sahay, IIT Kharagpur</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Deep Learning in Computer Vision</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>06.00 pm- 07.00 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.linkedin.com/in/rishabhanand16/"><i>Mr. Rishabh
                                    Anand</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Graph-based Deep Learning </a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="Day5" className="tab-pane fade in">
            <h3>Day 5: Fri 25 Feb 2022 [IST time (UTC+5:30)]</h3>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="1" className="program-table-header">DL Application Session-3 </td>
                        <td colspan="1" className="program-table-header">
                        </td>
                    </tr>

                    <tr>
                        <td>09.00 am - 10.00 am.</td>
                        <td><b>Speaker:</b> <a href="https://www.iitg.ac.in/anand.ashish/"><i>Dr. Ashish Anand, IIT
                                    Guwahati</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Deep Learning for NLP, "Language Models:
                                n-grams to modern variants"</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>10.15am - 11.15 pm.</td>
                        <td><b>Speaker:</b> <a href="https://faculty.iiit.ac.in/~jawahar/"><i>Prof. C. V. Jawahar,
                                    IIIT Hyderabad</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Cross Model Translation</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td>11.30am - 12.30 pm.</td>
                        <td><b>Speaker:</b> <a href="#"><i>Col. Kuldeep, Director, School of Excellence in Deep
                                    Learning</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Deep Learning in Defence</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>
                    <tr>
                        <td>12.45pm - 01.45 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.linkedin.com/in/vishnu-chandra-6362a98/"><i>Dr.
                                    Vishnu Chandra, Group Head, National Informatics Centre, GoI</i></a>,
                            <br /><b>Topic:</b> <a href="#" target="_blank">Deep Learning in Governance</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" className="program-table-header">Break</td>
                    </tr>


                    <tr className="table-row-break">
                        <td>01.45 pm- 02.15 pm.</td>
                        <td>Lunch Break</td>
                    </tr>
                    <tr>
                        <td colspan="1" className="program-table-header">DL Application Session-4 </td>
                        <td colspan="1" className="program-table-header">
                        </td>
                    </tr>


                    <tr>
                        <td>02.15 - 03.15 pm.</td>
                        <td><b>Speaker:</b> <a href="https://abhishekvp.github.io/"><i>Dr. Abhishek Potnis
                                    AI Researcher, Honda, Japan </i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank"> Hands-on Semantic Sceine
                                understanding</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>03.30 - 04.30 pm.</td>
                        <td><b>Speaker:</b> <a href="#"><i> Mr. Pankaj Mishra, Deputy Surveyor General, Survey of
                                    India </i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank">Deep Learning for Advanced Surveying</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td>04.45 - 05.45 pm.</td>
                        <td><b>Speaker:</b> <a href="https://www.linkedin.com/in/elvys-linhares-pontes-350a2810a/"><i>
                                    Dr. Elvys
                                    Linhares Pontes,
                                    Trading Central, France </i></a>
                            <br /><b>Topic:</b> <a href="#" target="_blank">Deep Learning in Finance</a>
                            (<a href="#" target="_blank">video</a>)
                            (<a href="#" target="_blank">slides</a>)
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2" className="program-table-header">WADLA 2.0 Closing Ceremony</td>
                    </tr>
                    <tr>
                        <td>06.00 - 07.00 am.</td>
                        <td> Valedictory Speeche (<a href="#" target="_blank">video</a>)</td>
                    </tr>

                </tbody>
            </table>
        </div>

    </div>
</div>
  )
}

export default Schedule