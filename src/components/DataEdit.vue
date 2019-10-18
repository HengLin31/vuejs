<template>
  <div>
    <p>
      <input type="text" v-model.trim="input">
      <a class="btn btn-primary" href="javascript:void(0)" @click="updateHandler">Update</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DataEdit',
  data () {
    return {
      input: ''
    }
  },
  computed: {
    content () {
      return this.$store.state.contents.find(item => {
        return item.id === this.$route.params.id
      })
    }
  },
  methods: {
    updateHandler () {
      this.$store.dispatch('contentUpdate', { id: this.content.id, input: this.input }).then(() => {
        this.$router.push({path: '/'})
      })
    }
  },
  mounted () {
    if (!this.content) {
      return this.$router.replace({path: '/'})
    }
    this.input = this.content.content
  }
}
</script>
