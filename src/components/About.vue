<template>
    <div class="container">
        <div class="row">
            <nav class="col-4">
                <router-link to="/act" class="act">热门活动</router-link>
                <router-link to="/cat" class="cat">联系我们</router-link>
                <router-link to="/his" class="his">历史订单</router-link>
                <router-link to="/del" class="del">快递信息</router-link>
            </nav>
            <div class="col-8">
                <router-view></router-view>
            </div>
       </div>
    </div>
</template>

<script>
    export default {
      name:'About'  
    }
</script>

<style scoped>
.act,.cat,.del,.his{
    display: block;
    height: 60px;
    border: 1px solid white;
    margin-top: 20px;
    text-align: center;
    line-height: 60px;
    border-radius: 3px;
}
.act{
    background: #c3e6cb;
}
.cat{
    background: #f5c6cb;
}
.his{
    background: #ffeeba;
}
.del{
    background: #bee5eb;
}
</style>
