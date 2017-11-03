<template>
  <div class="box">
    <div>我的</div>
  </div>
</template>

<script>
import My from './my'

export default {
  components: {
      My
  },
  data () {
    return {
      msg: 'Hello World!',
      isLoading: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
