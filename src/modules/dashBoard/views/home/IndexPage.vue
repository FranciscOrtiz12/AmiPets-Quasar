<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/Logo.png"
      style="max-width 400px; max-height: 200px"
    >

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { api } from 'boot/axios'


export default defineComponent({
  name: 'IndexPage'
})
</script>
