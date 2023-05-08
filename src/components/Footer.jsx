import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" className="container-fluid text-center">
            <div className="row">
                <div className="col-sm-6">
                    <h2>PAST EVENTS</h2>
                    <br />
                    <div className="retro">

                        <div className="row ">
                            <i className="fa fa-history fa-lg"></i> <a href="https://sites.google.com/view/wadla2021"
                                target="_blank">WADLA 1.0</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 contact">
                    <h2>CONTACT US</h2><br />
                    <div className="contact-us-info">
                        <div className="row contact-email">
                            <h3><i className="fa fa-envelope"></i> : <a href="rakesh.s@iiits.in">wadla@iiits.in/
                                rakesh.s@iiits.in/ arun.pv@iiits.in</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer