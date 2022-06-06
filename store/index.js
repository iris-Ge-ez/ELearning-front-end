export const state = () =>({
     
      currentCourse: null,


})

export const mutations =
    {

        setCourse(state, course) {
            state.currentCourse = course;
        }
    }