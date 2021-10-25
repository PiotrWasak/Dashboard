<template>
  <div>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardMain',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
