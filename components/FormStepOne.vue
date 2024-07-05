<script setup lang="ts">
import { useFormDataStore } from '~/stores/formData';
const store = useFormDataStore();

const name = computed({
  get: () => store.name,
  set: (value) => store.setName(value),
});
</script>

<template>
  <div>
    <h1>Step One</h1>
    <input v-model="name" type="text" placeholder="Enter your name" />
  </div>
</template>
