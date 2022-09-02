<template>
  <div class="Hello">
    {{ msg }}

    <button @click="increment()">{{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      counter: 0,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    increment() {
      this.counter++;
    },
  },
};
</script>
<style scoped>
* {
  padding: 10px 20px;
}
</style>
