const state = () => (
    getDefaultState()
  )
  
  const getDefaultState = () => {
    return {
        ethAddr: 'asdfasdfasdf',
        ethErr: '',
        loggedIn: false,
    }
  }
  
  const getters = {
    all: state => state,
    ethAddr: state => state.ethAddr,
    loggedIn: state => state.loggedIn,
  }
  
  const mutations = {
    resetState(state) {
      Object.assign(state, getDefaultState())
    },
    setState(state, data) {
      state.ethAddr = data.ethAddr
      state.loggedIn = data.loggedIn
    }
  }
  
  const actions = {
    clear({ commit }) {
        commit('resetState')
    },
    connect({ state }) {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({ method: 'eth_requestAccounts'})
            .then(resp => {
                console.log(resp)
                state.ethAddr = '0xf107a9b3a91d0fe0e063e37e4dd3f6fd2dc3bdc6';
                state.loggedIn = true;
                console.log('MetaMask is installed!', resp[0]);
            })
        }
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
  
  