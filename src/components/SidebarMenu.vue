<template>
  <div class="column is-3">
    <aside class="menu is-hidden-mobile">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><a class="is-active">Dashboard</a></li>
        <li><a>Customers</a></li>
        <li><a>Other</a></li>
      </ul>
      <context-menu />
    </aside>
  </div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu'

export default {
  components: {
    ContextMenu
  }
}
</script>
