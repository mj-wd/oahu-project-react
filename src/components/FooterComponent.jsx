import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        {/* <li><Link to='/#'>Home</Link></li>
                            <li><Link to='/#'>Beaches</Link></li>
                            <li><Link to='/#'>Culture</Link></li>
                            <li><Link to='/#'>Geography</Link></li>
                            <li><Link to='/#'>Restaurants</Link></li>
                            <li><Link to='/#'>Shopping</Link></li> */}
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Hawaii Tourism Social Media</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/gohawaii/?hl=en"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Hawaii/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/gohawaii?lang=en"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://youtu.be/6XZOgg9WRhI"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Hawaii Tourism Authority Contact Information</h5>
                        <a role="button" className="btn btn-link" href="tel:+18004642924"><i className="fa fa-phone" /> 1-800-GoHawaii </a><br />
                        <a role="button" className="btn btn-link" href="mailto:info@gohawaii.com"><i className="fa fa-envelope-o" /> info@gohawaii.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;