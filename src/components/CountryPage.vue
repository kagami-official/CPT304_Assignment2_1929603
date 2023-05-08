<!-- src/components/CountryPage.vue -->
<template>
  <div>
    <el-row>
      <el-button @click="goToMainPage">Back to Main Page</el-button>
    </el-row>
    <el-row>
      <el-col :span="12">
        <calendar-with-holidays :country="country"></calendar-with-holidays>
      </el-col>
      <el-col :span="12">
        <city-selector :country="country"></city-selector>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CalendarWithHolidays from './CalendarWithHolidays.vue';
import CitySelector from './CitySelector.vue';

export default {
  name: 'CountryPage',
  components: {
    CalendarWithHolidays,
    CitySelector,
  },
  props: {
    country: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToMainPage() {
      this.$router.push('/');
    },
  },
};
</script>
