<template>
  <div>
    <h1>table is here</h1>
    <Filters @filtered-data="handleFilterData"/><br />

    <table>
      <thead>
        <tr>
          <th v-for="(key, index) in recordsKeys" :key="index" @click="sort(key)">

            <div class="flex">
              {{ key }}
              <div class="icon-flex">
                <span :class="{
                  visible: sortDirection === 'asc' && sortColumn === key,
                  hidden: sortDirection === 'desc' && sortColumn === key
                }">
                  &#9650
                </span>
                <span :class="{
                  visible: sortDirection === 'desc' && sortColumn === key,
                  hidden: sortDirection === 'asc' && sortColumn === key
                }">
                  &#9660
                </span>
              </div>
            </div>

          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(record, index) in sortedData" :key="index">
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

<script setup>
import RecordService from '@/services/RecordService';
import { onMounted, ref, computed} from 'vue';
import Filters from './Filter/Filters.vue';

const records = ref(null);
const recordsKeys = ref(null);

// create ref for sorting 
const sortColumn = ref(null); // current column to sort by
const sortDirection = ref('asc');

function sort(key) {
  if (sortColumn.value === key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    console.log(`${sortColumn.value} column is getting sored in ${sortDirection.value}`)
  } else {
    // sort by a new column in ascending order 
    sortColumn.value = key;
    sortDirection.value = 'asc';
    console.log(`${sortColumn.value} column is getting sored in ${sortDirection.value}`)
  }
}
onMounted(async () => {
  try {
    const response = await RecordService.getRecords();
    records.value = response.data;
    recordsKeys.value = Object.keys(response.data[0]);
    console.log(recordsKeys.value)
  } catch (error) {
    console.log(error)
  }
})

function handleFilterData(filteredData) {
  // bind records obj with filtered data
  records.value = filteredData;
}

// computed property for sorted data 
const sortedData = computed(() => {
  if (!sortColumn.value) {
    console.log(`sortedData ${sortedData.value}`)
    return records.value;
  }
  return [...records.value].sort((a, b) => {
    const valueA = a[sortColumn.value];
    const valueB = b[sortColumn.value]
    console.log(`valueA ${valueA} typeof valueA is ${typeof(valueA)} valueB ${valueB}`)
    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return sortDirection.value === 'asc' ? valueA - valueB : valueB - valueA
    }


  })
})

</script>


<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.flex {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.icon-flex {
  display: flex;
  flex-direction: column;
}
td,
tr {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
th {
  border-right: 1px solid #ddd;
}
tr:nth-child(even) {
  background-color: #ddd;
}


.hidden {
  opacity: 0;
}

.visible {
  opacity: 1;
}
</style>
