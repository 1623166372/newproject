<template>
    <div id="app">
      <ul v-show="istrue">
        <li>
          {{name}}
         </li>
        <li>
          {{age}}
        </li>
        <li>
          {{sex}}
        </li>
        <li v-for="(item,index) in tip" :key="index">
          {{item.tip}}
        </li>
        <li style="position: relative">
          <button @click="clickme" style="position: absolute;top: 0;left:0;bottom: 0;right: 0;margin: auto;height:30px;width:60px" >获取值</button>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
          return {}
        },
      props:{
         name:{
           type:String
         },
         age:{
           type:String
         },
          sex:{
           type:String
         },
         istrue:{
           type:Boolean,
           default:true
         },
        tip:{
           type:Array,
        }
        },
      methods:{
          clickme(){
            this.$emit("soming",this.name)
          }
      },
      mounted(){
      }
    }
</script>

<style scoped>
  #app{
    height: 60px;;
    background-color: purple;
  }
  #app>ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
    height: 60px;
    line-height: 60px;

  }
  #app>ul>li{
    float: left;
    margin: 0;
    color: white;
    width: 100px;
    text-align: center;
    vertical-align: center;
  }


</style>
