<!-- src/components/CalendarWithHolidays.vue -->
<template>
  <div>
    <h2>Holidays in {{ country }}</h2>
    <el-calendar v-model="selectedDate" @change="handleDateChange"></el-calendar>
    <div v-if="selectedHoliday" class="holiday-info">
      <h3>{{ selectedHoliday.name }}</h3>
      <p>{{ selectedHoliday.date }}</p>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import Holidays from 'date-holidays';

export default {
  name: 'CalendarWithHolidays',
  props: {
    country: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      holidays: [],
      selectedDate: null,
      selectedHoliday: null,
    };
  },
  methods: {
    loadHolidays() {
      const hd = new Holidays(this.country);
      const year = new Date().getFullYear();
      const holidayList = hd.getHolidays(year);
      this.holidays = holidayList.map(holiday => ({
        name: holiday.name,
        date: format(new Date(holiday.date), 'yyyy-MM-dd'),
      }));
    },
    handleDateChange(newDate) {
      this.selectedDate = format(new Date(newDate), 'yyyy-MM-dd');
      this.selectedHoliday = this.holidays.find(
          holiday => holiday.date === this.selectedDate
      );
    },
  },
  watch: {
    country() {
      this.loadHolidays();
    },
  },
  created() {
    this.loadHolidays();
  },
};
</script>

<style scoped>
.holiday-info {
  margin-top: 20px;
}
</style>
