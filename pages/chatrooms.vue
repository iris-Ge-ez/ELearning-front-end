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
                <div class="container">
                    <div class="row">
                        
                        
                        <aside class="col-md-3">
                            
                         
                          
                        </aside>
                        
                        <div class="col-md-9">
                            <div class="wm-filter-box">
                                <div class="wm-apply-select">
                                    <select v-model="grade">
                                        <option value="1">Grade 11</option>
                                        <option value="2">Grade 12</option>
                                        <option value="">All</option>
                                       
                            
                                        
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
                         <div v-for="room in filterd_rooms" :key="room.id" class="wm-promo-box wm-typography-element">
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
         chat_url:process.env.Chat,
         filterd_rooms:[],
         grade:""
     }
 },
  watch: {
    // whenever grdae changes, this function will run
     grade(newValue,oldValue){
         console.log("change " +newValue)
        
        this.FilterRooms()
     }
  },

 methods:{

     FetchChatrooms(){
         const url = process.env.Url + "/chat-api/chat-group/"

          axios.get(url).then(response => {
			  this.chatrooms = response.data;
              this.filterd_rooms = response.data
			  this.loading = false;
		  }).catch(error => {
			  console.log(error);
		  })

     },
      FilterRooms(){
              if(this.grade == ""){
                this.filterd_rooms = this.chatrooms
                }else{
                    this.filterd_rooms = this.chatrooms.filter(course=>{
                        return course.grade == this.grade
                    })
                }
        },
 },


 mounted(){
     this.FetchChatrooms()
 }
}
</script>

<style>

</style>