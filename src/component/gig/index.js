import React, { Component } from 'react';
import Navbar from "../navbar/index"
import Footer from "../footer/index"

class Gig extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="listing-slider mfp-gallery-container margin-bottom-0">
                    <a href="../../images/single-listing-01.jpg" data-background-image="images/single-listing-01.jpg" className="item mfp-gallery" title="Title 1"></a>
                    <a href="images/single-listing-02.jpg" data-background-image="images/single-listing-02.jpg" className="item mfp-gallery" title="Title 3"></a>
                    <a href="images/single-listing-03.jpg" data-background-image="images/single-listing-03.jpg" className="item mfp-gallery" title="Title 2"></a>
                    <a href="images/single-listing-04.jpg" data-background-image="images/single-listing-04.jpg" className="item mfp-gallery" title="Title 4"></a>
                </div>


                <div className="container">
                    <div className="row sticky-wrapper">
                        <div className="col-lg-8 col-md-8 padding-right-30">

                            <div id="titlebar" className="listing-titlebar">
                                <div className="listing-titlebar-title">
                                    <h2>Burger House <span className="listing-tag">Eat & Drink</span></h2>
                                    <span>
                                        <a href="#listing-location" className="listing-address">
                                            <i className="fa fa-map-marker"></i>
                                            2726 Shinn Street, New York
						</a>
                                    </span>
                                    <div className="star-rating" data-rating="5">
                                        <div className="rating-counter"><a href="#listing-reviews">(31 reviews)</a></div>
                                    </div>
                                </div>
                            </div>

                            <div id="listing-nav" className="listing-nav-container">
                                <ul className="listing-nav">
                                    <li><a href="#listing-overview" className="active">Overview</a></li>
                                    <li><a href="#listing-pricing-list">Pricing</a></li>
                                    <li><a href="#listing-location">Location</a></li>
                                    <li><a href="#listing-reviews">Reviews</a></li>
                                    <li><a href="#add-review">Add Review</a></li>
                                </ul>
                            </div>

                            <div id="listing-overview" className="listing-section">


                                <p>
                                    Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.
				</p>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.
				</p>

                                <h3 className="listing-desc-headline">Amenities</h3>
                                <ul className="listing-features checkboxes margin-top-0">
                                    <li>Elevator in building</li>
                                    <li>Friendly workspace</li>
                                    <li>Instant Book</li>
                                    <li>Wireless Internet</li>
                                    <li>Free parking on premises</li>
                                    <li>Free parking on street</li>
                                </ul>
                            </div>


                            <div id="listing-pricing-list" className="listing-section">
                                <h3 className="listing-desc-headline margin-top-70 margin-bottom-30">Pricing</h3>

                                <div className="show-more">
                                    <div className="pricing-list-container">

                                        <h4>Burgers</h4>
                                        <ul>
                                            <li>
                                                <h5>Classic Burger</h5>
                                                <p>Beef, salad, mayonnaise, spicey relish, cheese</p>
                                                <span>$6</span>
                                            </li>
                                            <li>
                                                <h5>Cheddar Burger</h5>
                                                <p>Cheddar cheese, lettuce, tomato, onion, dill pickles</p>
                                                <span>$6</span>
                                            </li>
                                            <li>
                                                <h5>Veggie Burger</h5>
                                                <p>Panko crumbed and fried, grilled peppers and mushroom</p>
                                                <span>$6</span>
                                            </li>
                                            <li>
                                                <h5>Chicken Burger</h5>
                                                <p>Cheese, chicken fillet, avocado, bacon, tomatoes, basil</p>
                                                <span>$6</span>
                                            </li>
                                        </ul>

                                        <h4>Drinks</h4>
                                        <ul>
                                            <li>
                                                <h5>Frozen Shake</h5>
                                                <span>$4</span>
                                            </li>
                                            <li>
                                                <h5>Orange Juice</h5>
                                                <span>$4</span>
                                            </li>
                                            <li>
                                                <h5>Beer</h5>
                                                <span>$4</span>
                                            </li>
                                            <li>
                                                <h5>Water</h5>
                                                <span>Free</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <a href="#" className="show-more-button" data-more-title="Show More" data-less-title="Show Less"><i className="fa fa-angle-down"></i></a>
                            </div>

                            <div id="listing-location" className="listing-section">
                                <h3 className="listing-desc-headline margin-top-60 margin-bottom-30">Location</h3>

                                <div id="singleListingMap-container">
                                    <div id="singleListingMap" data-latitude="40.70437865245596" data-longitude="-73.98674011230469" data-map-icon="im im-icon-Hamburger"></div>
                                    <a href="#" id="streetView">Street View</a>
                                </div>
                            </div>

                            <div id="listing-reviews" className="listing-section">
                                <h3 className="listing-desc-headline margin-top-75 margin-bottom-20">Reviews <span>(12)</span></h3>

                                <div className="clearfix"></div>
                                <section className="comments listing-reviews">

                                    <ul>
                                        <li>
                                            <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
                                            <div className="comment-content"><div className="arrow-comment"></div>
                                                <div className="comment-by">Kathy Brown<span className="date">June 2017</span>
                                                    <div className="star-rating" data-rating="5"></div>
                                                </div>
                                                <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>

                                                <div className="review-images mfp-gallery-container">
                                                    <a href="images/review-image-01.jpg" className="mfp-gallery"><img src="images/review-image-01.jpg" alt="" /></a>
                                                </div>
                                                <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review <span>12</span></a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /> </div>
                                            <div className="comment-content"><div className="arrow-comment"></div>
                                                <div className="comment-by">John Doe<span className="date">May 2017</span>
                                                    <div className="star-rating" data-rating="4"></div>
                                                </div>
                                                <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                                                <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review <span>2</span></a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /></div>
                                            <div className="comment-content"><div className="arrow-comment"></div>
                                                <div className="comment-by">Kathy Brown<span className="date">June 2017</span>
                                                    <div className="star-rating" data-rating="5"></div>
                                                </div>
                                                <p>Morbi velit eros, sagittis in facilisis non, rhoncus et erat. Nam posuere tristique sem, eu ultricies tortor imperdiet vitae. Curabitur lacinia neque non metus</p>

                                                <div className="review-images mfp-gallery-container">
                                                    <a href="images/review-image-02.jpg" className="mfp-gallery"><img src="images/review-image-02.jpg" alt="" /></a>
                                                    <a href="images/review-image-03.jpg" className="mfp-gallery"><img src="images/review-image-03.jpg" alt="" /></a>
                                                </div>
                                                <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review <span>4</span></a>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="avatar"><img src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70" alt="" /> </div>
                                            <div className="comment-content"><div className="arrow-comment"></div>
                                                <div className="comment-by">John Doe<span className="date">May 2017</span>
                                                    <div className="star-rating" data-rating="5"></div>
                                                </div>
                                                <p>Commodo est luctus eget. Proin in nunc laoreet justo volutpat blandit enim. Sem felis, ullamcorper vel aliquam non, varius eget justo. Duis quis nunc tellus sollicitudin mauris.</p>
                                                <a href="#" className="rate-review"><i className="sl sl-icon-like"></i> Helpful Review</a>
                                            </div>

                                        </li>
                                    </ul>
                                </section>

                                <div className="clearfix"></div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="pagination-container margin-top-30">
                                            <nav className="pagination">
                                                <ul>
                                                    <li><a href="#" className="current-page">1</a></li>
                                                    <li><a href="#">2</a></li>
                                                    <li><a href="#"><i className="sl sl-icon-arrow-right"></i></a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>


                            <div id="add-review" className="add-review-box">

                                <h3 className="listing-desc-headline margin-bottom-20">Add Review</h3>

                                <span className="leave-rating-title">Your rating for this listing</span>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="clearfix"></div>
                                        <div className="leave-rating margin-bottom-30">
                                            <input type="radio" name="rating" id="rating-1" value="1" />
                                            <label for="rating-1" className="fa fa-star"></label>
                                            <input type="radio" name="rating" id="rating-2" value="2" />
                                            <label for="rating-2" className="fa fa-star"></label>
                                            <input type="radio" name="rating" id="rating-3" value="3" />
                                            <label for="rating-3" className="fa fa-star"></label>
                                            <input type="radio" name="rating" id="rating-4" value="4" />
                                            <label for="rating-4" className="fa fa-star"></label>
                                            <input type="radio" name="rating" id="rating-5" value="5" />
                                            <label for="rating-5" className="fa fa-star"></label>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="add-review-photos margin-bottom-30">
                                            <div className="photoUpload">
                                                <span><i className="sl sl-icon-arrow-up-circle"></i> Upload Photos</span>
                                                <input type="file" className="upload" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form id="add-comment" className="add-comment">
                                    <fieldset>

                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Name:</label>
                                                <input type="text" value="" />
                                            </div>

                                            <div className="col-md-6">
                                                <label>Email:</label>
                                                <input type="text" value="" />
                                            </div>
                                        </div>

                                        <div>
                                            <label>Review:</label>
                                            <textarea cols="40" rows="3"></textarea>
                                        </div>

                                    </fieldset>

                                    <button className="button">Submit Review</button>
                                    <div className="clearfix"></div>
                                </form>

                            </div>


                        </div>


                        <div className="col-lg-4 col-md-4 margin-top-75 sticky">


                            <div className="verified-badge with-tip" data-tip-content="Listing has been verified and belongs the business owner or manager.">
                                <i className="sl sl-icon-check"></i> Verified Listing
			</div>

                            <div className="boxed-widget booking-widget margin-top-35">
                                <h3><i className="fa fa-calendar-check-o "></i> Book a Table</h3>
                                <div className="row with-forms  margin-top-0">

                                    <div className="col-lg-6 col-md-12">
                                        <input type="text" id="booking-date" data-lang="en" data-large-mode="true" data-large-default="true" data-min-year="2017" data-max-year="2020" data-disabled-days="08/17/2017,08/18/2017" />
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <input type="text" id="booking-time" value="9:00 am" />
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="panel-dropdown">
                                            <a href="#">Guests <span className="qtyTotal" name="qtyTotal">1</span></a>
                                            <div className="panel-dropdown-content">

                                                <div className="qtyButtons">
                                                    <div className="qtyTitle">Adults</div>
                                                    <input type="text" name="qtyInput" value="1" />
                                                </div>

                                                <div className="qtyButtons">
                                                    <div className="qtyTitle">Childrens</div>
                                                    <input type="text" name="qtyInput" value="0" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <a href="pages-booking.html" className="button book-now fullwidth margin-top-5">Book Now</a>
                            </div>


                            <div className="boxed-widget opening-hours margin-top-35">
                                <div className="listing-badge now-open">Now Open</div>
                                <h3><i className="sl sl-icon-clock"></i> Opening Hours</h3>
                                <ul>
                                    <li>Monday <span>9 AM - 5 PM</span></li>
                                    <li>Tuesday <span>9 AM - 5 PM</span></li>
                                    <li>Wednesday <span>9 AM - 5 PM</span></li>
                                    <li>Thursday <span>9 AM - 5 PM</span></li>
                                    <li>Friday <span>9 AM - 5 PM</span></li>
                                    <li>Saturday <span>9 AM - 3 PM</span></li>
                                    <li>Sunday <span>Closed</span></li>
                                </ul>
                            </div>


                            <div className="boxed-widget margin-top-35">
                                <div className="hosted-by-title">
                                    <h4><span>Hosted by</span> <a href="pages-user-profile.html">Tom Perrin</a></h4>
                                    <a href="pages-user-profile.html" className="hosted-by-avatar"><img src="images/dashboard-avatar.jpg" alt="" /></a>
                                </div>
                                <ul className="listing-details-sidebar">
                                    <li><i className="sl sl-icon-phone"></i> (123) 123-456</li>
                                    <li><i className="sl sl-icon-globe"></i> <a href="#">http://example.com</a></li>
                                    <li><i className="fa fa-envelope-o"></i> <a href="#">tom@example.com</a></li>
                                </ul>

                                <ul className="listing-details-sidebar social-profiles">
                                    <li><a href="#" className="facebook-profile"><i className="fa fa-facebook-square"></i> Facebook</a></li>
                                    <li><a href="#" className="twitter-profile"><i className="fa fa-twitter"></i> Twitter</a></li>
                                    <li><a href="#" className="gplus-profile"><i className="fa fa-google-plus"></i> Google Plus</a></li>
                                </ul>

                                <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                                    <div className="small-dialog-header">
                                        <h3>Send Message</h3>
                                    </div>
                                    <div className="message-reply margin-top-0">
                                        <textarea cols="40" rows="3" placeholder="Your message to Tom"></textarea>
                                        <button className="button">Send Message</button>
                                    </div>
                                </div>

                                <a href="#small-dialog" className="send-message-to-owner button popup-with-zoom-anim"><i className="sl sl-icon-envelope-open"></i> Send Message</a>
                            </div>


                            <div className="listing-share margin-top-40 margin-bottom-40 no-border">
                                <button className="like-button"><span className="like-icon"></span> Bookmark this listing</button>
                                <span>159 people bookmarked this place</span>

                                <ul className="share-buttons margin-top-40 margin-bottom-0">
                                    <li><a className="fb-share" href="#"><i className="fa fa-facebook"></i> Share</a></li>
                                    <li><a className="twitter-share" href="#"><i className="fa fa-twitter"></i> Tweet</a></li>
                                    <li><a className="gplus-share" href="#"><i className="fa fa-google-plus"></i> Share</a></li>
                                    <li><a className="pinterest-share" href="#"><i className="fa fa-pinterest-p"></i> Pin</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Gig;
