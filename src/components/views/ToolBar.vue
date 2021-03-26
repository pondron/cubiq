<template>
    <div class="content has-text-centered has-text-white">
        <div>
            <input class="slider is-success" step="1" min="0" max="100" v-model="slidyo" type="range">
        </div>
        <div class="buttons">
         <button @click="launch">Launch</button>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
        slidy: 45,
    }
  },
  components: {
  },
  computed: {
    slidyo: {
        get() {
            return this.slidy
        },
        set(value) {
            console.log("dis me")
            this.slidy = value
        },
    },
    ...mapState(['cubiq'])
  },

  created() {
  },
  methods: {
    launch() {
        console.log('Hi im SLidy ', this.slidy)
        this.$store.commit('cubiq/setRotation', this.slidy)
    }
  }
}
</script>