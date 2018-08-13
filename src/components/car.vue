<template>
  <div class="car">
		<!-- {{carData}} -->
  	<div class="bill clearfix">
  		<i class="icon icon-car"></i>
  		<span class="order-pice-title">友车·</span>
  		<span class="order-pice-title">{{carData.billStateCode}}</span>
  		<span class="pull-right order-pice-title">￥{{carData.billAmt}}</span>
			<!-- 01：待支付 -->
  		<div class="text-right" :class="{'color-red': carData.billStateCode == 'C02'}">{{carData.billState}}</div>
  	</div>
	<ul class="car-info">
		<li>
			<span class="icon icon-time"></span>
			{{JSON.parse(this.carData.billContent).bookTime | dateFrm}}
		</li>
		<li>
			<i class="circle green"></i>
			{{JSON.parse(this.carData.billContent).departurePlace}}</li>
		<li>
			<i class="circle yellow"></i>
			{{JSON.parse(this.carData.billContent).destination}}
			</li>
	</ul>

		<div class="text-right" v-if="carData.billStateCode == 'C02'">
			<button class="ck-btn">去支付</button>
		</div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'car',
  data () {
    return {
    }
  },
  props:['carData'],
  mounted () {

  },
  filters: {
  	dateFrm (el) {
  		var time = new Date(el);
  		return moment(time).locale('zh-cn').format("MMM Do (ddd) HH:mm")
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bill {
	width: 100%
}
.car-info {
	margin: 10px 0;
}
.car-info li{
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
.car-info > li:not(:first-of-type) > i.circle {
	display: inline-block;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	margin: 0 8px;
	vertical-align: middle
}
.circle.green {
	background: rgb(96,193,175)
}
.circle.yellow {
	background: rgb(241,154,101)
}
/* .car-info > li:not(:first-of-type) {
	list-style-type: disc;
	margin-left: 26px;
	list-style-type: rgb(96,193,175)
} */
</style>
