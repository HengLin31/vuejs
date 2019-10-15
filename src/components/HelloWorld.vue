<template>
  <div class="hello">
    <ul>
      <li v-for="item in items" :key="item">{{item}}</li>
    </ul>
    <pre>{{content}}</pre>
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
    this.axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=rdec-key-123-45678-011121314').then(body => {
      body.data.records.location.forEach(element => {
        this.items.push(element.locationName)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
