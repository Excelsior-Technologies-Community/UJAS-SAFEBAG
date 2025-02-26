import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../assets/footer.css";
IJGRJHIJSB

const Footer = () => {
  return (
    <div>
    <div className="Footer bg-dark text-light py-4"/>
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-4">
                        <h5 className="text-white">
                            <i className="fas fa-shopping-cart"></i> SAFE BAG
                        </h5>
                        <p className="text-muted">
                            Maxime Molestiae Quidem Eligendi Consequatur Itaque. 
                            Repellendus Corrupti Deserunt Est In Et Molestiae Sit Velit Dolore.
                        </p>
                       
                        <div className="social-icons">
                            <a href="#" className="text-light me-3">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="text-light me-3">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="text-light me-3">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="#" className="text-light">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>

                    
                    <div className="col-md-3">
                        <h5>Products Categories</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">Fruit & Vegetables</a></li>
                            <li><a href="#" className="text-muted">Breakfast & Dairy</a></li>
                            <li><a href="#" className="text-muted">Biscuits, Snacks & Chocolates</a></li>
                            <li><a href="#" className="text-muted">Pet Foods</a></li>
                            <li><a href="#" className="text-muted">Chicken, Meat & Fish</a></li>
                        </ul>
                    </div>

                    
                    <div className="col-md-2">
                        <h5>Useful Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">About Us</a></li>
                            <li><a href="#" className="text-muted">Wishlist</a></li>
                            <li><a href="#" className="text-muted">My Cart</a></li>
                            <li><a href="#" className="text-muted">Blogs</a></li>
                        </ul>
                    </div>

                  
                    <div className="col-md-3">
                        <h5>Customer Service</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-muted">Contact Us</a></li>
                            <li><a href="#" className="text-muted">Terms & Conditions</a></li>
                            <li><a href="#" className="text-muted">Shipping & Returns</a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
   
  )
}

export default Footer
