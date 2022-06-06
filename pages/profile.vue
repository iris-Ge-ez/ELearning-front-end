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
										<a href="#"><img src="extra-images/megersa.jpg" alt=""></a>
									</figure>
									<div class="wm-student-nav-text">
										<h6>Megersa Fekadu</h6>
										<a href="#">update image</a>
									</div>
									<ul>
										
										<li>
											<a href="#">
												<i class="wmicon-book"></i>
												My Courses
											</a>
										</li>
									
									
									</ul>
								</div>
							</div>							
						</aside>
						<div class="col-md-8">
							<div class="wm-student-profile-info">
								<div class="wm-student-dashboard-profile">
									<div class="wm-plane-title">
										<h2>About Me</h2>									
									</div>
									<ul class="row">
										<li class="col-md-4">
											<div class="wm-student-profile">
												<a class=wm-circle-icon href="#"><i class="wmicon-technology4"></i></a>
												<div class="wm-student-profile-text">
													<span>Phone:</span>
													<a href="#">(012) 345-6789</a>
												</div>
											</div>
										</li>
										<li class="col-md-4">
											<div class="wm-student-profile">
												<a class=wm-circle-icon href="#"><i class="wmicon-web2"></i></a>
												<div class="wm-student-profile-text">
													<span>Email:</span>
													<a href="#">kevin@student.com</a>
												</div>
											</div>
										</li>
										<li class="col-md-4">
											<div class="wm-student-profile">
												<a class=wm-circle-icon href="#"><i class="fa fa-graduation-cap"></i></a>
												<div class="wm-student-profile-text">
													<span>Tutor:</span>
													<a href="#">Janet H. Kamerons</a>
												</div>
											</div>
										</li>
									</ul>
									<p>Becoming a student requires more than a test score. To “be student” requires persistence. And passion. And a desire to give back. It doesn’t matter 	whether you’re the first in your family to attend college or you’re the latest in a long tradition of educational excellence: You stand up and you stand out.</p>								
								</div>
								<div class="wm-profile-info">
									<div class="wm-title-full">
										<h5>More Detail Information</h5>
									</div>
									<div class="wm-article">
										<ul>
											<li class="wm-profile-info-right">
												<span>Public on campus</span>
											</li>
										</ul>
									</div>
									<div class="wm-article">
										<ul>
											<li class="wm-profile-start">
												<div class="wm-profile-detail-info">
													<h6><a href="#">Volunteer work with non-profits</a></h6>
													<span>No details have been entered.</span>
												</div>
											</li>
											<li><a href="#" class="wm-edit-icon"><i class="wmicon-tool3"></i>Edit</a></li>
											<li>
												<div class="wm-select-checkbox">
													<input id="c22" type="checkbox" name="ca">
													<label for="c22">
														<span></span>
													</label>
												</div>
											</li>
										</ul>
										<form class="wm-profile-info-search">
											<input type="text" onfocus="if(this.value =='Enter text here ...') { this.value = ''; }" onblur="if(this.value == '') { this.value ='Enter text here ...'; }" value="Enter text here ...">
										</form>
									</div>
									<div class="wm-article">
										<ul>
											<li class="wm-profile-start">
												<div class="wm-profile-detail-info">
													<h6><a href="#">Knowledge and skills</a></h6>
													<span>No details have been entered.</span>
												</div>
											</li>
											<li><a href="#" class="wm-edit-icon"><i class="wmicon-tool3"></i>Edit</a></li>
											<li>
												<div class="wm-select-checkbox">
													<input id="c23" type="checkbox" name="ca">
													<label for="c23">
														<span></span>
													</label>
												</div>
											</li>
										</ul>
									</div>
									<div class="wm-article">
										<ul>
											<li class="wm-profile-start">
												<div class="wm-profile-detail-info">
													<h6><a href="#">Languages</a></h6>
													<span>English (B2); Spanish (native)</span>
												</div>
											</li>
											<li><a href="#" class="wm-edit-icon"><i class="wmicon-tool3"></i>Edit</a></li>
											<li>
												<div class="wm-select-checkbox">
													<input id="c24" type="checkbox" name="ca">
													<label for="c24">
														<span></span>
													</label>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>									
						</div>

                        <div class="col-md-12">
							<div class="wm-student-settings-info">							
								<div class="wm-student-dashboard-settings">
									<div class="wm-plane-title">
										<h2>Profile Settings</h2>
									</div>
									<form>
										<ul>
											<li><input type="text" value="First Name" onblur="if(this.value == '') { this.value ='First Name'; }" onfocus="if(this.value =='First Name') { this.value = ''; }"></li>
											<li><input type="text" value="Last Name" onblur="if(this.value == '') { this.value ='Last Name'; }" onfocus="if(this.value =='Last Name') { this.value = ''; }"></li>
											<li><input type="text" value="Phone Number" onblur="if(this.value == '') { this.value ='Phone Number'; }" onfocus="if(this.value =='Phone Number') { this.value = ''; }"></li>
											<li><input type="text" value="E-mail Address" onblur="if(this.value == '') { this.value ='E-mail Address'; }" onfocus="if(this.value =='E-mail Address') { this.value = ''; }"></li>
											<li class="wm-student-select">
												<div class="wm-select-two">
													<select>
														<option>Day of Birth </option>
														<option>Day of Birth 1 </option>
														<option>Day of Birth 2 </option>
														<option>Day of Birth 3 </option>
													</select>
												</div>
											</li>
											<li class="wm-student-select">
												<div class="wm-select-two">
													<select>
														<option>Month of Birth </option>
														<option>Month of Birth 1 </option>
														<option>Month of Birth 2 </option>
														<option>Month of Birth 3 </option>
													</select>
												</div>
											</li>
											<li class="wm-student-select">
												<div class="wm-select-two">
													<select>
														<option>Year of Birth </option>
														<option>Year of Birth 1 </option>
														<option>Year of Birth 2 </option>
														<option>Year of Birth 3 </option>
													</select>
												</div>
											</li>
											<li>
												<div class="wm-select-two">
													<select>
														<option>Country </option>
														<option>Country 1 </option>
														<option>Country 2 </option>
														<option>Country 3 </option>
													</select>
												</div>
											</li>
											<li>
												<div class="wm-select-two">
													<select>
														<option>City </option>
														<option>City 1 </option>
														<option>City 2 </option>
														<option>City 3 </option>
													</select>
												</div>
											</li>																			 
		                                </ul>
									</form>
								</div>
								<div class="wm-student-dashboard-form">
									<div class="wm-full-title ">
										<h2>Update Password</h2>
									</div>
									<form>
										<ul>
											<li><input type="text" value="Old Password" onblur="if(this.value == '') { this.value ='Old Password'; }" onfocus="if(this.value =='Old Password') { this.value = ''; }"></li>
											<li><input type="text" value="New Password" onblur="if(this.value == '') { this.value ='New Password'; }" onfocus="if(this.value =='New Password') { this.value = ''; }"></li>
											<li><input type="text" value="Your Name" onblur="if(this.value == '') { this.value ='Your Name'; }" onfocus="if(this.value =='Your Name') { this.value = ''; }"></li>																			 
		                                </ul>
									</form>
								</div>
								<div class="wm-student-dashboard-form wm-student-dashboard">
									<div class="wm-full-title ">
										<h2>Social Media</h2>
									</div>
									<form>
										<ul>
											<li class="wm-form-icon"><a class="fa fa-facebook wm-icon" href="#"></a><input type="text" value="kevinnikols" onblur="if(this.value == '') { this.value ='kevinnikols'; }" onfocus="if(this.value =='kevinnikols') { this.value = ''; }"></li>
											<li class="wm-form-icon"><a class="fa fa-twitter wm-icon" href="#"></a><input type="text" value="@kevinnikols" onblur="if(this.value == '') { this.value ='@kevinnikols'; }" onfocus="if(this.value =='@kevinnikols') { this.value = ''; }"></li>
											<li class="wm-form-icon"><a class="fa fa-youtube wm-icon" href="#"></a><input type="text" value="kevinnikols" onblur="if(this.value == '') { this.value ='kevinnikols'; }" onfocus="if(this.value =='kevinnikols') { this.value = ''; }"></li>
											<li><input type="submit" value="update changes"></li>
		                                </ul>
									</form>
								</div>
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
export default {
  layout:"MainLayout"
}
</script>

<style>

</style>