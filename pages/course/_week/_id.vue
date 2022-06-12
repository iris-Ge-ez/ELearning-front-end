<template>

    <div  v-if="loading" class="col-md-12">
                        <div style="margin-left:45%;margin-bottom:25%;margin-top:10%">


                            <Loader></Loader>
                        </div>

                    </div>

	<div v-else>
		<!--// Mini Header \\-->
		<div class="wm-mini-header">
			<span class="wm-blue-transparent"></span>
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="wm-mini-title">
							<h1>Our Courses</h1>
						</div>
						<div class="wm-breadcrumb">
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">Courses</a></li>
								<li>Detail</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--// Mini Header \\-->

		<!--// Main Content \\-->
		<div class="wm-main-content">

			<!--// Main Section \\-->
			<div class="wm-main-section">
				<div class="container">
					<div class="row">
						<!-- <aside class="col-md-3"> -->
						<!-- <div class="widget widget_course-price">
								<div class="wm-widget-heading">
									<h4>Biology Course </h4>
                  {{week}}
								</div>
							<a href="#">enroll this Week 4</a>
								<ul>
									<li><a href="#"><i class=" wmicon-social7"></i>234 Students</a></li>
									<li><a href="#"><i class=" wmicon-clock2"></i><time datetime="2017-02-14">Duration: 2hr30mins</time></a></li>
									<li><a href="#"><i class=" wmicon-book2"></i>14 Lectures</a></li>
									<li><a href="#">
										<div class="wm-levelrating">
											<span class="rating-box" style="width:70%"></span>
										</div>
										Intermediate</a></li>
									<li><a href="#"><i class=" wmicon-technology"></i>English Language</a></li>
								</ul>
							</div> -->

						<!-- 							
							<div class="widget widget_archive">
								<div class="wm-widget-title">
									<h2>Archive</h2>
								</div>
								<div class="wm-select-two">
									<select>
										<option>Select Month</option>
										<option>Select Month1</option>
										<option>Select Month2</option>
										<option>Select Month3</option>
									</select>
								</div>
							</div>
							<div class="widget widget_professor-info">
								<div class="wm-widget-title">
									<h2>About Professor</h2>
								</div>
								<figure>
									<a href="#"><img src="../../../static/extra-images/our-courses-author.jpg" alt=""></a>
								</figure>
								<div class="wm-Professor-info">
									<h6><a href="#">Shelly T. Forrester</a></h6>
									<span>15 yrs. experience</span>
								</div>
								<p>Shelly T. accompanied Dr. Stephen Harnish to SC12, an international supercomputing conference in Salt Lake City, Utah. At the conference.</p>
								<a class="wm-read-more" href="#">Read More</a>
							</div>
						
							 -->

						<!-- </aside> -->
						<div class="col-md-12">
							<div class="wm-blog-single wm-courses">
								<figure class="wm-detail-thumb">
									<video :src="week.video" width="1118" height="370" controls
										:poster="week.thumbnail">


									</video>

									<!-- <img :src="week.thumbnail" alt=""> -->
								</figure>
								<div class="wm-blog-author wm-ourcourses">
									<div class="wm-blogauthor-left">
										<img src="../../../static/extra-images/papular-courses-thumb-3.jpg" alt="">
										<!-- <a class="wm-authorpost" href="#">Mr Teacher</a> -->
									</div>
									<div class="wm-our-courses">
										<ul>
											<li>
												<a href="#"><i class="wmicon-tool2"></i> last updated
													{{ week.updated_date | date }}</a>
											</li>
											<!-- <li>
												<a href="#"><i class="wmicon-diploma"></i>Certificate: No</a>
											</li>
											<li>
												<a href="#"><i class="wmicon-symbol"></i>Assesments: Yes</a>
											</li> -->
										</ul>
									</div>
								</div>
							</div>
							<div class="wm-courses-reviewes">
								<div class="wm-ourcourses-left">
									<h6>{{ week.name }}</h6>
									<!-- <div class="wm-rating">
										<span class="rating-box" style="width:100%"></span>																				
									</div>
									<a href="#">3 Reviews</a> -->
								</div>
								<div class="wm-ourcourses-right">
									<!-- <a class="wm-previous-icon" href="#"><i class="fa fa-angle-left" ></i>previous Week</a>
									<a class="wm-Next-icon" href="#">Next Week<i class="fa fa-angle-right" ></i></a> -->
									<nuxt-link :to="`/course/${week_id}/quiz/${week.id}`"><a href="#"
											class="wm-previous-icon">Take Quiz For this Week <i
												class="fa fa-angle-right"></i></a></nuxt-link>
									<a class="wm-more-details" style="margin-left:10px;height:45px"
										:href="week.book">Download Pdf</a>
								</div>
							</div>

							<!--               
							<div class="wm-our-course-detail">
								<div class="wm-title-full">
									<h2>Advanced Architectural Research</h2>
								</div>
								<p class="wm-text">Architecture and engineering have a history where research and practice go hand in hand, where many great practices have grown as a result of fundamental research and where many research projects arise from ground-breaking design. This is especially true during periods of economic inactivity when recent modes of working are called into question and new modes (sometimes based on rediscovered historical precedent) are established.</p>
								<p>The programme encourages students to develop advanced and speculative approaches to the design of cities, landscape and territories. It promotes high design values and the integration of new and innovative technologies to address the challenges facing contemporary cities, such as urban growth, climate change, globalisation and social inequality. The programme is designed for students of architecture, landscape architecture, engineering and related disciplines, who wish to enhance their academic, intellectual and professional skills. </p>
								<div class="wm-course-blockquote-two">
									<blockquote>Training is everything. The peach was once a bitter almond; cauliflower is nothing but cabbage with an education.</blockquote>
									<span>- Mark Twain</span>
								</div>								
								<div class="wm-courses-info">
									<div class="wm-title-full">
										<h2>What You’ll Study</h2>
									</div>
									<ul>
										<li><a href="#" class="wmicon-lock"></a>Landscape architecture</li>
										<li><a href="#" class="wmicon-lock"></a>Classical Archaeology and Ancient History</li>	
										<li><a href="#" class="wmicon-lock"></a>Engineering</li>
										<li><a href="#" class="wmicon-lock"></a>Mathematics</li>
										<li><a href="#" class="wmicon-lock"></a>Planning or all of related discipline</li>
										<li><a href="#" class="wmicon-lock"></a>Mathematics and Computer Science</li>
										<li><a href="#" class="wmicon-lock"></a>Exceptionally, applicants from geography </li>	
										<li><a href="#" class="wmicon-lock"></a>Philosophy, Politics and Economics(PPE)</li>
										<li><a href="#" class="wmicon-lock"></a>Ecology & social sciences will also be considered</li>
										<li><a href="#" class="wmicon-lock"></a>Mathematics and Statistics</li>
									</ul>
								</div>								
								<div class="wm-certification-listing">
									<div class="wm-title-full">
										<h2>What You Have to Perform After Taking This Week Course</h2>
									</div>
									<p>The programme is designed for students of architecture, landscape architecture, engineering and related disciplines, who wish to enhance their academic, intellectual and professional skills. </p>
									<ul>
										<li><a href="#" class="wmicon-mark"></a>Research the conditions of urbanism</li>
										<li><a href="#" class="wmicon-mark"></a>Employs advanced design techniques </li>
										<li><a href="#" class="wmicon-mark"></a>Lens of landscape theory and design practice</li>
										<li><a href="#" class="wmicon-mark"></a>inovative methodologies </li>
										<li><a href="#" class="wmicon-mark"></a>Employ advanced design techniques</li>
										<li><a href="#" class="wmicon-mark"></a>Develop speculative designs</li>
										<li><a href="#" class="wmicon-mark"></a>Innovative methodologies</li>
										<li><a href="#" class="wmicon-mark"></a>Strategies & interventions  </li>
									</ul>																		
								</div>	
							</div> -->

							<!-- <div class="wm-courses-getting-started">
								<div class="wm-title-full">
									<h2>Getting Started</h2>
								</div>
								<div class="wm-courses-started">
									<span>Lesson 1: Course Additional Entry</span>
									<ul class="wm-courses-started-listing">
										<li>
											<a href="#" class="wmicon-pen"></a>
											<div class="wm-courses-started-text">
												<h6><a href="#">Archaeology and Anthropology</a></h6>
												<span><a href="#" class="wmicon-time2"></a><time datetime="2017-02-14">16/05/2016 - 17/06/2016</time></span>
												<span><a href="#" class=" wmicon-clock2"></a><time datetime="2017-02-14">Duration: 1hr30mins</time></span>													
											</div>
											<div class="wm-courses-preview">
												<a href="#">Preview</a>
											</div>
										</li>
										<li>
											<a href="#" class="wmicon-pen"></a>
											<div class="wm-courses-started-text">
												<h6><a href="#">Classics and Oriental Studies</a></h6>
												<span><a href="#" class="wmicon-time2"></a><time datetime="2017-02-14">13/05/2016 - 10/06/2016</time></span>
												<span><a href="#" class=" wmicon-clock2"></a><time datetime="2017-02-14">Duration: 2hr30mins</time></span>													
											</div>
											<div class="wm-courses-preview">
												<a href="#">Preview</a>
											</div>
										</li>
										<li>
											<a href="#" class=" wmicon-interface"></a>
											<div class="wm-courses-started-text">
												<h6><a href="#">Psychology, Philosophy and Linguistics</a></h6>
												<span><a href="#" class="wmicon-time2"></a><time datetime="2017-02-14">11/05/2016 - 11/06/2016</time></span>
												<span><a href="#" class=" wmicon-clock2"></a><time datetime="2017-02-14">Duration: 1hr00mins</time></span>													
											</div>
											<div class="wm-courses-preview">
												<a href="#">Preview</a>
											</div>
										</li>
										<li>
											<a href="#" class="wmicon-tool"></a>
											<div class="wm-courses-started-text">
												<h6><a href="#">Test: Human Sciences</a></h6>
												<span><a href="#" class="wmicon-time2"></a><time datetime="2017-02-14">9/05/2016 - 15/06/2016</time></span>
												<span><a href="#" class=" wmicon-clock2"></a><time datetime="2017-02-14">Duration: 2hr15mins</time></span>													
											</div>
											<div class="wm-courses-preview">
												<a class="previe" href="#">Preview</a>
											</div>
										</li>
									</ul>
								</div>
								<div class="wm-courses-started">
									<span>Lesson 2:  Undergraduate Degree</span>
									<ul class="wm-courses-started-listing">
										<li>
											<a href="#" class="wmicon-pen"></a>
											<div class="wm-courses-started-text">
												<h6><a href="#">Philosophy, Politics and Economics (PPE)</a></h6>
												<span><a href="#" class="wmicon-time2"></a><time datetime="2017-02-14">16/05/2016 - 15/06/2016</time></span>
												<span><a href="#" class=" wmicon-clock2"></a><time datetime="2017-02-14">Duration: 1hr30mins</time></span>													
											</div>
											<div class="wm-courses-preview">
												<a href="#">Preview</a>
											</div>
										</li>
										<li>
											<a href="#" class="wmicon-pen"></a>
											<div class="wm-courses-started-text">
												<h6><a href="#">Modern Languages and Linguistics</a></h6>
												<span><a href="#" class="wmicon-time2"></a><time datetime="2017-02-14">13/05/2016 - 10/06/2016</time></span>
												<span><a href="#" class=" wmicon-clock2"></a><time datetime="2017-02-14">Duration: 2hr30mins</time></span>													
											</div>
											<div class="wm-courses-preview">
												<a href="#">Preview</a>
											</div>
										</li>
										<li>
											<a href="#" class="wmicon-tool"></a>
											<div class="wm-courses-started-text">
												<h6><a href="#">Biochemistry (Molecular and Cellular)</a></h6>
												<span><a href="#" class="wmicon-time2"></a><time datetime="2017-02-14">11/05/2016 - 11/06/2016</time></span>
												<span><a href="#" class=" wmicon-clock2"></a><time datetime="2017-02-14">Duration: 1hr00mins</time></span>													
											</div>
											<div class="wm-courses-preview">
												<a href="#">Preview</a>
											</div>
										</li>
										<li>
											<a href="#" class=" wmicon-interface"></a>
											<div class="wm-courses-started-text">
												<h6><a href="#">Computer Science and Philosophy</a></h6>
												<span><a href="#" class="wmicon-time2"></a><time datetime="2017-02-14">19/05/2016 - 15/06/2016</time></span>
												<span><a href="#" class=" wmicon-clock2"></a><time datetime="2017-02-14">Duration: 2hr15mins</time></span>													
											</div>
											<div class="wm-courses-preview">
												<a href="#">Preview</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
							 -->

							<div class="wm-ourcourses-right"> </div>
							<!-- 													    
							<div class="wm-courses-author-info">
								<div class="wm-title-full">
									<h2>Course Instructors</h2>
								</div>	
								<ul>
									<li>
										<div class="wm-author-detail wm-courses-authorinfo">
											<figure>
												<a href="#"><img src="extra-images/author-blog-2.jpg" alt=""></a>
											</figure>
											<div class="wm-author-text">
												<h5><a href="#">George B. Rowe</a></h5>
												<span>Associate Professor of Modern Languages & Linguistics</span>
												<p>George accompanied Dr. Stephen Harnish to SC12, an international supercomputing conference in Salt Lake City, Utah. At the conference, he helped Harnish build a computer "minicluster" that will become Bluffton's.</p>
											</div>								
										</div>
									</li>
									<li>
										<div class="wm-author-detail wm-courses-authorinfo">
											<figure>
												<a href="#"><img src="extra-images/author-blog-7.jpg" alt=""></a>
											</figure>
											<div class="wm-author-text">
												<h5><a href="#">Heidi R. Jones</a></h5>
												<span>Assistant of Modern Languages & Linguistics</span>
												<p>Professors perform alongside Bluffton students and community members in music ensembles, including instrumental and vocal groups, such as the annual performance.</p>
											</div>								
										</div>
									</li>
								</ul>						
							</div>
                             -->

							<div class="wm-title-full">
								<h2>Other Weeks of The Course</h2>
							</div>
							<div class="wm-courses wm-courses-popular">
								<ul class="row">
									<nuxt-link v-for="next in nextWeeks" :key="next.id"
										:to="`/course/${week_id}/${next.id}`">
										<li class="col-md-4">
											<div class="wm-courses-popular-wrap">

												<figure> <a href="#"><img :src="next.thumbnail" alt="">
														<span class="wm-popular-hover"> <small>select Week</small>
														</span> </a>
													<figcaption>
														<img src="../../../static/extra-images/papular-courses-thumb-1.jpg"
															alt="">
														<!-- <h6><a href="#">Shelly T. Forrester</a></h6> -->
													</figcaption>
												</figure>
												<div class="wm-popular-courses-text">
													<h6><a href="#">{{ next.name }}</a></h6>
													<!-- <div class="wm-courses-price"> <span>Week 1</span> </div> -->

										<li><a href="#" class="wm-color"><i class="wmicon-social7"></i> last updated
												{{ next.updated_date | date }}</a></li>
										<!-- <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 10</a></li> -->

							</div>
						</div>
						</li>
						</nuxt-link>



						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--// Main Section \\-->

	<!--// Main Section \\-->
	</div>
	<!--// Main Content \\-->


	<!-- chat bot  -->
