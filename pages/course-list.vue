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
                                <li><a href="index-2.html">Home</a></li>
                                <li><a href="index-2.html">Courses</a></li>
                                <li>List</li>
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
                <div class="container ml-5">
                    <div class="row" >
                        
                        
                        <div  v-if="loading" class="col-md-12">
                        <div style="margin-left:45%">


                            <Loader></Loader>
                        </div>
                        </div>
                        <div v-else class="col-md-12">
                            <div class="wm-filter-box">
                                <div class="wm-apply-select">
                                    <select  v-model="grade">
                                        <option v-for="grade in grades" :key="grade.id" :value="grade.id"> Grade {{ grade.grade}}</option>
                                        <option value="">All</option>
                                    </select>
                                </div>            
                                
                                <div class="wm-normal-btn">
                                    <a href="#" class="active">All Cources</a>
                                  
                                </div>
                                <div class="wm-view-btn">
                                   
                                    <a href="#" class="wmicon-signs"></a>
                                </div>
                            </div>
                            <div class="wm-courses wm-courses-popular wm-courses-mediumsec">
                                <ul class="row">
                                      <!-- {{courses}} -->
                            <nuxt-link v-for="course in  filterd_courses" :key="course.id" :to="`/course/${course.id}`">
                                    <li class="col-md-12">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img :src="course.thumbnail" alt="" style="max-height:250px"> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>    
                                                    <img src="extra-images/papular-courses-thumb-1.jpg" alt="">
                                                    <h6><a href="#"></a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">{{course.name}}</a></h6>
                                                <p>{{course.description.slice(0,100)}}</p>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> grade {{ getGrade(course.grade) }}</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-location"></i> Posted {{course.updated_date | date}}</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    </nuxt-link>


                            
                           

                          
                          
                           
                          
                                </ul>
                            </div>

                            <!-- <div class="wm-pagination">
                                <ul>
                                    <li><a href="#" aria-label="Previous"> <i class="wmicon-arrows4"></i> Previous</a></li>
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li>...</li>
                                    <li><a href="#">18</a></li>
                                    <li><a href="#" aria-label="Next"> <i class="wmicon-arrows4"></i> Next</a></li>
                                </ul>
                            </div> -->
                        </div>

                    </div>
                </div>
            </div>
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
 data(){

     return {

         courses:[],
         loading:true,
         instructors:[],
         grades:[],
         filterd_courses:[],

         grade:"",
     }

    
 },
    methods:{
      
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
        FilterCourses(){
              if(this.grade == ""){
                this.filterd_courses = this.courses
                }else{
                    this.filterd_courses = this.courses.filter(course=>{
                        return course.grade == this.grade
                    })
                }
        },
        // NO instractors Api Found To fetch From Backend

        getInstractors(){
            this.loading = true;
            const url = process.env.baseUrl+'/instructor/'
            
            axios.get(url).then(response=>{
                this.instructors = response.data;
                console.log(this.instructors)
                this.loading = false
            }).catch(error=>{
                console.log(error)
                this.loading = false
            })
        },

        getGrades(){
            this.loading = true;
            const url = process.env.baseUrl+'/grade/'
            
            axios.get(url).then(response=>{
                this.grades = response.data;
                console.log(this.grades)
                this.loading = false
            }).catch(error=>{
                console.log(error)
                this.loading = false
            })
        },

        // Parse Indivisual APi grade
        getGrade(id){
            const grade =  this.grades.filter(grade=>{
                 return grade.id == id
                
            })
            if(grade.length > 0){
                return grade[0].grade
            }
        }
    },

    watch: {
    // whenever grdae changes, this function will run
     grade(newValue,oldValue){
         console.log("change " +newValue)
        
        this.FilterCourses()
     }
  },
    computed:{
        
       
    },

    mounted(){
        this.getCourses()
        this.getGrades()
    }
}
</script>

<style>

</style>