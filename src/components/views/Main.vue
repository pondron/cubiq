<template>
    <section class="hero has-bg-img">
        <div class="hero-head">
            <Header/>
        </div>
        <Cubiq/>
        <div>
          <ToolBar/>
        </div>
        <div class="hero-foot">
            <Footer/>
        </div>
    </section>  
</template>

<script>
import Header       from '@/components/Header.vue'
import Cubiq        from '@/components/views/Cubiq.vue'
import ToolBar       from '@/components/views/ToolBar.vue'
import Footer       from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Cubiq,
    ToolBar,
    Footer,
  }
}
</script>