<template>
  <div id="app">
    <NavBar />
    <SideBar />

    <dashboard-main>
      <div class="container-fluid">
        <Calc />
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
import DashboardMain from "./components/DashboardMain.vue";

export default {
  name: "App",
  components: {
    SideBar,
    NavBar,
    Todo,
    Calc,
    DashboardMain,
  },
  data() {
    return {
      dashViews: ["Calc", "CurrencyConverter", "TODO", "TicTacToe"],
    };
  },
};
</script>

<style>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}
</style>