<div :class="['chat-screen', expandchat ?  'show-chat' :'' ]">
    <div class="chat-header">
        <div class="chat-header-title">
            Let’s chat? - We're online
        </div>
        <div class="chat-header-option hide">
            <span class="dropdown custom-dropdown">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink1" style="will-change: transform;">
                    <a class="dropdown-item" href="javascript:void(0);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bc32ef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        Send Transcriptions
                    </a>
                    <a class="dropdown-item end-chat" href="javascript:void(0);">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bc32ef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-power"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                        End Chat
                    </a>
                </div>
            </span>
        </div>
    </div>
    <div class="chat-mail">
        <div class="row">
            <div class="col-md-12 text-center mb-2">
                <p>Hi 👋! Please fill out the form below to start chatting with the next available agent.</p>
            </div>
        </div>
        
    </div>
    <div class="chat-body">
        <div class="chat-start">Monday, 1:27 PM</div>

        <div  v-for="(value, index) in respo" :key="index" :class="['chat-bubble', value.cls ]">{{value.msg}}</div>
        

        <div class="chat-bubble you">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;display: block;shape-rendering: auto;width: 43px;height: 20px;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="0" cy="44.1678" r="15" fill="#ffffff">
                    <animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="1s" begin="-0.6s"></animate>
                </circle> <circle cx="45" cy="43.0965" r="15" fill="#ffffff">
                <animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="1s" begin="-0.39999999999999997s"></animate>
            </circle> <circle cx="90" cy="52.0442" r="15" fill="#ffffff">
                <animate attributeName="cy" calcMode="spline" keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5" repeatCount="indefinite" values="57.5;42.5;57.5;57.5" keyTimes="0;0.3;0.6;1" dur="1s" begin="-0.19999999999999998s"></animate>
            </circle></svg>
        </div>
    </div>
    <div class="chat-input mb-5" >
        <input type="text" placeholder="Type a message..." v-model="message" @keyup.enter="getBotMessage">
        <div class="input-action-icon">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
        </div>
    </div>
    <div class="chat-session-end hide">
        <h5>This chat session has ended</h5>
        <p>Thank you for chatting with us, If you can take a minute and rate this chat:</p>
        <div class="rate-me">
            <div class="rate-bubble great">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></span>
                Great
            </div>
            <div class="rate-bubble bad">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg></span>
                Bad
            </div>
        </div>
        <a class="transcript-chat">Need a Transcript?</a>
        <div class="powered-by">Powered by css3transition</div>
    </div>
