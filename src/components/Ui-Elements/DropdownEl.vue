<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: false
  },
  modelValue: {
    type: [String, Number],
    required: false
  },
  customStyle: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const localModelValue = ref(props.modelValue)

watch(localModelValue, (newValue) => {
  emit('update:modelValue', newValue)
})

watch(
  () => props.modelValue,
  (newValue) => {
    localModelValue.value = newValue
  }
)
</script>
<template>
  <div class="relative">
    <select
      v-model="localModelValue"
      :class="customStyle"
      class="min-w-44 !bg-none bg-bodyColor rounded-full text-sm py-4.5 px-4 appearance-none relative shadow-1"
    >
      <option v-if="placeholder" disabled selected>{{ placeholder }}</option>
      <slot name="all"></slot>
      <slot></slot>
    </select>
    <span class="absolute inset-y-0 left-36.5 flex items-center pr-3 pointer-events-none">
      <svg
        class="h-4 w-4 text-coal-900 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 9l-7 7-7-7"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        ></path>
      </svg>
    </span>
  </div>
</template>
