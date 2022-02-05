<template>
  <div>
    <div>现在的值为{{ number }}</div>
    <button @click="addNumber">+1</button>
    <button @click="asyncAdd">+1</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
console.log(123);
export default {
  computed: {
    ...mapGetters({ number: "getNumber" }),
  },
  methods: {
    ...mapMutations(["addNumber"]),
    ...mapActions(["asyncAdd"]),
  },
};
</script>

<style></style>
