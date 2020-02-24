<template>
  <div>
    <p class="menu-label">
      {{ title }}
    </p>
    <ul class="menu-list">
      <li v-for="(item, index) in routes" :key="index">
        <router-link :to="item.to">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      routes: []
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        console.log('to:', to)
        console.log('from:', from)
        if (to && to.name) {
          switch (to.name) {
            case 'Dashboard':
              this.title = 'Actions'
              this.routes = [
                {
                  title: 'HHOOOome!',
                  to: { name: 'Home' }
                }
              ]
              break

            default:
              break
          }
        }
      }
    }
  }
}
</script>
