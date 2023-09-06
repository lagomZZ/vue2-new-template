<template>
  <div>
    <div class="body d-flex">
      <div draggable="true"></div>
      <ul>
        <li draggable="true" :ref="'li' + index + 1" v-for="(item, index) in list" :key="index" @dragstart="dragstart(index)">
          {{ item }}
        </li>
      </ul>

      <div class="box center" @drop.prevent="drop" @dragover.prevent="dragover">
        <div class="delete" @click="deleteBox()">删除</div>
        <p v-show="content">{{ text }}</p>
      </div>
      <div class="box center echart" @drop.prevent="dropEchart" @dragover.prevent="dragover"></div>
    </div>
    <!-- <div draggable="true" @dragstart="dragEchart()">
      <div id="chart">
        11
        <test-chart></test-chart>
      </div>
    </div> -->

    <div class="draggable">
      <div id="card" draggable="true" @dragstart="dragCard()">
        <div class="box-container d-flex">
          <div class="box1"></div>
          <div class="box2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testChart from '../components/testChart'
export default {
  name: '',
  components: { testChart },
  data() {
    return {
      list: ['拖放内容1', '拖放内容2', '拖放内容3', '拖放内容4', '拖放内容5', '拖放内容6'],
      text: '',
      content: false,
      currentId: null,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    deleteBox() {
      this.content = false
    },
    // 拖动开始
    dragstart(index) {
      this.text = '您已成功拖放元素' + (index + 1)
    },
    //拖动图
    dragEchart() {
      this.currentId = 'chart'
    },
    //拖动图
    dragCard() {
      this.currentId = 'card'
    },
    // 进行放置
    drop(event) {
      this.content = true
      console.log('drop', event)
    },
    // 放置位置 - 阻止默认事件
    dragover(event) {
      event.preventDefault()
    },
    dropEchart(ev) {
      ev.target.appendChild(document.getElementById(this.currentId))
    },
  },
}
</script>
<style lang="scss" scoped>
.body {
  user-select: none; // 禁止选中文字
  margin: 20px;
  font-size: 16px;
  ul {
    li {
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 10px;
      padding: 5px 10px;
      line-height: 26px;
      background-color: rgb(221, 221, 221);
    }
  }
  .box {
    position: relative;
    margin-left: 100px;
    width: 500px;
    height: 500px;
    border: 1px solid #999;
    .delete {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
      padding: 5px 10px;
      background-color: rgba(243, 89, 84, 0.3);
      border-radius: 5px 0px 5px 5px;
    }
    .delete:hover {
      color: #fff;
      background-color: rgb(243, 89, 84);
    }
    p {
      font-size: 26px;
      font-weight: bold;
      animation: light 1s linear 1;
    }
  }
  @keyframes light {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
.chart {
}
.box1 {
  background: red;
  width: 30%;
  height: 30%;
  margin-right: 10%;
}
.box2 {
  background: red;
  width: 30%;
  height: 30%;
}
.box-container {
  border: 1px solid #999;
  width: 100%;
  height: 100%;
}
#card {
  width: 100%;
  height: 100%;
}
.draggable {
  width: 30%;
  height: 30vh;
}
</style>
