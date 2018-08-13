<template>
  <div class="ticket" :class="{'gray': ticketData.billStateCode == 'T03'}">
    <div class="ticket clearfix">
      <!-- {{ticketData}} -->
      <i class="icon icon-ticket"></i>
      <span class="order-pice-title">飞机</span>
      <!-- <span>{{ticketData.billStateCode}}</span> -->
      <span class="pull-right order-pice-title">￥{{ticketData.billAmt}}</span>
      <div class="text-right" :class="{'color-red': ticketData.billStateCode == 'T01'}">{{ticketData.billState}}</div>
    </div>
    <ul>
      <li v-for="(item, index) in airPlaneInfos" :key="index">
        <div class="ticket-city">
          <i class="icon icon-out" :class="{'icon-in': item.flightDirection === 'IN', 'in': airPlaneInfos[1]}"></i>
          <span>{{item.boardCityName}}</span>
          <span class="icon icon-one-way"></span>
          <span>{{item.offCityName}}</span>
        </div>
        <div class="ticket-info">
          <!-- {{airPlaneInfos}} -->
          <div v-if="(item.departureDate == item.departureTime)">
            <span>{{item.departureDate | dateFrm}}</span>
            <span>{{item.departureTime| timeFrm}}</span>
            <span>-</span>
            <span>{{item.arrivalTime | timeFrm}}</span>
          </div>

          <!-- 出发到达日不是同一天 -->
          <div v-if="!(item.departureDate == item.departureTime)">
            <span>{{item.departureDate | dateFrm}}</span>
            <span>{{item.departureTime | timeFrm}}</span>
            <span>-</span>
            <span>{{item.arrivalDate | dateFrm}}</span>
            <span>{{airPlaneInfos[0].arrivalTime | timeFrm}}</span>
          </div>


          <div>
            <span>{{airPlaneInfos[0].carrierShortName}}</span>
            <span>/</span>
            <span>{{airPlaneInfos[0].boardPointName}}{{airPlaneInfos[0].boardPointAT}}</span>
          </div>
          <div>
            <span>乘机人:</span>
            <span>{{JSON.parse(ticketData.billContent).passengers}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="ticketData.billStateCode == 'T01'">
      <button class="ck-btn">去支付</button>
    </div>
    <!-- <div>{{JSON.parse(this.ticketData.billContent).bookTime | dateFrm}}</div>
  	<div>{{JSON.parse(this.ticketData.billContent).departurePlace}}</div>
  	<div>{{JSON.parse(this.ticketData.billContent).destination}}</div> -->
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'ticket',
    data() {
      return {
        airPlaneInfos: []
      }
    },
    mounted() {
      this.airPlaneInfos = JSON.parse(this.ticketData.billContent).airBasicFlights
      //   var ss= JSON.parse(this.ticketData)
    },
    props: ['ticketData'],
    watch: {
      ticketData:function() {
        this.airPlaneInfos = JSON.parse(this.ticketData.billContent).airBasicFlights
      }
    },
    filters: {
      dateFrm(el) {
        let date = new Date(el);
        return moment(date).format("YYYY.MM.DD")
      },
      timeFrm(el) {
        if (!el) return;
        let temp = el.split(':').splice(0, 2).join(':');
        return temp
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bill {
    width: 100%
  }

  .ticket.gray, .gray .order-pice-title, .gray .ticket-city {
    color: #ccc !important;
  }
  .ticket-info {
    margin: 10px 0;
    padding-left: 24px;
  }

  .ticket-city {
    font-size: 16px;
    color: #666;
    margin-bottom: 15px;
  }

  .ticket-city .icon-out,
  .ticket-city .icon-in {
    visibility: hidden;
    margin-top: -2px;
    width: 15px;
    height: 15px;
  }

  .icon-out {
    background-image: url('../assets/images/out.png');
  }

  .icon-in {
    background-image: url('../assets/images/in.png');
  }

  .gray .icon-out {
    background-image: url('../assets/images/out_gray.png');
  }

  .gray .icon-in {
    background-image: url('../assets/images/in_gray.png');
  }

</style>
