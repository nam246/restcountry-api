<template>
  <nav>
    <router-link to="/" class="logo">Where is the world!</router-link>
    <div class="mode" @click="emit('toggle-mode')">{{ mode }}</div>
  </nav>
</template>

<script setup>
defineProps(['mode'])
const emit = defineEmits(['toggle-mode'])

</script>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;

    .logo {
        font-weight: 600;
        text-decoration: none;
        font-size: 18px;
    }

    .mode {
        padding: 0.5rem 0;
        cursor: pointer;
    }
}
</style>