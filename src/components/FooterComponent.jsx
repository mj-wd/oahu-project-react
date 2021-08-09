import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h6>Site Directory</h6>
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>Beaches</li>
                            <li>Culture</li>
                            <li>Geography</li>
                            <li>Restaurants</li>
                            <li>Shopping</li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h6>Social Media</h6>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Hawaii/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/gohawaii?lang=en"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://youtu.be/6XZOgg9WRhI"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <h6>Contact Information</h6>
                        <a role="button" className="btn btn-link" href="tel:+18004642924"><i className="fa fa-phone" /> 1-800-GoHawaii </a><br />
                        <a role="button" className="btn btn-link" href="mailto:info@gohawaii.com"><i className="fa fa-envelope-o" /> info@gohawaii.com</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <p>Fun Facts: Oʻahu's nickname is the Gathering Place and is the  the most populous of the islands.</p>
            </div>
        </footer>
    );
}

export default Footer;