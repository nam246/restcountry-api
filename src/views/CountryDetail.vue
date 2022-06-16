<template>
    <div class="country-detail">
        <div class="country-detail-wrap" v-for="(c, index) in country" :key="index">
            <div class="detail-img">
                <img :src="c.flags?.png" class="detail-flag">
                <img :src="c.coatOfArms.svg" class="detail-coa">
            </div>
            <div class="detail-info">
                <h2 class="detail-info-name">{{ c.name.common }}</h2>
                <div class="info">
                    <div><strong>Native Name: </strong>{{ c.name.official }}</div>
                    <div><strong>Population: </strong>{{ c.population.toLocaleString("en-US") }}</div>
                    <div><strong>Region: </strong>{{ c.region }}</div>
                    <div><strong>Sub Region: </strong>{{ c.subregion }}</div>
                    <div><strong>Capital: </strong>{{ c.capital.toString() }}</div>
                    <div><strong>Curencies: </strong>{{ c.currencies?.CUP?.name }}</div>
                    <div><strong>Languages: </strong>{{ c.languages }}</div>
                </div>
                <div>Border country</div>
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
        align-items: center;
        width: 100%;

        .detail-img {
            flex: 1;

            .detail-coa {
                width: 50%;
            }
        }

        .detail-info {
            flex: 1;
            margin: 2rem 0 0 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 50%;

            .detail-info-name {
                margin-bottom: 2rem;
            }

            .info {
                width: 100%;
                max-height: 30vh;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                gap: 5px;
                white-space: pre-wrap;
            }
        }
    }
}
</style>