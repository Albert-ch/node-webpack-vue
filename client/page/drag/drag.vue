<template>
    <div>
        <ul>
            <draggable v-model="list" :move="moveData" @update="updateData">
                <li v-for="item,idx in list" :key="idx">
                    {{ item.title }}
                </li>
            </draggable>
            <input type="text" v-model="val" v-focus>
        </ul>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        components: {draggable},
        directives: {
            focus: {
                // 指令的定义
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        data() {
            return {
                list: [
                    {
                        title: '你来打我呀',
                    },
                    {
                        title: '就不告诉你',
                    },
                    {
                        title: 'Hello world',
                    },
                ],
                val: '请输入'
            }
        },
        watch:{
            list(val){
                console.log(val)
            }
        },
        methods:{
            moveData(event){
                console.log( 'move', event )
            },
            updateData(event){
                console.log('update', event)
            }
        }
    }
</script>

<style>

</style>