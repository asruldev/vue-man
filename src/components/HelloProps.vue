<template>
  <h2>{{name}}</h2>
</template>

<script>
  export default {
    name: 'HelloProps',
    props: {
      name: {
        type: String,
        required: true,
      },
    }
  }
</script>