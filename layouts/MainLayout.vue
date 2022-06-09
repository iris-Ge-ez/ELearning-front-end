<template>


<div>
      <!--// Header \\-->
		<header id="wm-header" class="wm-header-one">

            <!--// TopStrip \\-->
			<div class="wm-topstrip">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="wm-language"> <ul> <li><a href="#">English</a></li> 
                             <li> <div id="google_translate_element" ></div> </li></ul> </div>
                            <ul class="wm-stripinfo">
                                <li><i class="wmicon-location"></i> Adama Ethiopia</li>
                               
                                <li><i class="wmicon-technology4"></i> +251 982 2424</li>
                                <li><i class="wmicon-clock2"></i> Mon - fri: 7:00am - 6:00pm</li>
                            </ul>
                            <ul class="wm-adminuser-section">
                                <li v-if="this.$store.getters.isAuthenticated">
                                    <a href="#" data-toggle="modal" @click="Logout">Logout</a>
                                </li>
                                <li v-else>
                                    <a href="#" data-toggle="modal" data-target="#ModalLogin">login</a>
                                </li>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#ModalLogin">Contact</a>
                                </li>
                                <li>
                                    <a href="#" class="wm-search-btn" data-toggle="modal" data-target="#ModalSearch"><i class="wmicon-search"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!--// TopStrip \\-->

            <!--// MainHeader \\-->
            <div class="wm-main-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3"><a href="index-2.html" class="wm-logo"><img src="images/logo-1.png" alt=""></a></div>
                        <div class="col-md-9">
                            <!--// Navigation \\-->
                            <nav class="navbar navbar-default">
                                <div class="navbar-header">
                                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="true">
                                    <span class="sr-only">Toggle navigation</span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                  </button>
                                </div>
                                <div class="collapse navbar-collapse" id="navbar-collapse-1">
                                  <ul class="nav navbar-nav">
                                    <li class="active"><nuxt-link to="/"><a href="#">Home</a></nuxt-link></li>
                                   
                                    <li>
                                        <nuxt-link to="/course-list"><a href="#" data-toggle="modal" data-target="#ModalLogin">courses</a></nuxt-link>
                                        
                                    </li>

                                    <li>
                                        <nuxt-link to="/exam-sheets"><a href="#" data-toggle="modal" data-target="#ModalLogin">Exam Sheets</a></nuxt-link>
                                        
                                    </li>
                           <li class="active" v-if="this.$store.getters.isAuthenticated">
                               <nuxt-link to="/chatrooms"><a href="#" data-toggle="modal" data-target="#ModalLogin">Chatrooms</a></nuxt-link>
                           
                           <ul class="wm-dropdown-menu">
                                            <li><nuxt-link to="/chatrooms"><a href="#" data-toggle="modal" data-target="#ModalLogin">Grade 11</a></nuxt-link></li>
                                            <li><nuxt-link to="/chatrooms"><a href="#" data-toggle="modal" data-target="#ModalLogin">Grade 12</a></nuxt-link></li>
                                          
                                        </ul>
                           </li>

                                   
                                   <li v-if="this.$store.getters.isAuthenticated" ><a href="#">Dashboard</a>
                                        <ul class="wm-dropdown-menu">
                                       
                                            <li><nuxt-link to="/my-courses"><a href="#" data-toggle="modal" data-target="#ModalLogin">My Courses</a></nuxt-link></li>
                                            <li><nuxt-link to="/profile" ><a href="#" data-toggle="modal" data-target="#ModalLogin">Profile </a></nuxt-link></li>
                                          
                                        </ul>
                                    </li> 
                                    
                                    <li class="active"><nuxt-link to="/about-us"><a href="#">About Us</a></nuxt-link></li>
                                    <li class="wm-megamenu-li"><nuxt-link to="/contact-us"><a href="#">Contact</a></nuxt-link>
                                        <ul class="wm-megamenu">
                                            <li class="row">
                                                <div class="col-md-2">
                                                    <h4>Links 1</h4>
                                                    <ul class="wm-megalist">
                                                        <li><nuxt-link to="/contact-us"><a href="#">Contact</a></nuxt-link></li>
                                                    
                                                       
                                                    </ul>
                                                </div>
                                                <div class="col-md-5">
                                                    <h4>Artists text</h4>
                                                    <div class="wm-mega-text">
                                                        <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love.</p>
                                                        <p>If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <h4>sub category widget</h4>
                                                    <a href="#" class="wm-thumbnail">
                                                        <img src="../static/extra-images/mega-menuadd.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                  </ul>
                                </div>
                            </nav>
                            <!--// Navigation \\-->
                            <!-- <a href="#" class="wm-header-btn ">get started</a> -->
                        </div>
                    </div>
                </div>
            </div>
            <!--// MainHeader \\-->

		</header>
		<!--// Header \\-->

         <!-- Nuxt renders here -->

  <Nuxt />



  
		<!--// Footer \\-->
		<footer id="wm-footer" class="wm-footer-one">
			
            <!--// FooterNewsLatter \\-->
            <div class="wm-footer-newslatter">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <form>
                                <i class="wmicon-interface2"></i>
                                <input type="text" value="Enter your e-mail address" onblur="if(this.value == '') { this.value ='Enter your e-mail address'; }" onfocus="if(this.value =='Enter your e-mail address') { this.value = ''; }">
                                <input type="submit" value="Subscribe to our newsletter">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--// FooterNewsLatter \\-->

            <!--// FooterWidgets \\-->
            <div class="wm-footer-widget">
                <div class="container">
                    <div class="row">
                        <aside class="widget widget_contact_info col-md-3">
                            <a href="index-2.html" class="wm-footer-logo"><img src="images/logo-1.png" alt=""></a>
                            <ul>
                                <li><i class="wm-color wmicon-pin"></i> Adama Science and Technology University</li>
                                <li><i class="wm-color wmicon-phone"></i> +251 92141240124 <br></li>
                                <li><i class="wm-color wmicon-letter"></i> <a href="#">info@Collague.com</a> <a href="#">support@Us.com</a></li>
                            </ul>
                            <div class="wm-footer-icons">
                                <a href="#" class="wmicon-social5"></a>
                                <a href="#" class="wmicon-social4"></a>
                                <a href="#" class="wmicon-social3"></a>
                                <a href="#" class="wmicon-vimeo"></a>
                            </div>
                        </aside>
                        <aside class="widget widget_archive col-md-2">
                            <div class="wm-footer-widget-title"> <h5>Quick Links</h5> </div>
                            <ul>
                                <li><a href="#">Our Latest Events</a></li>
                                <li><a href="#">Our Courses</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">404 Page</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">All Instructors</a></li>
                            </ul>
                        </aside>
                        <aside class="widget widget_twitter col-md-4">
                            <div class="wm-footer-widget-title"> <h5><i class="wmicon-social2"></i> @enrollCourses</h5> </div>
                            <ul>
                               
                                <li>
                                    <p><a href="#">twitter</a></p>
                                    <time datetime="2008-02-14 20:00" class="wm-color">1 day ago</time>
                                </li>
                            </ul>
                        </aside>
                     
                    </div>
                </div>
            </div>
            <!--// FooterWidgets \\-->

            <!--// FooterCopyRight \\-->
            <div class="wm-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6"> <span><i class="wmicon-nature"></i> Ethiopia ,Adama 2°F / -17°C</span> </div>
                    </div>
                </div>
            </div>
            <!--// FooterCopyRight \\-->

		</footer>
		<!--// Footer \\-->

        <!-- ModalLogin Box -->
    <div v-if="!this.$store.getters.isAuthenticated" class="modal" :style="this.$store.getters.isAuthenticated ? 'position:relative !important':''" id="ModalLogin" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            
            <div v-if ="login" class="wm-modallogin-form wm-login-popup">
                <span class="wm-color">Login to Your Account</span>
                <span style="color:red;font-size:10px" v-if="this.$store.state.error"> {{this.$store.state.error}} </span>
                <form @submit.prevent="Login">
                    <ul>
                        <li> <input v-model="lemail" type="text"  placeholder="Your Email" required > </li>
                        <li> <input v-model="lpassword" type="password" placeholder="Your password" value="password" > </li>
                        <li v-if="this.$store.state.isloggin == true"> <input type="submit" value="Logging In"> </li>

                        <li v-else> <input type="submit" value="Sign In"> </li>
                    </ul>
                </form>
               
                <p @click="ToggleLogin" >Not a member yet? <a  href="#">Sign-up Now! </a></p>
            </div>

            <div v-else class="wm-modallogin-form ">
                <div v-if="student">

                    <span class="wm-color">create Your Student Account today</span>
                <form @submit.prevent="RegisterUser" >
                    <ul>
                        <li> <input type="text" v-model="username" required placeholder="Your Username" onblur="if(this.value == '') { this.value ='Your Username'; }" onfocus="if(this.value =='Your Username') { this.value = ''; }"> </li>
                        <li> <input type="text" v-model="first_name" required placeholder="Your Firstname"> </li>
                        <li> <input type="text" v-model="last_name"  required placeholder="Your Lastname"> </li>
                        <select style="margin-bottom:5px" v-model="sex">

                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <li> <input type="text" v-model="phone" required placeholder="Phone Number"> </li>
                        <li style="background-color:#f2f2f2;padding:5px;"> Profile Picture <input @change="SaveProfile" type="file" placeholder="ProfilePicture"> </li>
                         <select v-model=" academic_level" >

                            <option value="Lower School">Lower School</option>
                            <option value="Elementery School">Elementery School</option>
                            <option value="High School">High School</option>
                            <option value="Preparatory School">Preparatory School</option>
                        </select>

                        <li> <input type="text" v-model="email" required placeholder="Your E-mail" onblur="if(this.value == '') { this.value ='Your E-mail'; }" onfocus="if(this.value =='Your E-mail') { this.value = ''; }"> </li>
                        <li> <input type="password" v-model="password" required placeholder="password" onblur="if(this.value == '') { this.value ='password'; }" onfocus="if(this.value =='password') { this.value = ''; }"> </li>
                        <!-- <li> <input type="text" value="Confirm Password" onblur="if(this.value == '') { this.value ='Confirm Password'; }" onfocus="if(this.value =='Confirm Password') { this.value = ''; }"> </li> -->
                        <li> <input type="submit" :value="creating ? 'Creating ...' :'Create Account'"> </li>
                    </ul>
                </form>
                
                </div>
                <div v-else>

                    <span class="wm-color">create Your Instarctor Account today</span>
                <form  @submit.prevent="RegisterInstractor">
                        <ul>
                        <li> <input type="text" v-model="username2" required placeholder="Your Username" onblur="if(this.value == '') { this.value ='Your Username'; }" onfocus="if(this.value =='Your Username') { this.value = ''; }"> </li>
                        <li> <input type="text" v-model="first_name2" required placeholder="Firstname"> </li>
                        <li> <input type="text" v-model="last_name2"  required placeholder=" Lastname"> </li>
                        <select style="margin-bottom:5px" v-model="sex2">

                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                       <div v-if="loading == false">
                            <select style="margin-bottom:5px" v-model="field_of_study">

                            <option v-for="std in study" :key="std.id" :value="std.id">{{std.name}}</option>
                        </select>
                       </div>

                        <li> <input type="text" v-model="phone2" required placeholder="Phone Number"> </li>
                        <li> <textarea rows="10" cols="40" v-model="description" required placeholder="About You"> </textarea> </li>
                        <li style="background-color:#f2f2f2;padding:5px;"> Profile Picture <input @change="SaveProfile2" type="file" placeholder="ProfilePicture"> </li>
                        <div v-if="loading == false">
                         <select v-model="academic_completion_university" >

                            <option v-for="un in university" :key="un.id" :value="un.id">{{un.name}}</option>
                        </select></div>

                        <li> <input type="text" v-model="email2" required placeholder="Your E-mail" onblur="if(this.value == '') { this.value ='Your E-mail'; }" onfocus="if(this.value =='Your E-mail') { this.value = ''; }"> </li>
                        <li> <input type="password" v-model="password2" required placeholder="password" onblur="if(this.value == '') { this.value ='password'; }" onfocus="if(this.value =='password') { this.value = ''; }"> </li>
                        <!-- <li> <input type="text" value="Confirm Password" onblur="if(this.value == '') { this.value ='Confirm Password'; }" onfocus="if(this.value =='Confirm Password') { this.value = ''; }"> </li> -->
                        <li> <input type="submit" :value="creating ? 'Creating ...' :'Create Account'"> </li>
                    </ul>
                </form>
                
                </div>
               
                <p>Already a member? <a @click="ToggleLogin" href="#">Sign-in Here!</a> </p>
                <p>Want {{!student ? 'Student':'Instractor'}} Account? <a @click="ToggleRole" href="#">{{!student ? 'Student Account':'Instractor Account'}}</a> </p>

            </div>

          </div>
        </div>
      <div class="clearfix"></div>
      </div>
    </div>
    <div v-else></div>
    <!-- ModalLogin Box -->

