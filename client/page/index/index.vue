<template>
    <h1>hello world</h1>
</template>


<script>
    import userService from "../../service/index/index"

    import '../../static/common.css'

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

<style>
    .content{
        display: flex;
    }
</style>