</div>
<div @click="ToggleChat" class="chat-bot-icon">
    <img src="img/we-are-here.svg"/>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square animate"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x "><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
</div>
<!-- Chat Bot UI Ends -->
<!-- Time line Html Start -->
<h1 class="hide">Responsive Timeline using Flexbox</h1>
<div class="timeline hide">
    <div class="timeline-item">
        <div class="timeline-date">
            <img src="stylesheet/images/cities/delhi.svg"/>
            <div>
                January 2019
            </div>
        </div>
        <div class="timeline-content">
            <h2>Journey Start <span>(Delhi)</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe nulla quibusdam ut. Beatae, facere sequi blanditiis porro suscipit tempore ipsam iste ipsa, culpa quam vero, dolorem cupiditate. Magni, numquam?<button type="button" class="visit">Visit ›</button><img src="stylesheet/images/cities/delhi.svg"/></p>
            <br>
            <i class="fas fa-rocket fa-icon"></i>
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">
            <img src="stylesheet/images/cities/lucknow.svg"/>
            <div>
                February 2019
            </div>
        </div>
        <div class="timeline-content">
            <h2>Nawabo ka Sehar<span>(Lucknow)</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe nulla quibusdam ut. Beatae, facere sequi blanditiis porro suscipit tempore ipsam iste ipsa, culpa quam vero, dolorem cupiditate. Magni, numquam?<button type="button" class="visit">Visit ›</button><img src="stylesheet/images/cities/lucknow.svg"/></p>

            <br>
            <i class="fas fa-graduation-cap fa-icon"></i>
        </div>
    </div>

    <div class="timeline-item">
        <div class="timeline-date">
            <img src="stylesheet/images/cities/prayagraj.svg"/>
            <div>
                March 2019
            </div>
        </div>
        <div class="timeline-content">
            <h2>Devotional Place<span>(Prayagraj)</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe nulla quibusdam ut. Beatae, facere sequi blanditiis porro suscipit tempore ipsam iste ipsa, culpa quam vero, dolorem cupiditate. Magni, numquam?<button type="button" class="visit">Visit ›</button><img src="stylesheet/images/cities/prayagraj.svg"/></p>

            <br>
            <i class="fas fa-power-off fa-icon"></i>
        </div>
    </div>
