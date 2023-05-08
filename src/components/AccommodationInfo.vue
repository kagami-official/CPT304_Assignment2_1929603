<!-- src/components/AccommodationInfo.vue -->
<template>
  <div>
    <h2>Accommodation Information</h2>
    <p>City: {{ city }}</p>
    <p>Available short-term rentals: 50</p>
  </div>
</template>

<script>
export default {
  name: 'AccommodationInfo',
  props: {

    city: {
      type: String,
      required: true,
    },
  },
};
</script>