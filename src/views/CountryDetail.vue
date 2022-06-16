<template>
    <div class="country-detail">
        <div class="country-detail-wrap" v-for="(c, index) in country" :key="index">
            <img :src="c.flags?.png" class="detail-img">
            <div class="detail-info">
                <h3>{{ c.name.common }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['id'])
const country = ref({})

onMounted(() => {
    fetch(`https://restcountries.com/v3.1/name/${props.id}`)
        .then(res => res.json())
        .then(data => {
            country.value = data
        })
        .catch(err => {
            console.log(err);
        })
})

</script>

<style lang="scss" scoped>
.country-detail {
    min-height: 90vh;
    display: flex;
    align-items: center;
    padding: 1rem 3rem;

    .country-detail-wrap {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .detail-img {
            flex: 1;
        }

        .detail-info {
            flex: 1;
            margin: 2rem 0 0 2rem;
        }
    }
}
</style>