</div>
	</div>

</template>

<script>

import axios from 'axios'



export default {
	middleware: ["check-auth", "auth"],
	layout: "MainLayout",

head(){
   script:[
           { src: "../../../../static/app.js" }, ]
},
	data() {

		return {

			expandchat: false,
			view_users: false,
			message: "",
			week: [],
			loading: true,
			nextWeeks: [],
			week_id: this.$route.params.week,
			respo:[],

		}
	},
	head() {

		return {

			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: "stylesheet", href: "../../css/bootstrap.css" },
				{ rel: "stylesheet", href: "../../css/font-awesome.css" },
				{ rel: "stylesheet", href: "../../css/flaticon.css" },
				{ rel: "stylesheet", href: "../../css/slick-slider.css" },
				{ rel: "stylesheet", href: "../../css/prettyphoto.css" },
				{ rel: "stylesheet", href: "../../style.css" },
				{ rel: "stylesheet", href: "../../css/color.css" },
				{ rel: "stylesheet", href: "../../css/color-two.css" },
				{ rel: "stylesheet", href: "../../css/color-three.css" },
				{ rel: "stylesheet", href: "../../css/color-four.css" },
				{ rel: "stylesheet", href: "../../css/responsive.css" },
				{ rel: "stylesheet", href: "../../build/mediaelementplayer.css" },
				{ rel: "stylesheet", href: "../../css/chatBot.css" },
				{ rel: "stylesheet", href: "../../css/chatBot.less" },
				{ rel: "stylesheet", href: "../../css/main.css" },
				{ rel: "stylesheet", href: "../../css/select2.min.css" },
		


			],

			script: [
				{ src: "../../script/jquery.js" },
				{ src: "../../script/modernizr.js" },
				{ src: "../../script/bootstrap.min.js" },
				{ src: "../../script/jquery.prettyphoto.js" },
				{ src: "../../script/jquery.countdown.min.js" },
				{ src: "../../script/fitvideo.js" },
				{ src: "../../script/skills.js" },
				{ src: "../../script/slick.slider.min.js" },
				{ src: "../../script/waypoints-min.js" },
				{ src: "../../build/mediaelement-and-player.min.js" },
				{ src: "../../script/isotope.min.js" },
				{ src: "../../script/jquery.nicescroll.min.js" },
				{ src: "../../https://maps.googleapis.com/maps/api/js" },
				{ src: "../../script/functions.js" },

			]
		}
	},

	methods: {




getCookie(name) {
  // Add the = sign
  name = name + '=';

  // Get the decoded cookie
  const decodedCookie = decodeURIComponent(document.cookie);

  // Get all cookies, split on ; sign
  const cookies = decodedCookie.split(';');

  // Loop over the cookies
  for (let i = 0; i < cookies.length; i++) {
    // Define the single cookie, and remove whitespace
    const cookie = cookies[i].trim();

    // If this cookie has the name of what we are searching
    if (cookie.indexOf(name) == 0) {
      // Return everything after the cookies name
      return cookie.substring(name.length, cookie.length);
    }
  }
},

		getBotMessage() {
            const req = {"cls":'me', "msg":this.message};
			this.respo.push(req)


			fetch(`${process.env.Url}/chat-bot/`, {
            method: 'POST',
            body: JSON.stringify({ message: this.message }),
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                "X-CSRFToken": this.getCookie("csrftoken"),
                'Content-Type': 'application/json',
            }
          })
          .then(r => r.json())
          .then(r => {
			  console.log(r.answer)
            this.respo.push(
				{   "cls":'you', 
					"msg":r.answer
				}
			)

        }).catch((error) => {
            console.error(error)
          });
		},

		ToggleChat() {
			this.expandchat = !this.expandchat
		},
		ToggleUserView() {
			this.view_users = !this.view_users
		},

		// Featch One week
		getWeek() {

			const url = process.env.baseUrl + '/week/' + this.$route.params.id + '/'

			axios.get(url).then(response => {
				this.week = response.data;
				this.loading = false;
			}).catch(error => {
				console.log(error);
			})
		},

		// Fetch All Next Weeks
		getNextWeeks() {

			const url = process.env.baseUrl + '/week/'

			axios.get(url).then(response => {

				this.nextWeeks = response.data.filter(week => {
					return week.id != this.$route.params.id && week.course == this.$route.params.week

				});
				this.loading = false;
			}).catch(error => {
				console.log(error);
			})
		},
	},

	mounted() {
		this.getWeek()
		this.getNextWeeks()

	}


}
</script>

