<template>
    <div>
        <label :for="id">{{ label }}:
        </label>
        <input 
            :type="type"
            :id="id"
            :placeholder="placeholder"
            @input="emit('update:value', $event.target.value)"/>

    </div>
</template>

<script setup>

const props = defineProps( {
    id: {
        type: String,
        required: true,
    },
    label: {
        type:String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    placeholder: {
        type: String, 
        default: ' ',
    },
})

const emit = defineEmits(['update:value'])

</script>

<style scoped>

</style>