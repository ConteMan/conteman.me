<template>
  <div>Hello World</div>
  <div>{{ one.content }}</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const one = ref({} as any)

const getOne = async() => {
  one.value = await fetch('/api', {
    method: 'get',
  }).then((res: any) => res.json())
}
getOne()
</script>