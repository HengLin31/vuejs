<template>
  <div class="hello">
    <pre>{{content}}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    this.axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=rdec-key-123-45678-011121314').then(body => {
      let result = []
      body.data.records.location.forEach(element => {
        result.push(element.locationName)
      })
      this.content = result.join(',')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
