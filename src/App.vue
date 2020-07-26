<template>
  <div id="app">
    <main>
      <px-header></px-header>
      <px-assets-table />
    </main>
  </div>
</template>

<script>
  import pxHeader from '@/components/PxHeader';
  import pxAssetsTable from '@/components/PxAssetsTable'
  export default {
    name: 'App',
    components: {
      pxHeader, pxAssetsTable
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
