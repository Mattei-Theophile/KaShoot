
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const name = ref('')
  const roomId = ref('')

  //TODO : add isAdmin logic
  const isAdmin = ref(true)

  const roomRules = [
    value => !!value || 'Required.',
    value => (value && value.length >= 6) || 'Min 6 characters',
  ]
  const nameRules = [
    value => !!value || 'Required.',
    value => (value && value.length >= 3) || 'Min 3 characters',
  ]

  return {
    name,
    roomId,
    roomRules,
    nameRules,
    isAdmin
  }
})
