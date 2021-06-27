<template>
  <div id="hello">
    <header>
      <Nav  :name="name"  :age="age"   :sex="sex"   :tip="tips" :istrue="istrue"  @soming="soming"></Nav>
    </header>

    <footer>
      <button @click="change">点我</button>
      <button @click="login">登录</button>
    </footer>
  </div>
</template>

<script>
import  Nav from "../components/nav"
export default {
  name: 'hello',
  components:{
   "Nav":Nav
  },
  data () {
    return {
      name:"杨金山",
      age:"11",
      sex:"男",
      istrue:true,
      tips:[]

    }
  },

  methods:{
   change(){
     this.name="李永亮"
     this.age="18",
     this.sex="女"
     this.istrue=true
     this.tips=[]
     let  Student=new Object()
     Student.tip="测"
     let  Student1=new Object()
     Student1.tip="测1"
     let  Student2=new Object()
     Student2.tip="测2"
     this.tips.push(Student)
     this.tips.push(Student1)
     this.tips.push(Student2)
   },
    //从子组件传过来的值
    soming(name){
     alert("从子组件传过来的值:   "+name)
    },
    login(){
      this.$axios.get('/api', {
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },

}
</script>

<style scoped>
 button{
   padding: 20px 40px;
   background-color: green;
   color: white;
   outline: none;
   border-radius: 5px;
   position: absolute;
   left: 0;
   bottom: 0;
   margin: 0px 10px;
 }
</style>
