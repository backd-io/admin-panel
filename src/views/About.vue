<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ user }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'About',
  data() {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {}
}
</script>
