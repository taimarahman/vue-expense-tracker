<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  initialvalue: {
    type: Number,
    required: true
  }
})

const emits = defineEmits(['update:value'])


const count = ref(props.initialvalue)

const increase = () => {
  emits('update:value', count.value + 1)
  return count.value++
}

const decrease = () => {
  if(count.value > 0){
    emits('update:value', count.value - 1)
    return count.value--
  }
}

const formattedHr = computed(() => {
  return count.value < 10 ? '0' + count.value : count.value
})

const updateTimeValue = (value) => {
  count.value = value
  emits('update:value', count.value)
}

defineExpose({
  updateTimeValue
});
</script>

<template>
  <div class="relative w-full leading-tight">
    <input
      type="number"
      class="w-full bg-transparent rounded-full text-sm font-semibold p-0 text-center leading-tight appearance-none outline-none border-0 focus:outline-none focus:ring-0 peer dark:text-white"
      v-model="formattedHr"
    />
    <span
      class="absolute inset-y-0 right-0 flex flex-col justify-center pr-1 invisible peer-focus:visible hover:visible"
    >
      <svg
        class="h-6 w-6 text-coal-900 dark:text-white cursor-pointer"
        @click="increase"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
      <svg
        class="h-6 w-6 text-coal-900 dark:text-white cursor-pointer"
        @click="decrease"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  </div>
</template>

<style scoped>
/* Hide default arrows in input[type="number"] */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
