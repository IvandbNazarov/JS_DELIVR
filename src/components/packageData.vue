<template>
  <div class="package">
    <template>
      <v-data-table
        :headers="headers"
        :items="allPackages"
        @click:row="openWindow"
        :items-per-page="itemsPerPage"
        class="elevation-9"
      ></v-data-table>
    </template>
    <app-modal ></app-modal>
  </div>
</template>

<script>
import modal from "./modal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    appModal: modal,
  },
  methods: {
    ...mapActions(["getPackages", "getVersions"]),
    openWindow(event) {
	  this.getVersions(event);
	  }
  },
  computed: {
    ...mapGetters(["allPackages", "headers", "itemsPerPage"]),
  },
  mounted() {
    this.getPackages();
  },
};
</script>

<style scoped>
li {
  text-align: left;
}
</style>