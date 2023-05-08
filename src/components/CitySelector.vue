<!-- src/components/CitySelector.vue -->
<template>
  <div>
    <h2>Select a City</h2>
    <el-select v-model="selectedCity" placeholder="Select a city">
      <el-option
          v-for="city in cities"
          :key="city"
          :label="city"
          :value="city"
      ></el-option>
    </el-select>
    <weather-info v-if="selectedCity" :city="selectedCity"></weather-info>
    <accommodation-info v-if="selectedCity" :city="selectedCity"></accommodation-info>
  </div>
</template>

<script>
import WeatherInfo from './WeatherInfo.vue';
import AccommodationInfo from './AccommodationInfo.vue';

export default {
  name: 'CitySelector',
  components: {
    WeatherInfo,
    AccommodationInfo,
  },
  props: {
    country: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cities: ['City 1', 'City 2', 'City 3'],
      selectedCity: '',
    };
  },
};
</script>
