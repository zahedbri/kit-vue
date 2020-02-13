<template>
  <div id="app">
    <Header />
    <div class="container-fluid" style="max-width: 1440px;">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
}
</script>
