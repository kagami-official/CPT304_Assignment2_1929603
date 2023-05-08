<!-- src/components/HomePage.vue -->
<template>
  <div>
    <h1>Select a Country</h1>
    <el-select v-model="selectedCountry" placeholder="Select a country" @change="goToCountryPage">
      <el-option
          v-for="country in countries"
          :key="country"
          :label="country"
          :value="country"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import Holidays from 'date-holidays';

export default {
  name: 'HomePage',
  data() {
    return {
      countries: [],
      selectedCountry: '',
    };
  },
  methods: {
    // Load the list of countries and store it in the component's data
    loadCountries() {
      const hd = new Holidays();
      const availableCountries = hd.getCountries();
      this.countries = Object.values(availableCountries);
    },
    // Navigate to the country page when a country is selected
    goToCountryPage() {
      this.$router.push({ name: 'CountryPage', params: { country: this.selectedCountry } });
    },
  },
  created() {
    this.loadCountries();
  },
};
</script>
