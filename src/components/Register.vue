<template>
    <div class="container mar">
        <img src="../assets/logo.png" alt="">
        <h1>注册</h1>
        <form>
        <input type="username" placeholder="请输入您的账号或邮箱" v-model="username">
        <input type="password" placeholder="请输入您的密码" v-model="password"><span></span>
        <input type="password" placeholder="请确认您的密码" v-model="sure">
        <button type="submit" class="btn btn-primary  mar" @click.prevent="onSubmit">立即注册</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:'Register',
        data(){
            return{
                username:'',
                password:'',
                sure:''
            }
        },
        methods:{
            onSubmit(){
                // var reg1=/^\w+$/
                var reg2=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
                var reg3 = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{6,32}$/
               
               
               
               
               
               if(this.username==''||!reg2.test(this.username)){
                    alert('用户名不能为空，用户名为邮箱或是字母、数字、下划线组成')
                }else if(this.password==''||!reg3.test( this.password ) ){
                    alert('密码不能为空,请输入6-32位英文、数字和符号的组合密码')
                }else if(this.sure==''){
                    alert('确认密码不能为空')

                }else if(this.password!==this.sure){
                    alert('密码不一致')
                }else{
                    axios.get('./sjy-user.json')
                    .then(res=>{
                       const result=[]
                    for(let key in res.data){
                        result.push(res.data[key])
                    } 
                    const trueUser=result.filter((item)=>{
                      return item.username==this.username
                    })
                    if(trueUser.length>0){
                        alert('当前用户已存在')
                    }else{
                        const formData={
                            username:this.username,
                            password:this.password
                        }
                   
                   
                          axios.post('./sjy-user.json',formData)
                    .then(res=>{
                        alert('注册成功')
                        this.$router.push('./login')
                    })
                   
                   
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