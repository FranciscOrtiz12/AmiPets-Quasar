<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import store from './store';

export default defineComponent({
  name: 'App',
  store
})
</script>
