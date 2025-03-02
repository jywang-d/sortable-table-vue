<template>
    <div>
        <FilterInputs
            id="dateFromFilter"
            label="Date From"
            type="text"
            @update:value="updateFilter('dateFrom', $event)"
            />
            <br/>
        <FilterInputs
        id="organisationFilter"
        label="organisation"
        type="text"
        @update:value="updateFilter('organisation', $event)"
        />
        <br/>
        <button @click="applyFilter">Apply Filter</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import FilterInputs from './FilterInputs.vue';
import RecordService from '@/services/RecordService';

// filters obj for storing which filter is added and its value
const filters = ref({});
// bind filtered data to SortableTable 
const emit = defineEmits(['filtered-data']);

function updateFilter(key, value) {
    filters.value[key] = value;
}

function buildQueryString(filters) {
    const queryParams = [];

    if(filters.dateFrom) {
        queryParams.push(`date_lte=${filters.dateFrom}`)
    }

    if(filters.organisation) {
        queryParams.push(`organisation_like=${filters.organisation}`)
    }
    return queryParams.join('&')
}


/** function applyFilter called when Apply Filter button clicked */
async function applyFilter() {
    
    try {
       const queryString = buildQueryString(filters.value); 
       // send API call to filter db
       const response = await RecordService.getFilteredRecords(queryString);
       // bind filtered-data to SortableTable component
       emit('filtered-data', response.data);
    } catch (error) {
        console.log(error)
    }

}
</script>

<stylescoped>

</stylescoped>