<template>
    <section class="hero has-bg-img">
        <div class="hero-head">
            <Header/>
        </div>
        <div class="hero">
            <p>we marketing yall</p>
        </div>    
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