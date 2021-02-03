<template>
  <v-dialog v-model="isOpen" max-width="500px">
    <v-card>
      <v-card-title> NPM NAME </v-card-title>
      <v-card-text>
        <v-select
          @change="getExtendedInfo"
          :items="versions"
          label="A Select List"
          item-value="text"
        ></v-select>
        <template v-if="extendedInfo.length > 0">
          <v-data-table
            :headers="headVersions"
            :items="extendedInfo"
            :items-per-page="itemsPerPage"
            class="elevation-5"
          ></v-data-table>
        </template>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="closeWindow"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "isOpen",
      "versions",
      "extendedInfo",
      "headVersions",
      "itemsPerPage",
    ]),
  },
  methods: {
    ...mapActions([
      "toggleModalWindow",
      "getInfoVersions",
      "deleteExtendedInfo",
    ]),
    closeWindow() {
      this.toggleModalWindow(false);
      this.deleteExtendedInfo();
    },
    getExtendedInfo(selectedVersion) {
      this.getInfoVersions(selectedVersion);
    },
  },
};
</script>