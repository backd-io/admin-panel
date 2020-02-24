<template>
  <div id="app">
    <navbar v-if="$route.meta.isPanel" />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
