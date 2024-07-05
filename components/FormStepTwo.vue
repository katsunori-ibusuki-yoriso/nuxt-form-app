<script setup lang="ts">
import { computed } from 'vue'
import { useFormDataStore } from '~/stores/formData'
const store = useFormDataStore()
const email = computed({
  get: () => store.email,
  set: (value) => store.setEmail(value),
})
</script>

<template>
  <div>
    <h1>Step Two</h1>
    <input v-model="email" placeholder="Enter your email" />
  </div>
</template>
