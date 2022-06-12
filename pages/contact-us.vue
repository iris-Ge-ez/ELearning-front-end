<template>
  <!--// Main Content \\-->
  <div class="wm-main-content">
    <!--// Main Section \\-->
    <div class="wm-main-section wm-contact-full wm-contact-full-inner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="wm-contact-tab">
              <!-- Nav tabs -->
              <ul class="nav nav-tabs">
                <li class="active">
                  <a href="#home" aria-controls="home" data-toggle="tab"
                    >Contact Us</a
                  >
                </li>
                <li>
                  <a href="#profile" aria-controls="profile" data-toggle="tab"
                    >Information Details</a
                  >
                </li>
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                <div class="tab-pane active" id="home">
                  <div class="row">
                    <div class="col-md-4">
                    </div>
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
                <div class="tab-pane" id="profile">
                  <span class="wm-contact-title">Contact Info</span>
                  <div class="wm-contact-service">
                    <ul class="row">
                      <li class="col-md-4">
                        <span class="wm-service-icon"
                          ><i class="wmicon-pin"></i
                        ></span>
                        <h5 class="wm-color">Address</h5>
                        <p>Adama, Wangari market mall</p>
                      </li>
                      <li class="col-md-4">
                        <span class="wm-service-icon"
                          ><i class="wmicon-phone"></i
                        ></span>
                        <h5 class="wm-color">Phone</h5>
                        <p>+251917817158
                        </p>
                      </li>
                      <li class="col-md-4">
                        <span class="wm-service-icon"
                          ><i class="wmicon-letter"></i
                        ></span>
                        <h5 class="wm-color">E-mail</h5>
                        <p>
                          <a href="mailto:name@email.com"
                            >student@assistant.com</a
                          >
                          <a href="mailto:name@email.com"
                            >support@secondary.com</a
                          >
                        </p>
                      </li>
                    </ul>
                  </div>
                  <ul class="contact-social-icon">
                    <li>
                      <a href="#"
                        ><i class="wm-color wmicon-social5"></i> Facebook</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="wm-color wmicon-social4"></i> Twitter</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="wm-color wmicon-social3"></i> Linkedin</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="wm-color wmicon-vimeo"></i> Vimeo</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--// Main Section \\-->
  </div>
  <!--// Main Content \\-->
</template>

<script>

import axios from 'axios';

export default {
  layout: "MainLayout",

  data(){

    return{

      loading:true,
      name:"",
      email:"",
      phone:"",
      message:"",
    }
  },


  methods:{

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
    
}}}
</script>

<style></style>
