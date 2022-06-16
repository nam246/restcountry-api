<script setup>
import Navbar from './components/Navbar.vue'
import { ref } from 'vue'

const mode = ref('Light Mode')
const isDarkMode = ref(true)

const toggleMode = () => {
  isDarkMode.value = !isDarkMode.value
  if(isDarkMode.value) {
    return mode.value = 'Light Mode'
  }
  if(!isDarkMode.value) {
    return mode.value = 'Dark Mode'
  }
}

</script>

<template>
  <div class="app" :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <Navbar 
      :mode="mode" 
      @toggle-mode="toggleMode"
    />
    <router-view />
  </div>  
</template>

<style lang="scss">
:root {
  --dark-mode-element: hsl(209, 23%, 22%);
  --dark-mode-background: hsl(207, 26%, 17%);
  --dark-mode-text: hsl(0, 0%, 100%);
  --light-mode-text: hsl(200, 15%, 8%);
  --light-mode-input: hsl(0, 0%, 52%);
  --light-mode-background: hsl(0, 0%, 98%);
  --light-mode-element: hsl(0, 0%, 100%);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.app {
  height: 100vh;
}

.dark-mode {
  nav {
    background-color: var(--dark-mode-element);

    .logo {
      color: var(--dark-mode-text);
    }

    .mode {
      color: var(--dark-mode-text);

      &:hover {
        color: rgb(148 163 184);
      }
    }
  }

  .countries {
    background-color: var(--dark-mode-background);

    .search-bar,
    .filter-bar {
      background-color: var(--dark-mode-element);
      color: var(--dark-mode-text);
    }

    .search-bar {
      &::placeholder {
        color: var(--dark-mode-text);
      }
    }

    .country {
      background-color: var(--dark-mode-element);

      .country-info {
        .country-name {
          color: var(--dark-mode-text);
        }
  
        .detail {
          color: var(--dark-mode-text);
        }
      }
    }
  }

  .country-detail {
    background-color: var(--dark-mode-background);

    .country-detail-wrap {
      .detail-info {
        color: var(--dark-mode-text);
      }
    }
  }
}

.light-mode {
  nav {
    background-color: var(--light-mode-element);

    .logo {
      color: var(--light-mode-text);
    }

    .mode {
      color: var(--light-mode-text);

      &:hover {
        color: rgb(148 163 184);
      }
    }
  }

  .countries {
    background-color: var(--light-mode-background);

    .search-bar,
    .filter-bar {
      background-color: var(--light-mode-element);
      color: var(--light-mode-text);
    }

    .search-bar {
      &::placeholder {
        color: var(--light-mode-text);
      }
    }

    .country {
      background-color: var(--light-mode-element);

      .country-info {
        .country-name {
          color: var(--light-mode-text);
        }
  
        .detail {
          color: var(--light-mode-text);
        }
      }
    }
  }

  .country-detail {
    background-color: var(--light-mode-background);

    .country-detail-wrap {
      .detail-info {
        color: var(--light-mode-text);
      }
    }
  }
}
</style>
