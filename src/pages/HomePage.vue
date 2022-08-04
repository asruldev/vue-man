<template>
  <h1>Home</h1>
  <h2>{{ $store.state.counter }}</h2>
  <HelloWorld />
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HelloWorld,
  }
})
</script>