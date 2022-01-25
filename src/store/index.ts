export const useConterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0
    }
  },

  getters: {
    count1(state) {
      return state.count + 1
    }
  },

  actions: {
    increment() {
      this.count++
    }
  }
})
