<script setup>
import RecordService from '@/services/RecordService';
import { onMounted, ref } from 'vue';

const records = ref(null);
onMounted(async() => {
  try {
    const response = await RecordService.getRecords();
    records.value = response.data
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <div>
    <h1>table is here</h1>
    <table>
      <thead>
        <tr>
          <th>record id</th>
          <th>status</th>
          <th>date</th>
          <th>organisation</th>
          <th>stream</th>
          <th>pid</th>
        </tr>
      </thead>
      
      <tbody>
      <tr v-for="(record, index) in records" :key="index">
        <td>{{ record.recordId }}</td>
        <td>{{ record.status }}</td>
        <td>{{ record.date }}</td>
        <td>{{ record.organisation }}</td>
        <td>{{ record.fStream }}</td>
        <td>{{ record.pid }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
