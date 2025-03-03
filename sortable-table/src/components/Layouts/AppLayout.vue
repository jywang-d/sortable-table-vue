<template>
    <div>
        <Header></Header>
            <main>
                <slot></slot>
            </main>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
</script>

<style scoped>

</style>