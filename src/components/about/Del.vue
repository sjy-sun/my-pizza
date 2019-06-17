<template>
    <div class="row"> 
      <div class="card ml-1" style="width: 13rem;" v-for="(product,index) in products" :key="index">
        <img class="card-img-top" :src="product.src" alt="Card image cap">
        <div class="card-body text-center" >
            <h5 class="card-title">{{product.text}}</h5>
            <p class="card-text text-success">{{product.msg}}</p>
            <span class="btn btn-primary">快递查询</span>
        </div>
        </div> 
    </div>
</template>

<script>
    export default {
       name:'His',
       data(){
         return{
           products:[
               {src:'../../../static/imgs/6.jpg',text:'榴莲多多披萨',msg:'您的快递已送至河北张家口'},
               {src:'../../../static/imgs/5.jpg',text:'北京潮鸭披萨',msg:'您的快递已送至山东青岛'},
               {src:'../../../static/imgs/4.jpg',text:'海鲜至尊披萨',msg:'您的快递已送至河南洛阳'}
           ]  
         }  
       },
       
    }
</script>

<style  scoped>

</style>