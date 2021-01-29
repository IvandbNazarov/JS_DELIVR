<template>
  <div>
    <input
      v-on:change="onchangeFilter"
      v-model="searchValue"
      type="search"
      placeholder="Write npm"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      searchValue: null,
    };
  },
  methods: {
    ...mapActions(["filterValues"]),
    onchangeFilter: function (event) {
      if (this.searchValue) this.filterValues(this.searchValue);
    },
  },
};
</script>

 