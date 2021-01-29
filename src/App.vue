<template>
  <div id="app" data-app>
    <app-search-value></app-search-value>
    <app-package-data></app-package-data>
    <div class="footer">
      <div class="info"></div>
      <div class="photo"></div>
    </div>
  </div>
</template>

<script>
import searchValue from "../src/components/searchValue.vue";
import packageData from "../src/components/packageData.vue";

export default {
  components: {
    appPackageData: packageData,
    appSearchValue: searchValue,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 60px auto;
  width: 400px;
}
</style>