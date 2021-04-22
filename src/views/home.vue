<template>
  <div>----------------home:{{ count }}------------------</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { fetchConfig } from '@/api/common'

export default defineComponent({
  setup() {
    fetchConfig().then((res) => {
      console.log(res)
    })
    const count = ref(0)
    return { count }
  }
})
</script>

<style></style>
