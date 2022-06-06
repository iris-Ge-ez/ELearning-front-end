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
									<h4>{{course.name}} </h4>
								</div>
							<a href="#">enroll this course</a>
								<!-- <ul>
									<li><a href="#"><i class=" wmicon-social7"></i>234 Students</a></li>
									<li><a href="#"><i class=" wmicon-clock2"></i><time datetime="2017-02-14">Duration: 2hr30mins</time></a></li>
									<li><a href="#"><i class=" wmicon-book2"></i>14 Lectures</a></li>
									<li><a href="#"><i class=" wmicon-location"></i>Campus L2</a></li>
									<li><a href="#">
										<div class="wm-levelrating">
											<span class="rating-box" style="width:70%"></span>
										</div>
										Intermediate</a></li>
									<li><a href="#"><i class=" wmicon-technology"></i>English Language</a></li>
								</ul> -->
							</div>
							
							
						
							<!-- <div class="widget widget_professor-info">
								<div class="wm-widget-title">
									<h2>About Professor</h2>
								</div>
								<figure>
									<a href="#"><img src="../../static/extra-images/our-courses-author.jpg" alt=""></a>
								</figure>
								<div class="wm-Professor-info">
									<h6><a href="#">Shelly T. Forrester</a></h6>
									<span>15 yrs. experience</span>
								</div>
								<p>Shelly T. accompanied Dr. Stephen Harnish to SC12, an international supercomputing conference in Salt Lake City, Utah. At the conference.</p>
								<a class="wm-read-more" href="#">Read More</a>
							</div>
						
							 -->
							
						</aside>
						<div class="col-md-9">
							<div class="wm-blog-single wm-courses">
								<figure class="wm-detail-thumb">
									<img :src="course.thumbnail" alt="">
								</figure>
								<div class="wm-blog-author wm-ourcourses">
									<div class="wm-blogauthor-left">
										<img src="../../static/extra-images/papular-courses-thumb-1.jpg" alt="">
										<!-- <a class="wm-authorpost" href="#">Shelly T. Forrester</a> -->
									</div>
									<div class="wm-our-courses">
										<ul>
											<li>
												<a href="#"><i class="wmicon-tool2"></i>created {{course.created_date |date }}</a>
											</li>
											<li>
												<a href="#"><i class="wmicon-diploma"></i>last updated {{course.updated_date |date}}</a>
											</li>
											<li>
												<a href="#"><i class="wmicon-symbol"></i>Assesments: Yes</a>
											</li>
										</ul>
									</div>
								</div>								
							</div>
							<!-- <div class="wm-courses-reviewes">
								<div class="wm-ourcourses-left">
									<h6>Reviews</h6>
									<div class="wm-rating">
										<span class="rating-box" style="width:100%"></span>																				
									</div>
									<a href="#">3 Reviews</a>
								</div>
								<div class="wm-ourcourses-right">
									<a class="wm-previous-icon" href="#"><i class="fa fa-angle-left" ></i>previous Course</a>
									<a class="wm-Next-icon" href="#">Next Course<i class="fa fa-angle-right" ></i></a>
								</div>
							</div> -->
							<div class="wm-our-course-detail">
								<div class="wm-title-full">
									<h2>{{course.name}}</h2>
								</div>
								<p class="wm-text">{{course.description}}</p>
								<!-- <p>The programme encourages students to develop advanced and speculative approaches to the design of cities, landscape and territories. It promotes high design values and the integration of new and innovative technologies to address the challenges facing contemporary cities, such as urban growth, climate change, globalisation and social inequality. The programme is designed for students of architecture, landscape architecture, engineering and related disciplines, who wish to enhance their academic, intellectual and professional skills. </p> -->
								<!-- <div class="wm-course-blockquote-two">
									<blockquote>Training is everything. The peach was once a bitter almond; cauliflower is nothing but cabbage with an education.</blockquote>
									<span>- Mark Twain</span>
								</div>								 -->
								<!-- <div class="wm-courses-info">
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
								</div>								 -->
								<!-- <div class="wm-certification-listing">
									<div class="wm-title-full">
										<h2>What You Have to Perform After Taking This Course</h2>
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
								</div>	 -->
							</div>



                            <div class="wm-title-full" style="margin-top:50px">
                                <h2>All Weeks of The Course</h2>
                            </div>
                            <div class="wm-courses wm-courses-popular">
                                <ul class="row">
                                 <nuxt-link v-for="week in thisCourseWeeks" :key="week.id"  :to="`/course/${course_id}/${week.id}`"> 
                                    <li  class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img :src="week.thumbnail" alt="">
											 <span class="wm-popular-hover"> <small>select Week</small> </span> </a>
                                                <figcaption>
                                                    <img src="../../static/extra-images/papular-courses-thumb-1.jpg" alt="">
                                                    <!-- <h6><a href="#">Shelly T. Forrester</a></h6> -->
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">{{week.name}}</a></h6>
                                                <div class="wm-courses-price">  updated {{week.updated_date |date}} </div>
                                                <!-- <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 342</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 10</a></li>
                                                </ul> -->
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
		<!--   main  body-->

  </div>

</template>

<script>

import axios from 'axios'

export default {
  layout:"MainLayout",


  head(){

	  return {

		    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "../css/bootstrap.css" },
      { rel: "stylesheet", href: "../css/font-awesome.css" },
      { rel: "stylesheet", href: "../css/flaticon.css" },
      { rel: "stylesheet", href: "../css/slick-slider.css" },
      { rel: "stylesheet", href: "../css/prettyphoto.css" },
      { rel: "stylesheet", href: "../style.css" },
      { rel: "stylesheet", href: "../css/color.css" },
      { rel: "stylesheet", href: "../css/color-two.css" },
      { rel: "stylesheet", href: "../css/color-three.css" },
      { rel: "stylesheet", href: "../css/color-four.css" },
      { rel: "stylesheet", href: "../css/responsive.css" },
      { rel: "stylesheet", href: "../build/mediaelementplayer.css" },
     
      
      ],

      script:[
           { src: "../script/jquery.js" },
           { src: "../script/modernizr.js" },
           { src: "../script/bootstrap.min.js" },
           { src: "../script/jquery.prettyphoto.js" },
           { src: "../script/jquery.countdown.min.js" },
           { src: "../script/fitvideo.js" },
           { src: "../script/skills.js" },
           { src: "../script/slick.slider.min.js" },
           { src: "../script/waypoints-min.js" },
           { src: "../build/mediaelement-and-player.min.js" },
           { src: "../script/isotope.min.js" },
           { src: "../script/jquery.nicescroll.min.js" },
           { src: "../https://maps.googleapis.com/maps/api/js" },
           { src: "../script/functions.js" },
           
         ]
	  }
  },

  data(){

	  return{
           loading: true,
		   course:[],
		   weeks:[],
		   course_id:this.$route.params.id

	  }

  }
  ,
  methods:{
	  getCourse(){

		  const url = process.env.baseUrl+'/course/'+this.$route.params.id+'/'

		  axios.get(url).then(response => {
			  this.course = response.data;
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })
	  },
	  
	  setCourse(){
		  this.$store.commit('setCourse',this.course)
	  },

	  getWeeks(){

		  const url = process.env.baseUrl+'/week/'

		  axios.get(url).then(response => {
			  this.weeks =  response.data;
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })
	  },


  },

  computed:{
        
		thisCourseWeeks(){
			return this.weeks.filter(week => week.course == this.$route.params.id)
		}
  },

  mounted(){
	  this.setCourse()
	  this.getCourse();
	  this.getWeeks();
  }
}
</script>