<style scoped>
.chat-bubble.me{
	background-color: #bae4d9;
	border-radius: 10px;
	padding: 10px;
	margin-bottom: 10px;
	margin-left: 10px;
	margin-right: 10px;
}
.chat-screen{
	width:450px !important
}
.chat-screen .chat-body{
    width:100%;
	overflow-y: scroll;
}
#chat-bot {
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 99999999999999999;
	height: auto;
	float: right;
}

#chat-bot .icon {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	cursor: pointer;
	color: #ffffff;
	background: linear-gradient(135deg, rgb(15 81 50) 0%, rgb(9 73 44) 100%);
	/* width: 50px; */
	height: 50px;
	float: right;
	border-radius: 10px;
	padding: 10px 15px;
	transition: 0.3s all;
	box-shadow: 0 30px 50px #0000000d;
	overflow: hidden;
}

#chat-bot .icon:hover {
	box-shadow: 0 5px 20px rgb(209 231 221);
}

#chat-bot .icon .user {
	visibility: hidden;
	margin-left: -100px;
}

#chat-bot .icon.expanded {
	width: 370px;
	justify-content: space-between;
}

#chat-bot .messenger.expanded {
	visibility: visible;
	height: 489px;
	width: 370px;
}

#chat-bot .icon.expanded .user {
	visibility: visible;
	margin-left: 0;
	transition: 0.5s;
}

