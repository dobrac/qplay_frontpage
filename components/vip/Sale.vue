<template>
  <span v-if="obj.sale">
    <s>{{ numberWithSpaces(obj.def) }}</s>
    <span style="color: red;">{{ numberWithSpaces(obj.sale) }}</span>
  </span>
  <span v-else>{{ numberWithSpaces(obj.def) }}</span>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true
    }
  },
  methods: {
    numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
  }
}
</script>
