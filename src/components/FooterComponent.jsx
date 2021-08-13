import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Site Directory</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/beaches">Beaches</Link></li>
                            <li><Link to="/traditions">Traditions</Link></li>
                            <li><Link to="/sightseeing">Sightseeing</Link></li>
                            <li><Link to="/restaurants">Restaurants</Link></li>
                            <li><Link to="/shopping">Shopping</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social Media</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/gohawaii/" target='_blank' rel="noreferrer"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/Hawaii/" target='_blank' rel="noreferrer"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/gohawaii?lang=en" target='_blank' rel="noreferrer"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://youtu.be/6XZOgg9WRhI" target='_blank' rel="noreferrer"><i className="fa fa-youtube" /></a>
                        <a className="fa fa-copyright" href="https://www.gohawaii.com/" target='_blank' rel="noreferrer"> gohawaii.com</a>

                    </div>
                    <div className="col-sm-4 text-center">
                        <h5>Contact Information</h5>
                        <a role="button" className="btn btn-link" href="tel:+18004642924"><i className="fa fa-phone" /> 1-800-GoHawaii </a><br />
                        <a role="button" className="btn btn-link" href="mailto:info@gohawaii.com"><i className="fa fa-envelope-o" /> info@gohawaii.com</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <p>Fun Facts: Oʻahu's nickname is the Gathering Place and is the the most populous of Hawaii's islands.</p>
            </div>
            <div className="container">
                <p className="fa fa-copyright"> All words contained in quotes and all photos have been borrowed from other websites. All work by others has been properly cited with links. Give them props.</p>
            </div>
        </footer>
    );
}

export default Footer;