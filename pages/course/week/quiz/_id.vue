<template>
  

  <div>
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
						<aside class="col-md-3">
							<div class="widget widget_course-price">
								<div class="wm-widget-heading">
									<h4>Biology Course </h4>
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
							</div>
							
							
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
									<a href="#"><img src="../../../../static/extra-images/our-courses-author.jpg" alt=""></a>
								</figure>
								<div class="wm-Professor-info">
									<h6><a href="#">Shelly T. Forrester</a></h6>
									<span>15 yrs. experience</span>
								</div>
								<p>Shelly T. accompanied Dr. Stephen Harnish to SC12, an international supercomputing conference in Salt Lake City, Utah. At the conference.</p>
								<a class="wm-read-more" href="#">Read More</a>
							</div>
						
							
							
						</aside>



                        
						<div class="col-md-9">

                    <div class="wm-title-full">
                                <h2>Quiz For this Week Course</h2>
                            </div>


                                <div class="wm-courses wm-courses-popular">
                <div class="question ml-sm-5 pl-sm-5 pt-2">
                    <div class="py-2 h5" style="display:flex !important;margin-bottom:25px;justify-content:space-between">
                        
                        <b>Q. which option best describes your job role?</b> 
                    
                    <h4 style="color:#b99663"> Q 1/15</h4>
                    </div>
                    <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
                          <label class="options"> <input type="radio" name="radio"> <span class="checkmark"></span> Small Business Owner or Employee 
                         </label> <label class="options"><input type="radio" name="radio"> <span class="checkmark"></span> Nonprofit Owner or Employee 
                          </label> <label class="options">  <input type="radio" name="radio"> <span class="checkmark"></span> Journalist or Activist 
                           </label> <label class="options"> <input type="radio" name="radio"> <span class="checkmark"></span>  Other
                           </label> </div>
                </div>
                <div class="d-flex align-items-center pt-3" style="display:flex !important;margin-bottom:55px">
                    <div id="prev"> <button class="btn btn-primary mr-4 " style="margin-right:15px">Previous</button> </div>
                    <div class="ml-auto mr-sm-5"> <button class="btn btn-success">Next</button> </div>
                </div>
            </div>
                        
                            <div class="wm-title-full">
                                <h2>Next Weeks of The Course</h2>
                            </div>
                            <div class="wm-courses wm-courses-popular">
                                <ul class="row">
                                    <nuxt-link to="/course/week/1">
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="../../../../static/extra-images/papular-courses-1.jpg" alt="">
                                             <span class="wm-popular-hover"> <small>select Week</small> </span> </a>
                                                <figcaption>
                                                    <img src="../../../../static/extra-images/papular-courses-thumb-1.jpg" alt="">
                                                    <h6><a href="#">Shelly T. Forrester</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Advanced Architectural Research</a></h6>
                                                <div class="wm-courses-price"> <span>Week 1</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 342</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 10</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    </nuxt-link>
                                    <nuxt-link to="/course/week/1">
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="../../../../static/extra-images/papular-courses-2.jpg" alt="">
                                             <span class="wm-popular-hover"> <small>select Week</small> </span> </a>
                                                <figcaption>
                                                    <img src="../../../../static/extra-images/papular-courses-thumb-2.jpg" alt="">
                                                    <h6><a href="#">Sam K. Harrington</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Advanced Landscape & Urbanism</a></h6>
                                                <div class="wm-courses-price"> <span>Week 2</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 438</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 28</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    </nuxt-link>
                                    <nuxt-link to="/course/week/1">
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="../../../../static/extra-images/papular-courses-3.jpg" alt="">
                                             <span class="wm-popular-hover"> <small>select Week</small> </span> </a>
                                                <figcaption>
                                                    <img src="../../../../static/extra-images/papular-courses-thumb-3.jpg" alt="">
                                                    <h6><a href="#">Sara A. Shirley</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Transdisciplinary Design</a></h6>
                                                <div class="wm-courses-price"> <span>Week 3</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 309</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 19</a></li>
                                                </ul>
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

  </div>

</template>

<script>
export default {
  layout:"MainLayout",


  head(){

	  return {

		    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "../../../css/bootstrap.css" },
      { rel: "stylesheet", href: "../../../css/font-awesome.css" },
      { rel: "stylesheet", href: "../../../css/flaticon.css" },
      { rel: "stylesheet", href: "../../../css/slick-slider.css" },
      { rel: "stylesheet", href: "../../../css/prettyphoto.css" },
      { rel: "stylesheet", href: "../../../style.css" },
      { rel: "stylesheet", href: "../../../css/color.css" },
      { rel: "stylesheet", href: "../../../css/color-two.css" },
      { rel: "stylesheet", href: "../../../css/color-three.css" },
      { rel: "stylesheet", href: "../../../css/color-four.css" },
      { rel: "stylesheet", href: "../../../css/responsive.css" },
      { rel: "stylesheet", href: "../../../build/mediaelementplayer.css" },
     
      
      ],

      script:[
           { src: "../../../script/jquery.js" },
           { src: "../../../script/modernizr.js" },
           { src: "../../../script/bootstrap.min.js" },
           { src: "../../../script/jquery.prettyphoto.js" },
           { src: "../../../script/jquery.countdown.min.js" },
           { src: "../../../script/fitvideo.js" },
           { src: "../../../script/skills.js" },
           { src: "../../../script/slick.slider.min.js" },
           { src: "../../../script/waypoints-min.js" },
           { src: "../../../build/mediaelement-and-player.min.js" },
           { src: "../../../script/isotope.min.js" },
           { src: "../../../script/jquery.nicescroll.min.js" },
           { src: "../../../https://maps.googleapis.com/maps/api/js" },
           { src: "../../../script/functions.js" },
           
         ]
	  }
  }

}
</script>

<style scoped>

</style>