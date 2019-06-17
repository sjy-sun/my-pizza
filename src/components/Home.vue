<template>
    <div>
    <div class="container">
      <div class="swiper1-container">
       <!-- 2.中二层 wrapper层  -->
       <div class="swiper-wrapper">
           <!--3.最内层 slide层  -->
           <div class="swiper-slide">
               <img src="../assets/images/1.jpg" alt="">
           </div>
           <div class="swiper-slide">
               <img src="../assets/images/2.jpg" alt="">
           </div>
           <div class="swiper-slide">
               <img src="../assets/images/3.jpg" alt="">
           </div>
           <div class="swiper-slide">
                <img src="../assets/images/4.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/5.jpg" alt="">
            </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
       <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
       </div>
    </div> 
    <div class="diancan">
        <img src="../assets/images/6.jpg" alt="">
        <a href="http://localhost:8080/menu"><span>点餐</span></a>
    </div>
<div class="container">
    <div class="set2">
        <div class="row">
        <div class="col-6 set2_set2left">
            <div class="swiper2-container">
       <!-- 2.中二层 wrapper层  -->
       <div class="swiper-wrapper">
           <!--3.最内层 slide层  -->
           <div class="swiper-slide">
               <img src="../assets/images/1.jpg" alt="">
           </div>
           <div class="swiper-slide">
               <img src="../assets/images/2.jpg" alt="">
           </div>
           <div class="swiper-slide">
               <img src="../assets/images/3.jpg" alt="">
           </div>
           <div class="swiper-slide">
                <img src="../assets/images/4.jpg" alt="">
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/5.jpg" alt="">
            </div>
       </div>
       <!-- 如果需要分页器 -->
       <div class="swiper-pagination"></div>
       <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
       </div>
        </div>
        </div>
        <div class="col-6 set2_set2right">
            <h1>2018年度媒体报道</h1>
            <ul>
                <li><a href="https://news.china.com/paihang/">保障骑手安心无忧送餐路 美团外卖首发《骑手生活安全指南》</a> </li>
                <li><a href="http://www.cb.com.cn/gdbb/2018_0814/1251484.html"> MINISO名创优品正式入驻美团闪购 时尚单品30分钟送达</a></li>
                <li><a href="https://tech.sina.com.cn/d/2018-06-28/doc-iheqpwqy1950144.shtml">专业食品安全检测团队进驻美团点评 从此舌尖安全有他们守护</a> </li>
                <li><a href="http://it.southcn.com/9/2018-08/07/content_182850528.htm">Trustdata发布2018上半年外卖份额数据 美团饿了么百度“631”格局三分天下</a> </li>
                <li><a href="https://www.sohu.com/a/241956906_100126234">美团上线闪购业务 以“快”破局助力零售升级</a> </li>
                <li><a href="https://tech.sina.com.cn/d/2018-06-28/doc-iheqpwqy1950144.shtml">美团城市新青年 外卖骑手正能量图鉴</a> </li>
            </ul>
        </div>
        
     </div>
    </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import "../assets/css/swiper.min.css"
    export default {
      name:'Home',
      mounted() {
       var swiper = new Swiper('.swiper1-container',{
        loop : true,
        autoplay:true,
        effect : 'cube',
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
         // 如果需要前进后退按钮
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }
      }) 
      var swiper = new Swiper('.swiper2-container',{
        loop : true,
        direction : 'vertical',
        autoplay:true,
        effect : 'cube',
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
         // 如果需要前进后退按钮
        // navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
        // }
      }) 
      }  
    }
</script>

<style scoped>
.container{
   max-width: 100%;
}
 .swiper1-container{
        width: 100%;
        height: 500px;
      }
.swiper1-container .swiper-slide img{width: 100%;height: 100%;}
.set2{
    width: 960px;
    margin: 50px auto;
    position: relative;
}
.set2_set2left{
    position: relative
}
 .swiper2-container{
    width: 400px;
    height:600px;
    background: orange;
    position: relative;
    left:40px;
    top:80px ;
 }

 .swiper2-container img{
    margin-top: 20px;
    width: 400px;
    height: 600px;
    position: absolute;
    left: -40px;
    top: -60px;
}
.set2_set2right{
   position: absolute;
   right: 0;
   top: 0;
}
.set2_set2right h1{
    margin: 30px 0 15px 40px;
}
.set2_set2right li{
    margin-top: 20px;
    transition: all 1s linear;
}
.set2_set2right li a{
    text-decoration: none;
    color: #333;
}
a:hover{
    font-size: 18px;
    font-weight: bold;
}
.diancan{
    position: absolute;
    top: 150px;
    left: 200px;
}
.diancan img{
    width: 250px;
    height: 250px;
}
.diancan span{
    display: inline-block;
    width: 70px;
    height: 30px;
    background:palegreen;
    text-align: center;
    border-radius: 5px;
    position: absolute;
    left: 85px;
    bottom: 20px;
    font-weight: bold;
}
</style>