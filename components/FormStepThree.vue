<script setup lang="ts">
import { computed } from 'vue'
import { useFormDataStore } from '~/stores/formData'
const store = useFormDataStore()
const message = computed({
  get: () => store.message,
  set: (value) => store.setMessage(value),
})
</script>

<template>
  <div>
    <h2>Step Three</h2>
    <input v-model="message" type="text" placeholder="Enter your message" />
  </div>
</template>
