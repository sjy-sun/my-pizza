<template>
     <div class="row"> 
      <div class="card ml-3" style="width: 14rem;" v-for="(product,index) in products" :key="index">
        <img class="card-img-top" :src="product.src" alt="Card image cap">
        <div class="card-body text-center" >
            <h6 class="card-title mt-1 text-primary">{{product.text}}</h6>
            <p class="card-text mb-2 text-muted">{{product.act}}</p>
            <span class="btn btn-primary">查看活动</span>
        </div>
        </div> 
    </div>
</template>

<script>
    export default {
       name:'Act' ,
       data(){
         return{
           products:[
               {src:'../../../static/imgs/1.jpg',text:'榴莲披萨大降价',act:'五一七天乐，越过越快乐'},
               {src:'../../../static/imgs/2.jpg',text:'吃北京潮鸭披萨，有机会赢的大奖',act:'只要你大胆尝试，下一个幸运儿就是你'},
               {src:'../../../static/imgs/3.jpg',text:'海鲜至尊披萨，美味不可阻挡',act:'走过路过不要错过'}
           ]  
         }  
       }
       
    }
</script>

<style  scoped>
.card{
    height: 395px;
}
.row{
    position: relative;
}
.btn{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;

}
</style>