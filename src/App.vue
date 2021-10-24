<template>
  <div id="app">

    <NavBar />
    <SideBar />

  </div>
</template>

<script src="https://unpkg.com/feather-icons"></script>
<script>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    SideBar,
    NavBar
  }
}
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
