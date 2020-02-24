<template>
  <b-navbar shadow>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ name: 'Dashboard' }">
        Dashboard
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light"> {{ user.name }} ({{ user.email }}) </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  }
}
</script>
