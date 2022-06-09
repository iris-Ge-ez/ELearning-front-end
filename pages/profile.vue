<template>
  
  <div>
      <!--// Mini Header \\-->
		<div class="wm-mini-header">
			<span class="wm-blue-transparent"></span>
			 <div class="container">
			    <div class="row">
				    <div class="col-md-12">
				        <div class="wm-mini-title">
				       		<h1>Student Dashboard</h1> 
				        </div>
				        <div class="wm-breadcrumb">
				          	<ul>
				          	 	<li><a href="index-2.html">Home</a></li>
				          	 	<li><a href="#">Student Dashboard</a></li>
				           		<li>Profile</li>
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
						<aside class="col-md-4">
							 <div class="wm-student-dashboard-nav">
								 <div class="wm-student-nav">
									<figure>
										<a href="#"><img :src="user_data.profile_picture" alt=""></a>
									</figure>
									<div class="wm-student-nav-text">
										<h6>{{user_data.first_name}} {{user_data.last_name}}</h6>
									</div>
									<ul>
										
										<li>
											<a href="#">
												<i class="wmicon-book"></i>
												{{user_data.username}}
											</a>
										</li>
									
									
									</ul>
								</div>
							</div>							
						</aside>
						<div class="col-md-8">

							{{user_data}}
									<div class="wm-student-settings-info">							
								<div class="wm-student-dashboard-settings">
									<div class="wm-plane-title">
										<h2>Profile Settings</h2>
									</div>
									<form @submit.prevent="RegisterUser">
										<ul>
											<li><input type="text" v-model="first_name" :placeholder="user_data.first_name"></li>
											<li><input type="text" v-model="last_name" :placeholder="user_data.last_name"></li>
											<li><input type="text" v-model="phone" :placeholder="user_data.phone"></li>
											<li><input type="text" v-model="email" :placeholder="user_data.email"></li>
											<li><input type="text" v-model="username" :placeholder="user_data.username"></li>
											<li><input type="text" v-model="password" :placeholder="user_data.password"></li>
											<li style="background-color:#f2f2f2;padding:5px;"> Profile Picture <input @change="SaveProfile" type="file" placeholder="ProfilePicture"> </li>

											 <li>
												  <select v-model=" academic_level" >

                            <option value="Lower School">Lower School</option>
                            <option value="Elementery School">Elementery School</option>
                            <option value="High School">High School</option>
                            <option value="Preparatory School">Preparatory School</option>
                        </select>
											 </li>
											
										
											
											<li>
												 <select style="margin-bottom:5px" v-model="sex">

                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
											</li>																			 
		                                </ul>

                        <li> <input type="submit" :value="creating ? 'Updateing ...' :'Update Profile'"> </li>

									</form>
								</div>
								
							
							</div>						
						</div>

                        <div class="col-md-12">
							
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

  data(){
	  return{


		  user_data:[],
		  loading:true,


		//   user update

		sex:"",
        phone:"",
        profile_picture:"",
        academic_level:"",
        username:"",
        first_name:"",
        last_name:"",
        email:"",
        password:"",
	    creating:false,

	  }
  },

  methods:{
	  SaveProfile(e){
           
        this.profile_picture = e.target.files[0];
    },


RegisterUser(){
       this.creating = true
            const form = new FormData();
            const url = process.env.Url + `/auser-api/student/${this.$store.state.user_id}/`
            form.append('username',this.username ? this.username : this.user_data.username);
            form.append('first_name',this.first_name);
            form.append('last_name',this.last_name);
            form.append('sex',this.sex);
            form.append('phone',this.phone);
            form.append('password',this.password);
            form.append('email',this.email);
            form.append('academic_level',this.academic_level);



            form.append('profile_picture',this.profile_picture)

            axios.put(url,form).then(response=>{

                console.log(response.data)
            

                    alert("Update Successful");
					this.user_data = []
					this.user_data = response.data
                     this.creating = false
                  
                }).catch(error=>{
                    console.log(error.response.data)
                     this.creating = false
                })
   },
	   FetchUserData(){
         const url = process.env.Url + `/auser-api/student/${this.$store.state.user_id}/`

          axios.get(url).then(response => {
			  this.user_data = response.data;
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })

     },


	 
  },

  mounted(){

	  this.FetchUserData()
  }
}
</script>

<style>

</style>