.group {
	display: flex;
	justify-content: space-evenly;
}

#chat-bot .messenger {
	background-color: #fff;
	border: 1px solid #0f513238;
	box-shadow: 0 30px 50px #0000000d;
	padding: 10px;
	margin-bottom: 10px;
	margin-left: 10px;
	height: 390px;
	border-radius: 10px;
	overflow: hidden;
	transition: height 0.7s;
	width: 0;
	height: 0;
	visibility: hidden;
}

#chat-bot .chatroom {
	height: 290px;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
	touch-action: pan-y;
}

#chat-bot .chatroom::-webkit-scrollbar {
	display: none;
}

#chat-bot .type-area input.typing {
	width: 100%;
	outline: none !important;
	border: 1px solid rgb(227 230 234);
	border-radius: 5px;
	padding: 8px 40px 8px 14px;
	height: 40px;
	font-size: 12px;
}

#chat-bot .type-area {
	position: relative;
	overflow: hidden;
	box-shadow: 0 5px 12px rgb(0 0 0 / 3%);
	margin-top: 10px;
}

#chat-bot .type-area span.send {
	position: absolute;
	right: 14px;
	top: 9px;
	cursor: pointer;
	font-size: 18px;
}

#chat-bot .msg {
	margin-bottom: 15px;
	display: flex;
	flex-direction: column;
	font-size: 12px;
	color: #7c8089;
}

#chat-bot .msg .bubble {
	padding: 10px;
	border-radius: 5px;
	background-color: #e0f2ff;
}

#chat-bot .msg.msg-right .bubble {
	color: rgb(15 81 50);
	background-color: rgb(209 231 221);
}

#chat-bot .msg .bubble .name {
	color: #393d4a;
	font-size: 12px;
	font-weight: 500;
}

.msg.msg-left {
	align-items: flex-start;
}

.msg.msg-right {
	align-items: flex-end;
}

#chat-bot .timestamp {
	font-size: 12px;
	color: #7c8089;
	text-align: center;
	margin-bottom: 10px;
}

/* chat-bot	 end */
</style>