</div>

</template>

<script>

import axios from 'axios'

export default {

 data(){

     return{

         login:true,
         student:true,
         creating:false,
         loading:true,

         study:[],
         university:[],

        //  Student Info 

        sex:"",
        phone:"",
        profile_picture:"",
        academic_level:"",
        username:"",
        first_name:"",
        last_name:"",
        email:"",
        password:"",


        // Instractor Info

        sex2:"",
        phone2:"",
        profile_picture2:"",
        academic_completion_university:"",
        username2:"",
        first_name2:"",
        last_name2:"",
        email2:"",
        password2:"",
        field_of_study:"",
        description:"",



        // LOgin Parameters

        lemail:"",
        lpassword:"",

     }
 },


methods:{
    Logout(){
        this.$store.dispatch("logout")
    },

   Login(){
       this.$store.dispatch("authenticateUser", {
        
        email: this.lemail,
        password: this.lpassword
      })
   }
    ,

     FetchFieldOfStudy(){
         const url = process.env.Url + "/auser-api/field-of-study/"

          axios.get(url).then(response => {
			  this.study = response.data;
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })

     },
      FetchUniversity(){
         const url = process.env.Url + "/auser-api/university/"

          axios.get(url).then(response => {
			  this.university = response.data;
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })

     },
   
   SaveProfile(e){
           
        this.profile_picture = e.target.files[0];
    },
   SaveProfile2(e){
           
        this.profile_picture2 = e.target.files[0];
    },
   
   RegisterUser(){
       this.creating = true
            const form = new FormData();
            const url = process.env.Url+"/auser-api/student/" 

            form.append('username',this.username);
            form.append('first_name',this.first_name2);
            form.append('last_name',this.last_name2);
            form.append('sex',this.sex);
            form.append('phone',this.phone);
            form.append('password',this.password);
            form.append('email',this.email);
            form.append('academic_level',this.academic_level);



            form.append('profile_picture',this.profile_picture)

            axios.post(url,form).then(response=>{

                console.log(response.data)
            

                    alert("Registration Successful")
                     this.creating = false
                  
                }).catch(error=>{
                    console.log(error.response.data)
                     this.creating = false
                })
   },
   RegisterInstractor(){
       this.creating = true
            const form = new FormData();
            const url = process.env.Url+"/auser-api/instructor/" 

            form.append('username',this.username2);
            form.append('first_name',this.first_name2);
            form.append('last_name',this.last_name2);
            form.append('sex',this.sex2);
            form.append('phone',this.phone2);
            form.append('password',this.password2);
            form.append('email',this.email2);
            form.append('description',this.description);
            form.append('field_of_study',this.field_of_study);
            form.append('academic_completion_university',this.academic_completion_university);



            form.append('profile_picture',this.profile_picture2)

            axios.post(url,form).then(response=>{

                console.log(response.data)
            

                    alert("Registration Successful")
                     this.creating = false
                  
                }).catch(error=>{
                    console.log(error.response.data)
                     this.creating = false
                })
   },

   

    ToggleRole(){
        this.student = !this.student;
        },
     ToggleLogin(){
   
     this.login = !this.login
 },

//   googleTranslateElementInit() { 
//             new google.translate.TranslateElement(
//                 {pageLanguage: 'en'}, 
//                 'google_translate_element'
//             ); 
//         } 
},

mounted(){
    // this.googleTranslateElementInit()
    this.FetchFieldOfStudy()
    this.FetchUniversity()
}

}
</script>

<style>

</style>