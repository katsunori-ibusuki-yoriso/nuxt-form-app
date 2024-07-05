<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFormDataStore } from '~/stores/formData'
import FormStepOne from '~/components/FormStepOne.vue'
import FormStepTwo from '~/components/FormStepTwo.vue'
import FormStepThree from '~/components/FormStepThree.vue'
const currentStep = ref(0)
const store = useFormDataStore()

const steps = [
  FormStepOne,
  FormStepTwo,
  FormStepThree
]

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const submitForm = () => {
  console.log('Form submitted!', store)
}

const currentStepComponent = computed(() => steps[currentStep.value])
</script>

<template>
  <div>
    <component :is="currentStepComponent" />
    <div>
      <button @click="prevStep" :disabled="currentStep === 0">Previous</button>
      <button @click="nextStep" v-if="currentStep < steps.length - 1">Next</button>
      <button @click="submitForm" v-else>Submit</button>
    </div>
    <div>
      <pre>{{ store }}</pre>
    </div>
  </div>
</template>
