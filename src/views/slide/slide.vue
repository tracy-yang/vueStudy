<template>
    <div>
        <el-row>
            <el-col :span="5">
                <i class="el-icon-arrow-left" @click="pre" v-if="!preDisabled"></i>
                <div class="list" ref="list">
                    <div class="itemWrapper"  ref="wrapper">
                        <span v-for="item in list" :key="item" class="item">
                            {{item}}
                        </span>
                    </div>
                </div>
                <i class="el-icon-arrow-right" @click="next" v-if="!nextDisabled"></i>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[1,2,3,4,5,6,7,8,9,10],
            left:0,
            right:0,
            count:0,
            nextDisabled:false,
            preDisabled:false,
            index:1,

        }
    },
    created(){

    },
    watch:{
    },
    computed:{
    },
    mounted(){
        this.getWidth();
        window.onresize =() =>{
           this.getWidth();
        }
    },
    methods:{
        // 获取宽度
        getWidth(){
            let list = this.$refs.list;
            this.dom = this.$refs.wrapper;
            let style = window.getComputedStyle(list);
            let width = style.width.substring(0,style.width.length - 2);
            this.count = width / 50;
            console.log(this.count,333)
        },
        pre(){
            this.index++;
            let left = this.dom.style.left.replace('px','');
            let result = Number(left ) + parseInt(parseInt(this.count) * 50);
            this.dom.style.left = result + 'px';
            if(left == 0 - parseInt(parseInt(this.count) * 50)){
                this.preDisabled = true;
                this.index = 1;
            }else{
               this.nextDisabled = false; 
            }
        },
        next(){
            this.index++;
            let left = this.dom.style.left.replace('px','');
            let result = Number(left ) - parseInt(parseInt(this.count) * 50);
            this.dom.style.left = result + 'px';
            console.log(this.list.length / parseInt(this.count),this.index)
            if(this.list.length / parseInt(this.count) == this.index){
                this.nextDisabled = true;
                this.index = 1;
            }else{
                 this.preDisabled = false;
            }
        } 
    }
}
</script>

<style>

.list{
    display: inline-block;
    width: 70%;
    height: 40px;
    overflow: hidden;
    white-space: nowrap;
    border:black solid 1px;
    position: relative;
}
.itemWrapper{
    position: absolute;
    left: 0;
}
.item{
    display: inline-block;
    width: 40px;
    height: 40px;
    background: #ff0000;
    margin-right: 10px;
}

</style>
