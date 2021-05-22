import React from 'react'
import Button from '../Button/button'
import './footer.css'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" placeholder="Your Email" name="email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>ABOUT US</h2>
                        <Link to='/sign-up'>How it works?</Link>
                        <Link to='/'>Testimonials</Link> 
                        <Link to='/'>Careers</Link> 
                        <Link to='/'>Investors</Link> 
                        <Link to='/'>Terms of Services</Link> 
                    </div>
                    <div className="footer-link-items">
                        <h2>CONTACT US</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link> 
                        <Link to='/'>Destinations</Link> 
                        <Link to='/'>Sponsorships</Link>
                    </div>
                     <div className="footer-link-items">
                        <h2>VIDEOS</h2>
                        <Link to='/'>Submit Video</Link> 
                        <Link to='/'>Ambassadors</Link> 
                        <Link to='/'>Agency</Link> 
                        <Link to='/'>Influencer</Link> 
                    </div>
                    <div className="footer-link-items">
                        <h2>SOCIAL MEDIA</h2>
                        <Link to='/'>Instagram</Link> 
                        <Link to='/'>Facebook</Link> 
                        <Link to='/'>YouTube</Link> 
                        <Link to='/'>Twitter</Link> 
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRAVELLER<i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRAVELLER @ 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link instagram"
                                to="/"
                                target='_blank'
                                aria-label='Instagram'>
                            <i className="fab fa-intagram-f"></i>
                        </Link>
                        <Link className="social-icon-link facebook"
                                to="/"
                                target='_blank'
                                aria-label='Facebook'>
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link youtube"
                                to="/"
                                target='_blank'
                                aria-label='Youtube'>
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                                to="/"
                                target='_blank'
                                aria-label='Twitter'>
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
