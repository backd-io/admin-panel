<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div
          class="column is-10-mobile is-offset-1-mobile 
          is-6-tablet is-offset-3-tablet 
          is-4-desktop is-offset-4-desktop"
        >
          <h3 class="title has-text-black">Login</h3>
          <hr class="login-hr" />
          <p class="subtitle has-text-black">Enter your details below to continue</p>
          <div class="box">
            <form class="has-text-left" @submit.prevent="onSubmit">
              <b-field label="Domain">
                <b-input v-model="domain" type="text" placeholder="domain" maxlength="100" />
              </b-field>
              <b-field label="Username/Email">
                <b-input v-model="username" type="text" placeholder="user@domain.com" maxlength="100" />
              </b-field>
              <b-field label="Password">
                <b-input v-model="password" type="password" placeholder="y**r p*ssw*rd" maxlength="64" />
              </b-field>
              <b-button size="is-large" type="is-primary" :expanded="true" native-type="submit">Login</b-button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      domain: '',
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created() {},
  methods: {
    ...mapActions(['loginAction']),
    async onSubmit() {
      try {
        const formData = {
          domain: this.domain,
          username: this.username,
          password: this.password
        }
        await this.loginAction(formData)
        this.$router.push({ name: 'Dashboard' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
