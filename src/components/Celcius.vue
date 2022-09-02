<template>
  <div>
    <h5>{{ message }}</h5>
  </div>
</template>

<script>
export default {
  name: "FahrenheitCelsius",
  data() {
    return {
      message: "Fahrenheit to Celcius",
      fah: [23, 140, 212, 41],
    };
  },
  methods: {
    getCelcius(fah) {
      return fah.map((temp) => (temp - 32) * 5/9);
    },
  },
};
</script>
