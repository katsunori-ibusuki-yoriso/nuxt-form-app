import { defineStore } from 'pinia'
import type { FormData } from '~/types/formData'

export const useFormDataStore = defineStore('formData', {
  state: (): FormData => ({
    name: '',
    email: '',
    message: '',
  }),
  actions: {
    setName(name: string) {
      this.name = name
    },
    setEmail(email: string) {
      this.email = email
    },
    setMessage(message: string) {
      this.message = message
    },
  }
})
