<!-- src/components/WeatherInfo.vue -->
<template>
  <div>
    <h2>Weather Information</h2>
    <p>City: {{ city }}</p>
    <p>Temperature: 25°C</p>
    <p>Weather: Sunny</p>
  </div>
</template>

<script>
export default {
  name: 'WeatherInfo',
  props: {
    city: {
      type: String,
      required: true,
    },
  },
};
</script>
