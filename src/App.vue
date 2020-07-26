<template>
  <div id="app">
    <main>
      <px-header></px-header>

      <!-- The router view component -->
      <router-view class="container px-5 sm:px-20 py-20 flex justify-center"/>

    </main>
  </div>
</template>

<script>
  import pxHeader from '@/components/PxHeader';
  export default {
    name: 'App',
    components: {
      pxHeader
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
