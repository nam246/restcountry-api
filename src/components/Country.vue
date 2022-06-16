<template>
  <div class="country">
    <router-link :to="'/'+country.name.common">
        <img :src="country.flags.png" :alt="country.name.common">
        <div class="country-info">
            <h3 class="country-name">{{ country.name.common }}</h3>
            <div class="detail"><span>Population:</span> {{ country.population }}</div>
            <div class="detail"><span>Region:</span> {{ country.region }}</div>
            <div class="detail"><span>Capital:</span> {{ country.capital?.toString() }}</div>
        </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps(['country'])
</script>

<style lang="scss" scoped>
.country {
  border-radius: 5px;
  width: 14rem;
  min-height: 18rem;

  a {
    text-decoration: none;
    color: var(--white);
  }

  img {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    width: 100%;
    height: 9rem;
  }

  .country-info {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h3 {
      margin-bottom: 0.5rem;
    }

    .detail {
      color: var(--gray);

      span {
        color: var(--white);
        font-weight: 600;
      }
    }
  }

  &:hover {
    transition: 0.2s ease-out;
    transform: rotate(1deg);
  }
}
</style>