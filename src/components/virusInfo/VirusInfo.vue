<template>
  <div>
    <h4>病毒信息</h4>
    <p>{{ virusInfo.note1 }}</p>
    <p>{{ virusInfo.note2 }}</p>
    <p>{{ virusInfo.note3 }}</p>
    <p>{{ virusInfo.remark1 }}</p>
    <p>{{ virusInfo.remark2 }}</p>
    <p>{{ virusInfo.remark3 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    virusInfo: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="scss">
div {
  margin-top: 0.1rem;
  padding: 0 0.1rem;
}

p {
  font-size: 0.12rem;
  margin-bottom: 0.1rem;

  text-align: justify;
}
</style>
