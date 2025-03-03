<template>
    <div class="header">
        <nav>
            <RouterLink :to="{ name: 'home'}">Home | </RouterLink>
            <RouterLink :to="{ name: 'about'}">About </RouterLink>
        </nav>
        <p>this header has been mounted {{ mountedCount }} time</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const mountedCount = ref(0);
onMounted(() => {
    mountedCount.value++;
    console.log(`header component has been mounted ${mountedCount.value} time`)
})
</script>

<style scoped>

</style>