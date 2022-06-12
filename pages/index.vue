<template>
  
<div class="wm-main-wrapper">
   <!--// Main Wrapper \\-->
   
        
    
		<!--// Main Banner \\-->
		<div class="wm-main-banner">
            
            <div class="wm-banner-one">
                <div class="wm-banner-one-for">
                    <div class="wm-banner-one-for-layer"> <img src="extra-images/banner-view1-1.jpg" alt=""> </div>
                   
                </div>
                <div class="wm-banner-one-nav">
                    <div class="wm-banner-one-nav-layer" style="background-color:#222845;color:#fff">
                        <h1 style="color:#fff">Ethiopian Secondary School</h1>
                        <p>A place where millions of students get ready for the next level of education which is a higher education.</p>
                        <a href="#" class="wm-banner-btn">learn more</a>
                    </div>
                    <div class="wm-banner-one-nav-layer">
                        <h1>UEE</h1>
                        <p>We prepared previous year's entrance examination to test and prepare yourself for the future exam.</p>
                        <a href="#" class="wm-banner-btn">know more</a>
                    </div>
                   
                </div>
            </div>

		</div>
		<!--// Main Banner \\-->

		<!--// Main Content \\-->
		<div class="wm-main-content">

			<!--// Main Section \\-->
			<div class="wm-main-section">
				<div class="container">
					<div class="row">
						
						<div class="col-md-4">
							<div class="wm-search-course">
                                <h3 class="wm-short-title wm-color">Find Your Course</h3>
                                <p>Fill in the form below to find your course:</p>
                                
                            </div>
						</div>
                        <div class="col-md-8">
                            <div class="wm-service wm-box-service">
                                <ul>
                                    <li>
                                        <div class="wm-box-service-wrap wm-bgcolor">
                                            <i class="wmicon-suitcase"></i>
                                            <h6><a href="#">English</a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wm-box-service-wrap wm-bgcolor">
                                            <i class="wmicon-money"></i>
                                            <h6><a href="#">Math</a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wm-box-service-wrap wm-bgcolor">
                                            <i class="wmicon-school"></i>
                                            <h6><a href="#">Physics</a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wm-box-service-wrap wm-bgcolor">
                                            <i class="wmicon-science"></i>
                                            <h6><a href="#">Biology</a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wm-box-service-wrap wm-bgcolor">
                                            <i class="wmicon-computer"></i>
                                            <h6><a href="#">Chemistry</a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wm-box-service-wrap wm-bgcolor">
                                            <i class="wmicon-technology3"></i>
                                            <h6><a href="#">Aptitude</a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wm-box-service-wrap wm-bgcolor">
                                            <i class="wmicon-web3"></i>
                                            <h6><a href="#">Civics</a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="wm-box-service-wrap wm-bgcolor">
                                            <i class="wmicon-shape"></i>
                                            <h6><a href="#">Economics</a></h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

					</div>
				</div>
			</div>
			<!--// Main Section \\-->

            <!--// Main Section \\-->
            <div class="wm-main-section wm-courses-popular-full">
                <div class="container">
                    <div class="row">
                        
                      <div class="col-md-12">
                            <div class="wm-fancy-title"> <h2>Popular <span>Courses</span></h2> </div>
                            <div class="wm-courses wm-courses-popular">
                                <ul class="row">
                                    <li v-for="course in popular" :key="course.id" class="col-md-3">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img :src="getInstractor(course.instructor).profile_picture" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-1.jpg" alt="">
                                                    <h6><a href="#"></a> {{getInstractor(course.instructor).username}}</h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">{{course.name}}  </a></h6>
                                                <div class="wm-courses-price"> <span>new {{course.created_date |date}}</span> </div>
                                                
                                            </div>
                                        </div>
                                    </li>
                                   
                                  
                                   
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <!--// Main Section \\-->

            <!--// Main Section \\-->
            <div class="wm-main-section wm-whychooseus-full">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-md-8">
                            <div class="whychooseus-list">
                                <div class="wm-fancy-title"> <h2>Why <span>Choose Us</span></h2> </div>
                                <ul class="row">
                                    <li class="col-md-4">
                                        <span>209</span>
                                        <h6>Get International Scholarships.</h6>
                                    </li>
                                    <li class="col-md-4">
                                        <span>91%</span>
                                        <h6>Got passed UEE and get opportunity of higher education.</h6>
                                    </li>
                                    <li class="col-md-4">
                                        <span>35%</span>
                                        <h6>Scores high point and passed with a very great destiniction</h6>
                                    </li>
                                </ul>
                            </div>
                        
                        </div>
                        <div class="col-md-4">
                            <div class="wm-questions-studying">
                                <img src="extra-images/ask-questoin-bg.png" alt="">
                                <h3 class="wm-color">Questions about studying with us?</h3>
                                <p>We have a team of student advisers & officers to answer any questions:</p>
                                <a class="wm-banner-btn" href="#">ask us now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--// Main Section \\-->


         
           
            <!--// Main Section \\-->
            <div class="wm-main-section wm-ourhistory-full">
                <span class="wm-light-transparent"></span>
                <div class="container">
                    <div class="row">
                        
                        
                        <div class="col-md-12">
                            <div class="wm-subscribe-form">
                                <h2>Still not convinced? We can help you!</h2>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--// Main Section \\-->

           
           
            <!--// Main Section \\-->
            <div class="wm-main-section wm-contact-full">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-md-12">
                            
                            <div class="wm-contact-tab">

                              <!-- Nav tabs -->
                              <ul class="nav nav-tabs">
                                <li @click="ChangeInfoTab"  :class="contact ? 'active' : ''"><a href="#home" aria-controls="home" data-toggle="tab">Contact Us</a></li>
                                <li @click="ChangeInfoTab" :class="!contact ? 'active' : ''"><a href="#profile" aria-controls="profile" data-toggle="tab">Information Details</a></li>
                              </ul>

                              <!-- Tab panes -->
                              <div class="tab-content">
                                <div   v-if="contact" :class="['tab-pane', contact ? 'active' : '']" id="home">
                                    <div class="row">
                                      <h1>Here Place Map</h1>
                                        <div class="col-md-8">
                                            <div class="wm-contact-form">
                                                <span>Talk To Us Today</span>
                                                 <form @submit.prevent="SendMessage">
                          <ul>
                            <li>
                              <i class="wmicon-black"></i>
                              <input
                                type="text"
                                value="Name"
                               placeholder="Name"
                               required
                               v-model="name"
                              />
                            </li>
                            <li>
                              <i class="wmicon-symbol3"></i>
                              <input
                                type="text"
                                value="E-mail"
                                placeholder="E-mail"
                                required
                                v-model="email"
                              />
                            </li>
                            <li>
                              <i class="wmicon-technology4"></i>
                              <input
                                type="text"
                                value="Phone"
                                placeholder="Phone"
                                required
                                v-model="phone"
                              
                              />
                            </li>
                            <li>
                              <i class="wmicon-web2"></i>
                              <textarea placeholder="Message" v-model="message"></textarea>
                            </li>
                            <li>
                              <input type="submit" value="Send Message" />
                            </li>
                          </ul>
                        </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  v-else :class="['tab-pane', !contact ? 'active' : '']" id="profile">
                                    <span class="wm-contact-title">Contact Info</span>
                                     <div class="wm-contact-service">
                                        <ul class="row">
                                            <li class="col-md-4">
                                                <span class="wm-service-icon"><i class="wmicon-pin"></i></span>
                                                <h5 class="wm-color">Address</h5>
                                                <p>Adama, Wangari market mall</p>
                                            </li>
                                            <li class="col-md-4">
                                                <span class="wm-service-icon"><i class="wmicon-phone"></i></span>
                                                <h5 class="wm-color">Phone</h5>
                                                <p>+251917817158</p>
                                            </li>
                                            <li class="col-md-4">
                                                <span class="wm-service-icon"><i class="wmicon-letter"></i></span>
                                                <h5 class="wm-color">E-mail</h5>
                                                <p><a href="mailto:name@email.com">student@assistant.com</a> <a href="mailto:name@email.com">support@secondary.com</a></p>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul class="contact-social-icon">
                                        <li><a href="#"><i class="wm-color wmicon-social5"></i> Facebook</a></li>
                                        <li><a href="#"><i class="wm-color wmicon-social4"></i> Twitter</a></li>
                                        <li><a href="#"><i class="wm-color wmicon-social3"></i> Linkedin</a></li>
                                        <li><a href="#"><i class="wm-color wmicon-vimeo"></i> Vimeo</a></li>
                                    </ul>
                                </div>
                              </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <!--// Main Section \\-->

	
		<!--// Main Content \\-->

	<div class="clearfix"></div>
    </div>
    <!--// Main Wrapper \\-->

    
   
