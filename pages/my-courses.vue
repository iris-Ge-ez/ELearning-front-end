<template>
	<div v-if="loading" class="col-md-12">
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
							<h1>Student Dashboard</h1>
						</div>
						<div class="wm-breadcrumb">
							<ul>
								<li><a href="index-2.html">Home</a></li>
								<li><a href="#">Student Dashboard</a></li>
								<li>My Courses</li>
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
										<a href="#"><img :src="user_data.profile_picture" alt="" style="width:90px"></a>
									</figure>
									<div class="wm-student-nav-text">
										<h6>{{ user_data.first_name }} {{ user_data.last_name }}</h6>
										<h6>{{ user_data.username }}</h6>
									</div>
									<ul>
										<li>
											<nuxt-link to="/profile">
												<a href="#">
													<i class="wmicon-avatar"></i>
													Profile Details
												</a>
											</nuxt-link>
										</li>
										<li class="active">
											<a href="#">
												<i class="wmicon-book"></i>
												My Courses
											</a>
										</li>



										<li v-if="this.$store.getters.isAuthenticated" @click="Logout">
											<a href="#">
												<i class="wmicon-arrow"></i>
												Logout
											</a>
										</li>

									</ul>
								</div>
							</div>
						</aside>
						<div class="col-md-8">
							<div class="wm-student-dashboard-courses wm-dashboard-courses">
								<div class="wm-plane-title">
									<h2>My Courses</h2>
								</div>
								<div class="wm-article">
									<ul>
										<li class="wm-courses-start wm-student">
											<span>Course Name</span>
										</li>
										<li class="wm-student">
											<span>Status</span>
										</li>
										<li class="wm-student">
											<span>week</span>
										</li>
									</ul>
								</div>
								<div v-for="data in progress" :key="data.id" class="wm-article">
									<ul v-if="getCourse(data.course) && getWeek(data.week)">
										<li class="wm-courses-start">
											<div class="wm-statement-started-text">
												<h6><a href="#">{{ getCourse(data.course).name }}</a></h6>

												<span><a href="#" class="wmicon-time2"></a><time
														datetime="2017-02-14">last updated
														{{ getCourse(data.course).updated_date | date }}</time></span>
											</div>
										</li>
										<li>
											<a class="wm-status-courses wm-completed" href="#">Completed</a>
										</li>
										<li>
											<small>{{ getWeek(data.week).name }}</small>
										</li>
									</ul>
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
import axios from "axios";
export default {
  middleware: ["check-auth", "auth"],
  layout: "MainLayout",

  data() {
    return {
      loading: true,
      user_data: [],
      progress: [],
      courses: [],
      weeks: [],
      enrolled: [],
    };
  },

  methods: {

	//   get Enrolled Courses

    getEnrolledCourses() {
      this.loading = true;
      const url = process.env.baseUrl + "/enroll/";

      axios
        .get(url)
        .then((response) => {
          this.enrolled = response.data.filter(
            (enrolment) => enrolment.student == this.$store.state.user_id
          );
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },

// Fetch User data from API

    FetchUserData() {
      this.loading = true;
      const url =
        process.env.Url + `/auser-api/student/${this.$store.state.user_id}/`;

      axios
        .get(url)
        .then((response) => {
          this.user_data = response.data;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },


// Fetch Progress from API

    FetchProgress() {
      this.loading = true;

      const url = process.env.baseUrl + "/course-progress/";

      axios
        .get(url)
        .then((response) => {
          this.progress = response.data.filter(
            (week) => week.student == this.$store.state.user_id
          );

          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },


// Logout User

    Logout() {
      this.$store.dispatch("logout");
    },


	// Filter A specific Week

    getWeek(id) {
      return this.weeks.find((week) => week.id == id);
    },

	// Filter A specific Course

    getCourse(id) {
      const co = this.courses.find((course) => course.id == id);

      return co;
    },


	// Get All Courses from API

    getCourses() {
      this.loading = true;
      const url = process.env.baseUrl + "/course/";

      axios
        .get(url)
        .then((response) => {
          this.courses = response.data;

          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },



	// Get All Weeks from API

    getWeeks() {
      this.loading = true;
      const url = process.env.baseUrl + "/week/";

      axios
        .get(url)
        .then((response) => {
          this.weeks = response.data;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
  },


	// Fetch Data on Page Load
	
  mounted() {
    this.FetchUserData();
    this.FetchProgress(),
      this.getCourses(),
      this.getWeeks(),
      this.getEnrolledCourses();
  },
};
</script>

<style>
</style>