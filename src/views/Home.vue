<template>
  <div>
    <pulse-loader :loading="isLoading" color="orangered" :size="35" margin="5px" />
    <px-assets-table v-if='!isLoading' v-bind:assets="assets"/>
  </div>
</template>

<script>
  import api from '../api'
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },
  data(){
    return {
      assets: [],
      isLoading: false,
    }
  },
  created() {
      this.isLoading = true;
      api.getAssets()
              .then(assets => this.assets = assets)
              .finally(() => this.isLoading = false);
  }
};
</script>