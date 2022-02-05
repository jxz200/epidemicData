<template>
  <div>
    <div>现在的值为{{ number }}</div>
    <button @click="subNumber">-1</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({ number: "getNumber" }),
  },
  methods: {
    ...mapMutations(["subNumber"]),
  },
};
</script>

<style></style>
