<template>
  <div id="app">
    <NavBar />
    <SideBar @change-dash-view="changeDashView" />

    <dashboard-main>
      <div class="container-fluid">
<!--        <keep-alive>-->
<!--        <component :is="currentView"></component>&ndash;&gt;-->
<!--      </keep-alive>-->
        <router-view></router-view>
      </div>
    </dashboard-main>
  </div>
</template>

<script src="https://unpkg.com/feather-icons"></script>
<script>
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";
import Calc from "calc/src/App.vue";
import Todo from "todo/src/App.vue";
import CVGenerator from "cv-generator/src/App.vue";
import CurrencyConverter from "currencyconverter/src/App.vue";
import DashboardMain from "./components/DashboardMain.vue";

export default {
  name: "App",
  components: {
    SideBar,
    NavBar,
    Todo,
    Calc,
    DashboardMain,
    CurrencyConverter,
    CVGenerator,
  },
  data() {
    return {
      dashViews: ["Calc", "CurrencyConverter", "Todo"],
      currentView: "Todo",
    };
  },
  methods: {
    changeDashView: function (viewName) {
      this.currentView = viewName;
    },
  },
};
</script>

<style scoped>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
</style>
