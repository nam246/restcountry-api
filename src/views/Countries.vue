<template>
  <div class="countries">
    <form class="search-filter">
      <input type="search" 
          class="search-bar" 
          placeholder="Search country..."
          v-model.trim="search"
      >
      <select class="filter-bar" v-model="selected">
          <option disabled value="">Please select one</option>
          <!-- <option v-for="(r, index) in region" :key="index" :value="r">{{ r }}</option> -->
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="america">America</option>
          <option value="africa">Africa</option>
          <option value="pacific">Pacific</option>
      </select>
    </form>
    <div class="countries-wrap">
        <Country 
          :country="country"
          v-for="(country, index) in searchForCountry" :key="index"
        />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import Country from '../components/Country.vue'

const search = ref('')
const selected = ref('')
const countries = ref([])


onMounted(() => {
  fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        countries.value = data
    })
})

const searchForCountry = computed(() => {
  return countries.value.filter(country => {
    if(search.value != '') {
      return country.name.common.toLowerCase().match(search.value.toLowerCase())
    }
    if(selected.value) {
      return country.region.toLowerCase().match(selected.value.toLowerCase())
    }
    return countries
  })
})

</script>

<style lang="scss" scoped>
.countries {
  min-height: 100vh;
  padding: 1rem 3rem;

  .search-filter {
    display: flex;
    justify-content: space-between;

    .search-bar,
    .filter-bar {
      outline: none;
      border: none;
      border-radius: 4px;
      padding: 1rem;
    }

    .search-bar {
      width: 24rem;
    }
  }

  .countries-wrap {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    gap: 2.055rem;
    padding-top: 1rem;
    min-width: 100%;
  }
}
</style>