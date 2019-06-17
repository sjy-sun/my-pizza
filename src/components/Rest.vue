<template>

    <div class="main">
        <div class="top">
            <h6>当前城市：北京市   切换中心</h6>
            <h6>餐厅关键字：<input type="text" v-model="search"> <span @click="getmap" >查询 </span> </h6>
            <hr>
            <div class="row">
                <div class="col-3 top_left">
                    <h6>查询结果：</h6>
                </div>
                <div class="col-9 top_right">
                    <h6>热门活动：</h6>
                    <transition name="fade">
                        <p :key="text.id">{{text.val}}</p>
                    </transition>
                </div>
            </div>
        </div>
        <div id="container1"></div>
         <div id="panel"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:['六一pizza大酬宾','端午节活动','走过路过不要错过','新品到啦'],
            number:0,
            search:'',
            placeSearch:''
        }
    },
    computed:{
        text(){
            return{
                id:this.number,
                val:this.active[this.number]
            }
        }
    },
    mounted(){
        this.search1()   
        this.run() 
    },
    methods:{
        search1(){
            var that =this

            var map = new AMap.Map('container1', {
                        zoom:11,//级别
                        center: [116.397428, 39.90923],//中心点坐标
                        viewMode:'3D'//使用3D视图
                    });
                    AMap.plugin([
                        'AMap.ControlBar',
                    ], function(){
                        // 添加 3D 罗盘控制
                        map.addControl(new AMap.ControlBar());
                    });
                    AMap.service(["AMap.PlaceSearch"], function() {
                    //构造地点查询类
                    that. placeSearch = new AMap.PlaceSearch({ 
                        pageSize: 5, // 单页显示结果条数
                        pageIndex: 1, // 页码
                        city: "010", // 兴趣点城市
                        citylimit: true,  //是否强制限制在设置的城市内搜索
                        map: map, // 展现结果的地图实例
                        panel: "panel", // 结果列表将在此容器中进行展示。
                        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
                    });
                    AMap.plugin([
                        'AMap.ToolBar',
                        'AMap.Scale',
                        'AMap.OverView',
                        'AMap.MapType',
                        'AMap.Geolocation',
                    ], function(){
        
                        // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
                        map.addControl(new AMap.MapType());
                    
                        // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
                        map.addControl(new AMap.Geolocation());
                    });
                    //关键字查询
                   that.placeSearch.search('');
                });  



            
        },
        getmap(){
           
        //关键字查询
        this.placeSearch.search(this.search);
    },
    run(){
        var time=setInterval(()=>{
            if(this.number==this.active.length-1){
                this.number=0
            }else{
                this.number+=1
            }
        },1500)
    }
}
}
</script>

<style scoped>
 #container1 {width:800px; height: 500px; position: absolute;right: 132px;top: 200px;}
 #panel {
            position: absolute;
            background-color: white;
            max-height: 80%;
            overflow-y: auto;
            top: 200px;
            left: 120px;
            width: 280px;
    }  
 .top{
     width: 100%;
     height: 100px;
     border: 1px solid rgb(190, 225, 235,0.2);
     border-radius:20px; 
     background: rgb(190, 225, 235,0.2)
 }
  .top h6{
      margin-left: 10px;
      margin-top: 15px;
      font-weight: bold;
  }
  .top input{
      border:1px solid coral;
      border-radius: 20px;
      height: 30px;
      text-align: center
  }
   .top span{
       display: inline-block;
       width: 60px;
       height: 30px;
        border:1px solid coral;
      border-radius: 10px;
      vertical-align: top;
      text-align: center;
      line-height: 30px;
   }
.main{
    width: 1100px;
    margin: 0 auto;
    color:olivedrab
}
.top_right{
    position: relative;
}
.top_right p{
    position: absolute;
    left: 100px;
    top: 13px;
}
   .fade-enter-active,.fade-leave-active{
           transition: all 0.5s linear; 
        }
        .fade-enter{
           opacity: 0;
           transform: translateY(20px) scale(1) 
        }
        .fade-leave-to{
           opacity: 0;
           transform: translateY(-20px) scale(0.7) 
        }
</style>