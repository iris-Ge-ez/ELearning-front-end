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
                <div class="container">
                    <div class="row">
                        
                        <aside class="col-md-3">
                            <div class="widget wm-search-course">
                                <h3 class="wm-short-title wm-color">Find Your Course</h3>
                                <p>Find your Chatroom here:</p>
                                <form>
                                    <ul>
                                        <li>
                                            <div class="">
                                                
                                                <div class="wm-radio-partition">
                                                    <label for="female">Chatroom name</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li> <input type="text" value="Course Name" onblur="if(this.value == '') { this.value ='Course Name'; }" onfocus="if(this.value =='Course Name') { this.value = ''; }"> <i class="wmicon-search"></i> </li>
                                       
                                        <li> <input type="submit" value="Search Chatroom"> </li>
                                    </ul>
                                </form>
                            </div>
                            <div class="widget widget_check-box widget_scroll-box">
                                <h5>Search By Type</h5>
                                <ul>
                                    <li>
                                        <input id="type1" type="checkbox">
                                        <label for="type1">
                                            <span></span>
                                            All Courses
                                        </label>
                                    </li>
                                    <li>
                                        <input id="type2" type="checkbox">
                                        <label for="type2">
                                            <span></span>
                                            Chemistry
                                        </label>
                                    </li>
                                    <li>
                                        <input id="type3" type="checkbox">
                                        <label for="type3">
                                            <span></span>
                                            Biology
                                        </label>
                                    </li>
                                    <li>
                                        <input id="type4" type="checkbox">
                                        <label for="type4">
                                            <span></span>
                                            English
                                        </label>
                                    </li>
                                    <li>
                                        <input id="type5" type="checkbox">
                                        <label for="type5">
                                            <span></span>
                                            Physics

                                        </label>
                                    </li>
                                    <li>
                                        <input id="type6" type="checkbox">
                                        <label for="type6">
                                            <span></span>
                                            Mathematics
                                        </label>
                                    </li>
                                    <li>
                                        <input id="type7" type="checkbox">
                                        <label for="type7">
                                            <span></span>
                                           Schoolastic Aptitude
                                        </label>
                                    </li>
                                    <li>
                                        <input id="type7" type="checkbox">
                                        <label for="type7">
                                            <span></span>
                                         Civics
                                        </label>
                                    </li>
                                   
                                    
                                   
                                  
                                   
                                </ul>
                            </div>
                          
                        </aside>
                        
                        <div class="col-md-9">
                            <div class="wm-filter-box">
                                <div class="wm-apply-select">
                                    <select>
                                        <option>Grade 11</option>
                                        <option>Grade 12</option>
                                       
                            
                                        
                                    </select>
                                </div>            
                                
                                <div class="wm-normal-btn">
                                    <a href="#" class="active">All Chatrooms</a>
                                  
                                </div>
                                <div class="wm-view-btn">
                                   
                                    <a href="#" class="wmicon-signs"></a>
                                </div>
                            </div>

          <div  v-if="loading == false">
                         <div v-for="room in chatrooms" :key="room.id" class="wm-promo-box wm-typography-element">
								<div class="wm-promo-box-text">
									<h2> {{room.name}} </h2>
									
									<span>{{room.description}}</span>																	
								</div>
								<a class="read-more" :href="`${chat_url}${room.name}/`">Join Chatroom</a>
							</div>

                           </div>

                           
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
 layout:"MainLayout",


 data(){
     return{
         chatrooms:[],
         loading:true,
         chat_url:process.env.Chat
     }
 },


 methods:{

     FetchChatrooms(){
         const url = process.env.Url + "/chat-api/chat-group/"

          axios.get(url).then(response => {
			  this.chatrooms = response.data;
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })

     }
 },


 mounted(){
     this.FetchChatrooms()
 }
}
</script>

<style>

</style>