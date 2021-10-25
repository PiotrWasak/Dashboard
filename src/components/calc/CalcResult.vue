<template >
  <div class="container-fluid">
    <div class="row">
      <input
        id="input"
        class="col-8 input form-group form-control  mx-auto"
        type="text"
        :placeholder="input"
        readonly
      >
      <input
        id="result"
        class="col-4 input form-group form-control mx-auto"
        type="text"
        :placeholder="result"
        readonly
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'CalcResult',
  data() {
    return {
      test: "15",
    }
  },
  props: {
    input: String,
    result: String,
  }
}
</script>
<style scoped>
</style>