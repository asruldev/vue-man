<template>
  <div class="hello">
    <h1>{{ $store.state.counter }} - {{$store.getters.watchCounter}}</h1>
    
    <a-button type="primary" shape="circle" @click="$store.dispatch('increment')">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { SearchOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'HelloWorld',
  components: {
    SearchOutlined,
  },
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
