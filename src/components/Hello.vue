<template>
  <div>
    <div class="hello">
      <h1 class="hello-title">{{ msg }}</h1>
      <h2 class="hello-content">{{ content }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloSection",
  props: { content: String },
  data() {
    return { msg: "Welcome!" };
  },
};
</script>
