import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <footer id="footer" className="footer">
		<div className="footer-main">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-sm-12 footer-widget">
						<h3 className="widget-title">Trending Now</h3>
						<div className="list-post-block">
							<ul className="list-post">
								<li className="d-flex">
									<div className="post-block-style post-float clearfix d-flex">
										<div className="post-thumb">
											<Link to="/">
												<img className="img-fluid" src="https://via.placeholder.com/95x75" alt="" />
											</Link>
										</div>

										<div className="post-content ms-2">
								 			<h2 className="post-title title-small">
								 				<Link to="/">Can't shed those Gym? The problem might...</Link>
								 			</h2>
								 			<div className="post-meta">
								 				<span className="post-date">Mar 13, 2017</span>
								 			</div>
							 			</div>
									</div>
								</li>

								<li className="d-flex">
									<div className="post-block-style post-float clearfix d-flex">
										<div className="post-thumb">
											<Link to="/">
												<img className="img-fluid" src="https://via.placeholder.com/95x75" alt="" />
											</Link>
										</div>

										<div className="post-content ms-2">
								 			<h2 className="post-title title-small">
								 				<Link to="/">Deleting fears from the brain means you…</Link>
								 			</h2>
								 			<div className="post-meta">
								 				<span className="post-date">Jan 11, 2017</span>
								 			</div>
							 			</div>
									</div>
								</li>

								<li className="d-flex">
									<div className="post-block-style post-float clearfix d-flex">
										<div className="post-thumb">
											<Link to="/">
												<img className="img-fluid" src="https://via.placeholder.com/95x75" alt="" />
											</Link>
										</div>

										<div className="post-content ms-2">
								 			<h2 className="post-title title-small ">
								 				<Link to="/">Smart packs parking sensor tech...</Link>
								 			</h2>
								 			<div className="post-meta">
								 				<span className="post-date">Feb 19, 2017</span>
								 			</div>
							 			</div>
									</div>
								</li>
							</ul>
						</div>
						
					</div>

					<div className="col-lg-3 col-sm-12 footer-widget widget-categories">
						<h3 className="widget-title">Hot Categories</h3>
						<ul>
							<li>
								<Link to="/"><span className="catTitle">Robotics</span><span className="catCounter"> (5)</span></Link>
							</li>
							<li>
								<Link to="/"><span className="catTitle">Games</span><span className="catCounter"> (6)</span></Link>
							</li>
							<li>
								<Link to="/"><span className="catTitle">Gadgets</span><span className="catCounter"> (5)</span></Link>
							</li>
							<li>
								<Link to="/"><span className="catTitle">Travel</span><span className="catCounter"> (5)</span></Link>
							</li>
							<li>
								<Link to="/"><span className="catTitle">Health</span><span className="catCounter"> (5)</span></Link>
							</li>
							<li>
								<Link to="/"><span className="catTitle">Architecture</span><span className="catCounter"> (5)</span></Link>
							</li>
							<li>
								<Link to="/"><span className="catTitle">Food</span><span className="catCounter"> (5)</span></Link>
							</li>
						</ul>
						
					</div>

					<div className="col-lg-3 col-sm-12 footer-widget twitter-widget">
						<h3 className="widget-title">Latest Tweets</h3>
						<ul>
							<li>
								<div className="tweet-text">
								<span>About 13 days ago</span>
								Please, Wait for the next version of our templates to update #Joomla 3.7 
								<Link to="/">https://t.co/LlEv8HgokN</Link>
								</div>
							</li>
							<li>
								<div className="tweet-text">
								<span>About 15 days ago</span>
								kisancenter
								<Link to="/">https://t.co/uDjRH4Gya9</Link>
								</div>
							</li>
							<li>
								<div className="tweet-text">
								<span>About 1 month ago</span>
								Please, Wait for the next version of our templates to update #Joomla 3.7 
								<Link to="/">https://t.co/LlEv8HgokN</Link>
								</div>
							</li>
						</ul>
					</div>

					<div className="col-lg-3 col-sm-12 footer-widget">
						<h3 className="widget-title">Post Gallery</h3>
						<div className="gallery-widget">
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
							<Link to="/"><img className="img-fluid" src="https://via.placeholder.com/80x65" alt="" /></Link>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className="footer-info text-center">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="footer-info-content">
							<div className="footer-logo">
								<img className="img-fluid" src="images/logo.png" alt="" />
							</div>
							<p>Kisan Center Worldwide is a popular online newsportal and going source for technical and digital content for its influential audience around the globe. You can reach us via email or phone.</p>
							<p className="footer-info-phone"><i className="fab fa-phone"></i> +(785) 238-4131</p>
							<p className="footer-info-email"><i className="fab fa-envelope-o"></i> editor@kisancenter.com</p>
							<ul className="unstyled footer-social">
								<li>
									<Link title="Rss" to="/">
										<span className="social-icon"><i className="fab fa-youtube"></i></span>
									</Link>
									<Link title="Facebook" to="/">
										<span className="social-icon"><i className="fab fa-facebook"></i></span>
									</Link>
									<Link title="Twitter" to="/">
										<span className="social-icon"><i className="fab fa-twitter"></i></span>
									</Link>
									<Link title="Google+" to="/">
										<span className="social-icon"><i className="fab fa-google-plus"></i></span>
									</Link>
									<Link title="Linkdin" to="/">
										<span className="social-icon"><i className="fab fa-linkedin"></i></span>
									</Link>
									<Link title="Skype" to="/">
										<span className="social-icon"><i className="fab fa-skype"></i></span>
									</Link>
									<Link title="Skype" to="/">
										<span className="social-icon"><i className="fab fa-dribbble"></i></span>
									</Link>
									<Link title="Skype" to="/">
										<span className="social-icon"><i className="fab fa-pinterest"></i></span>
									</Link>
									<Link title="Skype" to="/">
										<span className="social-icon"><i className="fab fa-instagram"></i></span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	</footer>
	<div class="copyright">
         <div class="container">
            <div class="row">
               <div class="col-sm-12 col-md-6">
                  <div class="copyright-info">
                     <span>Copyright © 2023 Kisancenter All Rights Reserved. Designed By Inficom Solutions</span>
                  </div>
               </div>

               <div class="col-sm-12 col-md-6">
                  <div class="footer-menu">
                     <ul class="nav unstyled">
                        <li><Link to="/">Site Terms</Link></li>
                        <li><Link to="/">Privacy</Link></li>
                        <li><Link to="/">Advertisement</Link></li>
                        <li><Link to="/">Cookies Policy</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                     </ul>
                  </div>
               </div>
            </div>


         </div>
   </div>
    </div>
  )
}

export default Footer