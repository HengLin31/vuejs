<template>
  <div class="hello">
    <ul>
      <li v-for="item in items" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.axios.get('http://localhost:3000/contents').then(res => {
      this.items = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
