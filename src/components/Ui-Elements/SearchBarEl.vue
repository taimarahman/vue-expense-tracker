<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    required: true
  },
  customClass: {
    type: String,
    default: ''
  },
  modelValue: {
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
    <input
      type="text"
      :placeholder="placeholder"
      class="custom-search"
      :class="customClass"
      v-model="localModelValue"
    />
    <span class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        class="fill-coal-800 dark:fill-white/50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9231 15.0849C14.1602 14.3329 13.3906 13.5877 12.6365 12.8274C12.1374 12.3244 11.661 11.8007 11.1697 11.2843C13.7192 8.39798 12.9507 4.43447 10.5105 2.42283C8.0975 0.432824 4.45955 0.425609 2.03373 2.7197C-0.256544 4.88443 -0.519405 8.39592 1.45102 10.9663C3.3773 13.4763 7.33048 14.368 10.4617 11.9698C10.7559 12.2857 11.0383 12.6094 11.3417 12.9114C12.2956 13.8603 13.2582 14.8004 14.2167 15.7462C14.3646 15.8926 14.5355 16.0214 14.7368 15.9379C14.8872 15.8701 15.0117 15.755 15.0915 15.6101C15.1937 15.4091 15.072 15.2313 14.9231 15.0849ZM6.43306 12.411C3.46201 12.4043 1.0937 10.0602 1.10653 7.13935C1.11988 4.24738 3.49846 1.92081 6.4387 1.92442C9.39024 1.92803 11.7781 4.27727 11.7781 7.17079C11.7781 10.0643 9.37792 12.4177 6.43306 12.411Z"
        />
      </svg>
    </span>
  </div>
</template>
