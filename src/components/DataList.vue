<template>
  <div>
    <p>
      <input type="text" v-model.trim="input">
      <a class="btn btn-success" href="javasript:void();" @click="createHandler">Create</a>
    </p>
    <table class="table">
      <tr>
        <th>Data</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr v-for="(item, index) in contents" :key="item.id">
        <td>{{ item.content }}</td>
        <td><a class="btn btn-primary" href="javascript:void(0)" @click="updateHandler(index)">Update</a></td>
        <td><a class="btn btn-danger" href="javascript:void(0)" @click="deleteHandler(index)">Delete</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataList',
  data () {
    return {
      input: ''
    }
  },
  computed: {
    contents () {
      return this.$store.state.contents
    }
  },
  methods: {
    createHandler () {
      if (!this.input) {
        return false
      }
      this.$store.dispatch('contentAdd', { input: this.input }).then(() => {
        this.input = ''
      })
    },
    deleteHandler (index) {
      let target = this.contents[index]
      this.$store.dispatch('contentDelete', { target })
    },
    updateHandler (index) {
      let target = this.contents[index]
      this.$router.push({ name: 'update', params: { id: target.id } })
    }
  }
}
</script>
