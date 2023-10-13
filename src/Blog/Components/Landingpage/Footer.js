import React from 'react';
import './Footer.css';
import medium from './medium.webp'
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">
                <img src={medium} alt="lsrcogo" height="75" />
                <p className="footer-company-name">Copyright © 2021 <strong>Medium</strong> All rights reserved</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Ahemdabad</span>
                        india</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 74**9**258</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:sagar00001.co@gmail.com">ayushpadaliya05@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the platform</span>
                    <strong>Medium</strong> is a platform where you can find more creative ideas and knowledge from me
                
                </p>
                <div className="footer-icons">
                    <a href="https://www.linkedin.com/in/ayush-padaliya-54000122b/"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/aayush_1904/"><i className="fa fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/ayush-padaliya-54000122b/"><i className="fa fa-linkedin"></i></a>
                    <a href="https://www.linkedin.com/in/ayush-padaliya-54000122b/"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/ayush-padaliya-54000122b/"><i className="fa fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
