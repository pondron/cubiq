<template>
    <section class="hero has-bg-img">
        <div class="hero-head">
            <Header/>
        </div>
        <canvas id="glcanvas" width="640" height="480"></canvas>
        <div class="hero-foot">
            <Footer/>
        </div>
    </section>  
</template>

<script>
import Header       from '@/components/Header.vue'
import Footer       from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>