<script setup>
import { ref } from 'vue'

defineProps({
  label: {
    type: String,
    default: ''
  },
  modalValue: {
    type: Boolean,
    default: false
  }
})

const checkboxToggle = ref(false)
const emits = defineEmits(['update:modelValue'])

const changeCheckbox = (e) => {
  checkboxToggle.value = e.target.checked
  emits('update:modelValue', checkboxToggle.value)
}
</script>

<template>
  <div>
    <label class="flex cursor-pointer select-none items-center">
      <div class="relative">
        <input type="checkbox"  class="sr-only" @change="changeCheckbox" />
        <div
          :class="checkboxToggle && 'bg-primary'"
          class="box flex h-5 w-5 items-center justify-center rounded-full border border-primary"
        >
          <span class="h-2.5 w-2.5 rounded-full bg-white dark:bg-transparent"> </span>
        </div>
      </div>
      {{ label }}
    </label>
  </div>
</template>
