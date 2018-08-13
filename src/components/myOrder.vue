<template>
	<!-- 未完成：状态，请求 -->
  <div class="my-order">
	<div class="absolute">
		<header>
			<div class="text-center">我的订单</div>
		</header>
		<ul class="list-title">
			<li v-for="(title, index) in titles" :class="{active: title.active}" @click="change(index)" :key="index">{{title.label}}</li>
		</ul>
	</div>
	<div class="order-list-box">
		<mt-loadmore :top-method="loadTop" topPullText="">
				<ul class="order-list">
					<li v-for="(list, index) in listDatas" :key="index">
						<!--  -->
						<span v-if="list.length">{{index | dateFrm}}</span>
						<ul>
							<li v-for="(item, index) in list" :key="index">
								<div class="order-pice" v-if="(item.billType === '02' && (titles.ticket.active || titles.all.active))">
									<!-- 机票 -->
									<v-ticket v-bind:ticketData="item"></v-ticket>
								</div>
								<div class="order-pice" v-if="(item.billType === '03' && (titles.hotel.active || titles.all.active))">
									<!-- 酒店 -->
									<v-hotel v-bind:hotelData="item"> </v-hotel>
								</div>
								<div class="order-pice" v-if="(item.billType === '04' && (titles.car.active || titles.all.active))">
									<!-- 用车 -->
									<v-car v-bind:carData="item"> </v-car>
								</div>
							</li>
						</ul>
					</li>
				</ul>
				<div class="list-bottom text-center">- 到底了 -</div>
			</mt-loadmore>
	</div>
    
  </div>
</template>


<script>
import listDatas from '../assets/data'
import car from '../components/car'
import ticket from '../components/ticket'
import hotel from '../components/hotel'
import { Loadmore } from 'mint-ui'
import moment from 'moment'

export default {
  name: 'my-order',
  data () {
    return {
    	titles: {
    		all: {label: '全部', active: true, data: []},
			ticket: {label: '机票', active: false, data: []},
			hotel: {label: '酒店', active: false, data: []},
    		car: {label: '友车', active: false, data: []}
    	},
    	listDatas: [],
    	isShowTimeType: true
    }
  },
  components: {
  	'v-car': car,
  	'v-ticket': ticket,
  	'v-hotel': hotel,
  	'mt-loadmore': Loadmore
  },
  mounted() {
	  this.listDatas = listDatas.data.monthBills;
  },
  methods: {
  	change(index) {
  		let i;
  		for(i in this.titles) {
  			this.titles[i].active = false;
  		}
		this.titles[index].active = true;
		
		let billTypeMap = {
			all: '00',
			ticket: '02',
			hotel: '03',
			car: '04'
        }
        this.listDatas = this.formatData(listDatas.data.monthBills, billTypeMap[index]);
  	},
  	loadTop() {
		  // this.listDatas = listDatas.data.monthBills;
		// this.$refs.Loadmore.onTopLoaded();
	},
	formatData(data, key) {
		if(key === '00') return data;
		let i;
        let resultMap = {};
		for(i in data) {
			resultMap[i] = (data[i] || []).filter((item, index)=>{
				return item.billType === key;
			})
		}
		return resultMap;
	} 
  },
  filters: {
  	dateFrm (el) {
  		let date = new Date(el);
  		return moment(date).format("YYYY.MM")
  	}
  }
}
</script>

<style>
.my-order {
  position: relative;
}
.absolute {
  width: 100%;
  position: absolute;
}
#app,
.my-order,
absolute {
  height: inherit;
  width: inherit;
}
.order-list-box {
  /* padding-top: 83px; */
  position: absolute;
  top: 83px;
  bottom: 0px;
  width: 100%;
  overflow-y: scroll;
  background: rgb(245, 247, 250);
}
.mint-loadmore-top {
  padding-left: 10px;
}
.my-order header {
  position: relative;
  /* font-weight: bold; */
  font-size: 18px;
  color: #333;
  line-height: 30px;
  margin-bottom: 10px;
}
.order-list {
  /* height: 700px; */
  height: 100%;
  overflow: auto;
  padding: 10px;
  /* margin-bottom: 10px; */
}
.order-list > li {
  margin-bottom: 10px;
}

.list-title {
  text-align: center;
  padding: 0 20px;
  display: flex;
}
.list-title li {
  display: block;
  flex: 1;
  -webkit-box-flex: 1;
  padding: 10px 10px;
}
.list-title li.active,
.list-title li.active:hover,
.list-title li:hover {
  border-bottom: 3px solid rgb(88, 72, 255);
}
.order-pice {
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  margin-top: 10px;
}
.list-bottom {
  margin-bottom: 10px;
}
/* biz common */
.order-pice-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
/* end of biz common */

/* icon css */
.icon {
  width: 20px;
  height: 20px;
  background-size: cover;
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
}

.icon-car {
  background-image: url("../assets/images/taxi.png");
}
.icon-car.gray {
  background-image: url("../assets/images/taxi_gray.png");
}

.icon-ticket {
  background-image: url("../assets/images/air.png");
}
.gray .icon-ticket {
  background-image: url("../assets/images/air_gray.png");
}

.icon-hotel {
  background-image: url("../assets/images/hotel.png");
}
.icon-hotel.gray {
  background-image: url("../assets/images/hotel_gray.png");
}

.icon-time {
  width: 10px;
  height: 10px;
  background-image: url("../assets/images/time.png");
  margin: -4px 6px 0 6px;
}

.icon-one-way {
  width: 20px;
  height: 4px;
  margin-top: -4px;
  background-image: url("../assets/images/icon_one-way.png");
}
.icon-out {
  background-image: url("../assets/images/out.png");
}
.icon-in {
  background-image: url("../assets/images/in.png");
}
.gray .icon-out {
  background-image: url("../assets/images/out_gray.png");
}
.gray .icon-in {
  background-image: url("../assets/images/in_gray.png");
}
/* end of icon css */

/* reset css */
li,
ol,
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
body {
  color: #999;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}
.a {
  text-decoration: none;
}
/* end of reset css */

/* common css */
.text-center {
  text-align: center;
}
.clearfix:before {
  display: table;
  content: "";
}
.pull-right {
  float: right;
}
.text-right {
  text-align: right;
}
.in {
  visibility: visible !important;
}
.color-red {
  color: rgb(226, 71, 60);
}
.ck-btn {
  border: none;
  box-shadow: 1px 1px 1px 0px #333;
  color: #fff;
  background: rgb(73, 104, 246);
  padding: 4px 15px;
  border-radius: 3px;
  outline: none;
}
</style>
