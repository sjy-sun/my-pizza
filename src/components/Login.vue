<template>
    <div class="container mar">
        <img src="../assets/logo.png" alt="">
        <h1>登录</h1>
        <form>
        <input type="username" placeholder="请输入您的账号或邮箱" v-model="username">
        <input type="password" placeholder="请输入您的密码" v-model="password">
        <button type="submit" class="btn btn-primary  mar" @click.prevent="onSubmit">登录</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
      name:'Login',
        data(){
            return{
                username:'',
                password:'',
                sure:''
            }
        },  
        methods:{
            onSubmit(){
                if(this.username==''){
                    alert('用户名不能为空')
                }else if(this.password==''){
                    alert('密码不能为空')
                }else{
                    axios.get('./sjy-user.json').then(res=>{
                       const result=[]
                        for(let key in res.data){
                        result.push(res.data[key])
                        } 

                            const User = result.filter((item)=>{
                            return item.username===this.username && this.password===item.password 
                        })
                        if(User.length>0){
                            alert('登录成功')
                            this.$router.push('/')
                        }else{
                            alert('账号或密码错误')
                            this.username=''
                            this.password='' 
                        }   
                    })
                    
                }
            }
        }
    }

</script>

<style scoped>
.mar{
    margin: 0 auto;
    text-align: center;
}
img{
    width: 150px;
}
input{
    display: block;
    width: 400px;
    height: 45px;
    margin: 10px auto
}
button{
    width: 400px;
}
</style>