<template>
  <h1>{{this.globalVar.name}} {{name}} - {{$store.getters.watchCounter}}</h1>
  <a-button type="primary" @click="$store.dispatch('increment')">Primary Button</a-button>

  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>

</template>

<script>
import {SearchOutlined} from '@ant-design/icons-vue'
export default {
  name: 'HelloWorld',
  components: {
    SearchOutlined
  },
  data: function() {
    return {
      name: 'HelloWorld',
    }
  },
}
</script>

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
