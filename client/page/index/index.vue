<template>
    <h1>hello world</h1>
</template>


<script>
    import userService from "../../service/index/index"

export default {
    data(){
        return {

        }
    },
    created(){
        console.log(' vue running ')
        userService.getInfo( 20180101 ).then( (data)=>{
            console.log(data)
        } )
    },
}

</script>