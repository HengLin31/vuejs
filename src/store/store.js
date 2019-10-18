import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const API = 'http://localhost:3000/contents'

const state = {
  contents: []
}

const actions = {
  contentsRead: context => {
    return Vue.axios.get(API).then(res => {
      context.commit('setContents', res.data)
    })
  },
  contentAdd: (context, { input }) => {
    return Vue.axios.post(API, { content: input }).then(res => {
      context.commit('addContent', res.data)
    })
  },
  contentDelete: (context, { target }) => {
    let index = context.state.contents.indexOf(target)
    if (index === -1) {
      return false
    }
    return Vue.axios.delete(API + '/' + target.id).then(res => {
      context.commit('deleteContent', index)
    })
  },
  contentUpdate: (context, { id, input }) => {
    let item = context.state.contents.find(item => {
      return item.id === id
    })
    if (!item) {
      return false
    }
    return Vue.axios.patch(API + '/' + item.id, { content: input }).then(res => {
      context.commit('updateContent', { item, input })
    })
  }
}

const mutations = {
  setContents (state, data) {
    state.contents = data
  },
  addContent (state, data) {
    state.contents.push(data)
  },
  deleteContent (state, data) {
    state.contents.splice(data, 1)
  },
  updateContent (state, {item, input}) {
    item.content = input
  }
}

export default new Vuex.Store({
  strict: true,
  state,
  actions,
  mutations
})
