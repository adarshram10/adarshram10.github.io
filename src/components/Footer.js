import React from 'react'
import "./Footer.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                 <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                 <div>
                    <p>Tharayil(House)  Tholanur(post)  
                        Palakkad,Kerala
                    </p>
                    <p>INDIA.</p>
                 </div>
                </div>
                <div className='phone'>
                
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
 
                        9207137375</h4>
                
                </div>
                <div className='email'>
                        <h4>
                        <FaMailBulk size={20} style={{color: "#fff",marginRight: "2rem" }}/>
                            adarshtholanur@gmail.com
                        </h4>
                <div>

                </div>
                </div>
              <div>

              </div>
            </div>
            <div className='right'>
               <h2>
                ABOUT
               </h2>
               <h4 className='pop'>FRONTEND DEVELOPER</h4>
               <p>about me </p>
               <div className='social'>
                <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>   
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
               </div>
            </div>

        </div>
    </div>
  )
}

export default Footer