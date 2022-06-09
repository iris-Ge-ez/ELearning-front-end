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



                        <div class="col-md-12">
                            <div class="wm-filter-box">
                                <div class="wm-apply-select">
                                    <select v-model="year">
                                      <option value="2000">UAEA 2000</option>
                                        <option value="2001">UAEA 2001</option>
                                        <option value="2002">UAEA 2002</option>
                                        <option value="2003">UAEA 2003</option>
                                        <option value="2004">UAEA 2004</option>
                                        <option value="2005">UAEA 2005</option>
                                        <option value="2006">UAEA 2006</option>
                                        <option value="2007">UAEA 2007</option>
                                        <option value="2008">UAEA 2009</option>
                                        <option value="2009">UAEA 2010</option>
                                        <option value="2010">UAEA 2011</option>
                                        <option value="2011">UAEA 2012</option>
                                        <option value="2012">UAEA 2013</option>
                                        <option value="2013">UAEA 20014</option>
                                        <option value="" >All</option>

                                    </select>


                                </div>
                                <div class="wm-apply-select">
                                    <select v-model="subject">
                                        <option value="English">English </option>
                                        <option value="Biology">Biology</option>
                                        <option value="Mathematics"> Mathematics</option>
                                        <option value="Chemistry"> Chemistry</option>
                                        <option value="Physics">Physics</option>
                                        <option value="Civics">Civics</option>
                                        <option value="SAT">SAT</option>
                                      <option value="">All</option>



                                    </select>


                                </div>

                                <div class="wm-normal-btn">
                                    <a href="#" class="active">All Exam Sheets</a>

                                </div>
                                <div class="wm-view-btn">

                                    <a href="#" class="wmicon-signs"></a>
                                </div>
                            </div>


                            <div class="wm-courses wm-courses-popular">
                                <ul class="row">









                                    <li v-for="exam in filterdexams" :key="exam.id" class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a :href="exam.exam"> <img
                                                        src="extra-images/download.jpg" alt="">
                                                    <span class="wm-popular-hover"> <small>Download Exam</small> </span>
                                                </a>
                                                <figcaption style="padding-top:75px;height:100%">
                                                    <img src="extra-images/papular-courses-thumb-6.jpg" alt="">
                                                    <h6><a href="#">{{ exam.subject }}</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#"> year {{ exam.year }}</a></h6>
                                                <!-- <div class="wm-courses-price"> <span>$39</span> </div> -->
                                                <!-- <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 230</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 30</a></li>
                                                </ul> -->
                                            </div>
                                        </div>
                                    </li>



                                </ul>
                            </div>
                            <div class="wm-pagination">
                                <ul>
                                    <li><a href="#" aria-label="Previous"> <i class="wmicon-arrows4"></i> Previous</a>
                                    </li>
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li>...</li>
                                    <li><a href="#">18</a></li>
                                    <li><a href="#" aria-label="Next"> <i class="wmicon-arrows4"></i> Next</a></li>
                                </ul>
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
     middleware:["check-auth","auth"],
    layout: "MainLayout",

    data() {

        return {

            exams: [],
            filterdexams: [],
            year: '',
            subject: '',
        }
    },

    watch:{

        year(newValue,oldValue){
            console.log(newValue)
            this.filterexams()
        },
        subject(newValue,oldValue){
            console.log(newValue)
            this.filterexams()

        }
     
    },
    

    methods: {

        getExams() {
            this.loading = true

            const url = process.env.baseUrl + '/entrance-exam/'

            axios.get(url).then(response => {
                this.exams = response.data
                this.filterdexams = response.data
                this.loading = false;
            }).catch(error => {
                console.log(error);
            })
        },
        

// Filter Exams 
        filterexams(field, value) {
            this.filterdexams = []
            if(this.subject && !this.year){
                 this.filterdexams = this.exams.filter(exam => exam.subject == this.subject)
            }
            if(this.year  && !this.subject){
             this.filterdexams = this.exams.filter(exam => exam.year == this.year)
            

            }
            if(this.year && this.subject){
                  this.filterdexams = this.exams.filter(exam => {
                return exam.year == this.year &&  exam.subject == this.subject 
            })
            }if(!this.year && !this.subject){
                this.filterdexams = this.exams
            }

        }
    },

    mounted() {
        this.getExams()
    }
}
</script>

<style>
</style>