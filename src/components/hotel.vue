<template>
  <div class="hotel">
		<!-- {{hotelData}} -->
    <div class="hotal-title">
			<span class="icon icon-hotel"></span>
    	<span class="order-pice-title">酒店</span>
  		<span class="pull-right order-pice-title">￥{{hotelData.billAmt}}</span>
  		<div class="text-right" :class="{'color-red': hotelData.billStateCode == 'H01'}">{{hotelData.billState}}</div>
    </div>
		<div class="hotel-info">
		
			<div class="name">
				<span>{{billcontent.cityName}}</span>
				<span>-</span>
				<span>{{billcontent.hotelName}}</span>
			</div>
			<div>
				<span>{{billcontent.inTime | dateFrm}}</span>
				<span>-</span>
				<span>{{billcontent.leaveTime | dateFrm}}</span>
				<span>{{billcontent.bookDays}}晚/{{billcontent.roomCount}}间</span>
			</div>
			<div>
				<span>出差人:</span>{{billcontent.checkInPerson}}
			</div>
		</div>

		<div v-if="hotelData.billStateCode == 'H01'">
			<button class="ck-btn">去支付</button>
		</div>
	</div>
</template>

<script>
import moment from "moment";

export default {
  name: "hotel",
  data() {
    return {
      billcontent: JSON.parse(this.hotelData.billContent)
    };
  },
  props: ["hotelData"],

  filters: {
    dateFrm(el) {
      let date = new Date(el);
      return moment(date).format("YYYY.MM.DD");
    },
    timeFrm(el) {
      if (!el) return;
      let temp = el
        .split(":")
        .splice(0, 2)
        .join(":");
      return temp;
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hotel-info {
  margin: 10px 0;
  padding-left: 24px;
}
.hotel-info .name {
  font-size: 16px;
  color: #666;
}
</style>