</div>

</template>

<script>
import axios from 'axios';

export default {
  middleware: ["check-auth"],
    layout:"MainLayout",

 data(){

   return{

     contact:true,
     loading:false,
      name:"",
      email:"",
      phone:"",
      message:"",
      courses:[],
      instructors:[],

   }
 }
 ,
 methods:{

    getInstractor(id){
        return this.instructors.find(instructor => instructor.id == id);
    },
     getInstractors(){
            this.loading = true;
            const url = process.env.Url+'/auser-api/instructor/'
            
            axios.get(url).then(response=>{
                this.instructors = response.data;
                console.log(this.instructors)
                this.loading = false
            }).catch(error=>{
                console.log(error)
                this.loading = false
            })
        },

    getCourses(){
            
            this.loading = true;
            const url = process.env.baseUrl+'/course/'
            
            axios.get(url).then(response=>{
                this.courses = response.data;
                this.filterd_courses = response.data;
                console.log(this.courses)
                this.loading = false
            }).catch(error=>{
                console.log(error)
                this.loading = false
            })
        },

 SendMessage(){
      this.loading = true;
      const url = process.env.Url + '/auser-api/contact-us/'
      axios.post(url,{
        name:this.name,
        email:this.email,
        phone:this.phone,
        message:this.message,
      }).then(response => {
        this.loading = false;
        alert('Message Sent Successfully');
  }).catch(error => {
    this.loading = false;
    alert('Error Sending Message');
  })
    
},
   ChangeInfoTab(){
       this.contact = !this.contact
   }
 },
computed:{
    popular(){
        if (this.courses.length > 0){
            return this.courses.slice(0,3)
        }else{
            this.courses
        }
    }
},
 mounted(){

     this.getCourses();
     this.getInstractors();
 }


}
</script>
