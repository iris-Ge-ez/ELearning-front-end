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
                                <p>Find your Exam Sheets here:</p>
                                <form>
                                    <ul>
                                        <li>
                                            <div class="wm-radio">
                                                
                                                <div class="wm-radio-partition">
                                                    <input id="female" type="radio" name="gender" value="female">
                                                    <label for="female">by Exam name</label>
                                                </div>
                                            </div>
                                        </li>
                                        <li> <input type="text" value="Course Name" onblur="if(this.value == '') { this.value ='Course Name'; }" onfocus="if(this.value =='Course Name') { this.value = ''; }"> <i class="wmicon-search"></i> </li>
                                       
                                        <li> <input type="submit" value="Search course"> </li>
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
                                        <option>UAEA 2001</option>
                                        <option>UAEA 2002</option>
                                        <option>UAEA 2003</option>
                                        <option>UAEA 2004</option>
                                        <option>UAEA 2005</option>
                                        <option>UAEA 2006</option>
                                        <option>UAEA 2007</option>
                                        <option>UAEA 2008</option>
                                        
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
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-1.jpg" alt=""> 
                                            <span class="wm-popular-hover"> <small>Download Exam</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-1.jpg" alt="">
                                                    <h6><a href="#">Shelly T. Forrester</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Advanced Architectural Research</a></h6>
                                                <div class="wm-courses-price"> <span>$32</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 342</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 10</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-2.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-2.jpg" alt="">
                                                    <h6><a href="#">Sam K. Harrington</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Advanced Landscape & Urbanism</a></h6>
                                                <div class="wm-courses-price"> <span>Free</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 438</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 28</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-3.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-3.jpg" alt="">
                                                    <h6><a href="#">Sara A. Shirley</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Transdisciplinary Design</a></h6>
                                                <div class="wm-courses-price"> <span>$79</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 309</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 19</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-5.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-4.jpg" alt="">
                                                    <h6><a href="#">Julius M. Lepage</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Economics & Quality Management</a></h6>
                                                <div class="wm-courses-price"> <span>$50</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 298</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 11</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-6.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-5.jpg" alt="">
                                                    <h6><a href="#">Kayla A. McCrea</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Philosophy, Politics and Economics (PPE)</a></h6>
                                                <div class="wm-courses-price"> <span>$99</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 222</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 76</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-7.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-6.jpg" alt="">
                                                    <h6><a href="#">Allan L. Oakes</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Modern Languages and Linguistics</a></h6>
                                                <div class="wm-courses-price"> <span>$49</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 248</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 21</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-8.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-7.jpg" alt="">
                                                    <h6><a href="#">Virginia R. Cruz</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">History (Ancient and Modern)</a></h6>
                                                <div class="wm-courses-price"> <span>$79</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 188</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 11</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-9.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-8.jpg" alt="">
                                                    <h6><a href="#">Roslyn W. Beavers</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Classical Archaeology & Ancient History</a></h6>
                                                <div class="wm-courses-price"> <span>$89</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 176</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-10.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-9.jpg" alt="">
                                                    <h6><a href="#">Loni C. Simmons</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Mathematics & Computer Science</a></h6>
                                                <div class="wm-courses-price"> <span>Free</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 587</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 45</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-11.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-2.jpg" alt="">
                                                    <h6><a href="#">Jodie A. Mitchell</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Biochemistry (Molecular and Cellular)</a></h6>
                                                <div class="wm-courses-price"> <span>$49</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 188</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 39</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-12.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-3.jpg" alt="">
                                                    <h6><a href="#">Garry V. Ewing</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Archaeology and Anthropology</a></h6>
                                                <div class="wm-courses-price"> <span>$89</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 188</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 39</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-13.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-5.jpg" alt="">
                                                    <h6><a href="#">Jennifer M. Price</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">History and Modern Languages</a></h6>
                                                <div class="wm-courses-price"> <span>$35</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 248</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-14.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-6.jpg" alt="">
                                                    <h6><a href="#">Nancy D. Dye</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Mathematics and Statistics</a></h6>
                                                <div class="wm-courses-price"> <span>$59</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 466</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 19</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-15.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-6.jpg" alt="">
                                                    <h6><a href="#">Janet G. Drennan</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">European and Middle Eastern Languages</a></h6>
                                                <div class="wm-courses-price"> <span>$39</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 230</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 30</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="col-md-4">
                                        <div class="wm-courses-popular-wrap">
                                            <figure> <a href="#"><img src="extra-images/papular-courses-16.jpg" alt=""> <span class="wm-popular-hover"> <small>see course</small> </span> </a>
                                                <figcaption>
                                                    <img src="extra-images/papular-courses-thumb-6.jpg" alt="">
                                                    <h6><a href="#">Katrina J. Alday</a></h6>
                                                </figcaption>
                                            </figure>
                                            <div class="wm-popular-courses-text">
                                                <h6><a href="#">Classics and Oriental Studies</a></h6>
                                                <div class="wm-courses-price"> <span>$65</span> </div>
                                                <ul>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social7"></i> 165</a></li>
                                                    <li><a href="#" class="wm-color"><i class="wmicon-social6"></i> 11</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="wm-pagination">
                                <ul>
                                    <li><a href="#" aria-label="Previous"> <i class="wmicon-arrows4"></i> Previous</a></li>
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
export default {
 layout:"MainLayout"
}
</script>

<style>

</style>