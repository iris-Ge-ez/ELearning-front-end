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
						



                        
						<div class="col-md-12">

                    <div class="wm-title-full">
                                  <a v-if="completedCourse == false" @click="CompleteWeek" class="wm-more-details" style="margin-left:80%;height:45px"
										href="#">Complete week</a>
                                    <a v-else class="wm-more-details" style="margin-left:80%;">Week Completed</a>
                                <h2 v-if="quizs.length > 0">Quiz For this Week Course</h2>
                                <h2 v-else>No Quiz is Available For this Week Course</h2>
                            </div>
<!-- {{getQuiz}} --> 

<div v-if="loading"></div>



                                <div v-else class="wm-courses wm-courses-popular">
                <div class="question ml-sm-5 pl-sm-5 pt-2" v-if="quizs.length > 0">
                    <div class="py-2 h5" style="display:flex !important;margin-bottom:25px;justify-content:space-between">
                        
                        <b v-if="!loading && quizs.length >0">Q. {{quizs[currentquiz].question}}</b> 
                    
                    <h4 style="color:#b99663"> Q {{currentquiz+1}}/{{quizs.length}}</h4>
                    </div>
                    <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options"> 
                          <label class="options" > <input type="radio" name="radio"> <span class="checkmark"></span> {{quizs[currentquiz].choice_one}}</label> 
                         <label class="options" ><input type="radio" name="radio"> <span class="checkmark"></span>  {{quizs[currentquiz].choice_two}}
                          </label> <label class="options">  <input type="radio" name="radio"> <span class="checkmark"></span>  {{quizs[currentquiz].choice_three}}</label>
                           
                           <label class="options" > <input type="radio" name="radio"> <span class="checkmark"></span>   {{quizs[currentquiz].choice_four}}
                           </label>
                           
                           </div>
                </div>
                                <div class="question ml-sm-5 pl-sm-5 pt-2" v-if="quizs.length > 0">
                                    <p v-if="showsoln ">Solution {{quizs[currentquiz].solution}}</p>
                                </div>

                <div class="d-flex align-items-center pt-3" style="display:flex !important;margin-bottom:55px">
                    <div id="prev" v-if="currentquiz>0"> 
                        <button class="btn btn-primary mr-2 " style="margin-right:15px" @click="prevQuiz"> Previous</button> </div>
                         <div v-if="quizs.length >0" class="ml-3 mr-sm-5 " style="margin-right:10px"> <button class="btn btn-primary ml-5" @click="showSoln">show answer</button> </div>

                    <div class="ml-3 mr-sm-5" v-if="currentquiz < quizs.length-1"> <button class="btn btn-success ml-5" @click="nextQuiz">Next</button> </div>
  
                </div>

            </div>



                        
                            <div class="wm-title-full">
                                <h2>Next Weeks of The Course</h2>
                            </div>
                            <div class="wm-courses wm-courses-popular">
                                <ul class="row">
                                  <nuxt-link v-for="next in weeks" :key="next.id" :to="`/course/${course_id}/${next.id}`">
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">

                                            <figure> <a href="#"><img :src="next.thumbnail" alt="">
                                             <span class="wm-popular-hover"> <small>select Week</small> </span> </a>
                                                <figcaption>
                                                    <img src="../../../../static/extra-images/papular-courses-thumb-1.jpg" alt="">
                                                    <!-- <h6><a href="#">Shelly T. Forrester</a></h6> -->
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">{{next.name}}</a></h6>
                                                <!-- <div class="wm-courses-price"> <span>Week 1</span> </div> -->
                                                
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i>   last updated {{next.updated_date |date}}</a></li>
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

  </div>

</template>

<script>
import axios from 'axios'

export default {
     middleware:["check-auth","auth"],
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
  },


  data(){

      return{
       weeks:[],
       loading:true,
       quizs:[],
       currentquiz:0,
       showsoln:false,
       course_id:this.$route.params.week,
       completed:[]
      }
  },
  methods:{
CompleteWeek(){
    
    const url = process.env.baseUrl +"/course-progress/";
    const data = {
      course:this.course_id,
      week:this.$route.params.id,
      student:this.$store.state.user_id,
      is_completed:true
    }
    axios.post(url,data).then(response => {
			  	console.log(response.data)
                  this.completed = []
				this.FetchCompletedWeeks()
		  }).catch(error => {
			  console.log(error);
		  })

},
FetchCompletedWeeks(){


    const url = process.env.baseUrl +"/course-progress/";

    axios.get(url).then(response => {
           this.completed =  response.data.filter(week =>
                  
                  week.course == this.course_id && week.student == this.$store.state.user_id
                  && week.is_completed == true && week.week == this.$route.params.id
                  )
    }).catch(error => {
      console.log(error);   
    })
},


       getWeeks(){
          this.loading = true
		  const url = process.env.baseUrl+'/week/'

		  axios.get(url).then(response => {
			  this.weeks = response.data.filter(week => {
             return week.course == this.$route.params.week && week.id != this.$route.params.id
        
      });;
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })
	  },

       getQuizs(){
          this.loading = true

		  const url = process.env.baseUrl+'/quiz/'

		  axios.get(url).then(response => {
			  this.quizs = response.data.filter(quiz => {
             return quiz.week == this.$route.params.id 
        
      });
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })
	  },
      
      nextQuiz(){
        if(this.currentquiz < this.quizs.length-1){
          this.currentquiz++;
          this.showsoln = false;
        }
      },
        prevQuiz(){
            if(this.currentquiz > 0){
            this.currentquiz--;
            this.showsoln = false;
            }
        },
        showSoln(){
          this.showsoln =! this.showsoln;
        },
      
  },
  computed:{
 completedCourse(){
			return this.completed.length >   0  ? true : false
		},
      getQuiz(){
         if(this.quizs.length >0){

              return this.quizs[this.currentquiz]
         }
      }
  },
  mounted(){    
      this.getWeeks();
      this.getQuizs();
      this.FetchCompletedWeeks();
  }

}
</script>

<style scoped>

</style>