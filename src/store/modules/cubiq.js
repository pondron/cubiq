const state = () => (
    getDefaultState()
  )
  
  const getDefaultState = () => {
    return {
        cubeRotation: 0.3,
        copyVideo: false,
    }
  }
  
  const getters = {
    all: state => state,
    cubeRotation: state => state.cubeRotation,
    copyVideo: state => state.copyVideo,
  }
  
  const mutations = {
    resetState(state) {
      Object.assign(state, getDefaultState())
    },
    setState(state, data) {
      state.cubeRotation = data.cubeRotation
      state.copyVideo = data.copyVideo
    },
    addRotationTime(state, time) {
        console.log("LOOOKKKK AT MEEE: ", time)
        state.cubeRotation += time;
    },
    flipCopyVideo(state) {
        state.copyVideo = !state.copyVideo
    }
  }
  
  const actions = {
    clear({ commit }) {
        commit('resetState')
    },
    flipCopyVideo({ state }) {
        state.copyVideo = !state.copyVideo
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }