<template>
  <h1>Home</h1>
  <h2>{{ $store.state.counter }}</h2>
  <HelloWorld />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomePage',
  components: {
    HelloWorld,
  }
}
</script>