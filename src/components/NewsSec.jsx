import React from 'react'
import inaugrationImg from '../assets/images/speakers/all/inauguration.jpeg'

const NewsSec = () => {
    return (
        <div id="news" class="container-fluid max-width">
            <div class="row">
                <div class="col-sm-12 scrolling-container">
                    <h2>NEWS</h2>
                    <br/>

                        {/* <marquee>
                            <p style={{color:"red"}} > <a href={inaugrationImg}>
                                Wadla 3.0 coming soon...
                            </a> </p>
                        </marquee> */}
                        <div className='scrolling-text'>
                             <a href={inaugrationImg}>
                                Wadla 3.0 coming soon...
                            </a> 
                        </div>

                    <ul>
                        <li style={{color:"blue"}} >[09 May 2023] <a href={inaugrationImg}>Wadla3.0 coming soon</a> </li>
                        {/* <li style={{color:"blue"}} >[19 Feb 2022] <a
                            href="https://drive.google.com/file/d/1Lt72ld0raUoz7dDRQyra-p8a7m-p3An-/view?usp=sharing">Final
                            Program Schedule</a> is now posted!</li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NewsSec