<template>
  <v-dialog v-model="isOpen" persistent max-width="290">
    <v-card>
      <v-row align="center">
        <v-col cols="12">
          <v-select
            @change="getExtendedInfo"
            :items="versions"
            :menu-props="{ top: true, offsetY: true }"
            label="Label"
          ></v-select>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn color="green darken-1" text @click="closeWindow"> Agree </v-btn>
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
    ...mapGetters(["isOpen", "versions"]),
  },
  methods: {
    ...mapActions(["toggleModalWindow", "getInfoVersions"]),
    closeWindow() {
      console.log("click");
      this.toggleModalWindow(false);
    },
    getExtendedInfo(selectedVersion) {
      this.getInfoVersions(selectedVersion);
    },
  },
};
</script>