<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item ">
        <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
            <router-link to="/cubiq" class="has-text-white">
                CUBIQ
            </router-link>
        </a>
      <div class="buttons is-hidden-desktop">
        <a v-if="user.loggedIn" class="button is-rounded is-size-7" v-on:click="connect">
            <strong>{{ user.ethAddr }}</strong>        
        </a>
        <a v-else class="button is-rounded is-info is-size-7" v-on:click="connect">
            <strong>Connect Wallet</strong>
        </a>
      </div>
    </div>

    <div class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item has-text-white">
          <router-link to="/market" class="has-text-white">
            market
          </router-link>
        </a>

        </div>

        <div class="navbar-end">
          <div class="navbar-item">
              <div class="buttons">
                <a v-if="user.loggedIn" class="button is-rounded is-size-7" v-on:click="connect">
                  <strong>{{ user.ethAddr }}</strong>
                </a>
                <a v-else class="button is-rounded is-info is-size-7" v-on:click="connect">
                  <strong>Connect Wallet</strong>
                </a>
              </div>
          </div>
        </div>
    </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  data () {
    return {
    }
  },
  created() {
  },
  computed: mapState(['user']),
  methods: {
    connect() {
      this.$store.dispatch('user/connect')
      .then(() => {
        console.log(this.$store.user.ethAddr)
      }).catch(err => {
        console.log('err: ', err)
      })
      // console.log(this.$store.state.user)
    }
  }
}
</script>