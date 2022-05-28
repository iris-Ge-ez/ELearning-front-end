<template>
    
<div>

    <form @submit.prevent ="SubmitFile">


  <input type="file" @change="SaveChanges">
  <input type="text" placeholder="username" v-model="username">
  <input type="Submit" value="Submit File">
    </form>
</div>


</template>

<script>
import axios from 'axios'
export default{
    
data(){

    return{
        file:"",
        username:""
    }
}
,
methods:{
    SaveChanges(e){
        this.file = e.target.files[0]
        console.log(this.file)
    },

    
    SubmitFile(){
        const formData = new FormData()

        formData.append('file',this.file)

        const url = "Your Api Endpoint"
        
        axios.post(url,formData).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }
}
}
</script>
