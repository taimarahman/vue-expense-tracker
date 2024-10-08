<script setup>
import { ref, watch } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'

const props = defineProps({
  style: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'mm/dd/yyyy'
  },
  modelValue: {
    type: String,
    default: null
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const selectedDate = ref(null) 

const convertToYYYYMMDD = (dateStr) => {
  const dateObj = new Date(dateStr)
  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  const day = String(dateObj.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const convertToMMDDYYYY = (dateStr) => {
  const dateObj = new Date(dateStr)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return Intl.DateTimeFormat('en-US', options).format(dateObj)
}

watch(
  () => props.modelValue,
  (newVal) => {
    selectedDate.value = newVal ? convertToMMDDYYYY(newVal) : null
  },
  { immediate: true }
)

watch(selectedDate, (newVal) => {
  if (newVal) {
    emit('update:modelValue', convertToYYYYMMDD(newVal))
  } else {
    emit('update:modelValue', null)
  }
})
</script>

<template>
  <div class="relative">

    <VueDatePicker
    v-model="selectedDate"
    auto-apply
    position="left"
    :enable-time-picker="false"
    :format="convertToMMDDYYYY"
    :clearable="false" 
    :disabled="isDisabled"
    class="input-date peer" 
    :class="style"
  >
    <template #input-icon>
      <svg
        width="20" 
        height="18"
        viewBox="0 0 20 18"
        class="fill-coal-900 dark:fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0571 0H15.2679V1.7772C15.2679 2.13264 14.9697 2.3696 14.6715 2.3696C14.3733 2.3696 14.0751 2.13264 14.0751 1.7772V0H4.53266V1.7772C4.53266 2.13264 4.23446 2.3696 3.93626 2.3696C3.63806 2.3696 3.33986 2.13264 3.33986 1.7772V0H1.55065C0.656043 0 0 0.77012 0 1.7772V3.90984H19.0849V1.7772C19.0849 0.77012 18.0114 0 17.0571 0ZM0 5.15388V15.9948C0 17.0611 0.656043 17.772 1.61029 17.772H17.1168C18.071 17.772 19.1445 17.0019 19.1445 15.9948V5.15388H0ZM5.30799 15.1062H3.87662C3.63806 15.1062 3.3995 14.9285 3.3995 14.6323V13.1513C3.3995 12.9143 3.57842 12.6774 3.87662 12.6774H5.36763C5.60619 12.6774 5.84475 12.8551 5.84475 13.1513V14.6323C5.78511 14.9285 5.60619 15.1062 5.30799 15.1062ZM5.30799 9.7746H3.87662C3.63806 9.7746 3.3995 9.59688 3.3995 9.30068V7.81968C3.3995 7.58272 3.57842 7.34576 3.87662 7.34576H5.36763C5.60619 7.34576 5.84475 7.52348 5.84475 7.81968V9.30068C5.78511 9.59688 5.60619 9.7746 5.30799 9.7746ZM10.0792 15.1062H8.5882C8.34964 15.1062 8.11108 14.9285 8.11108 14.6323V13.1513C8.11108 12.9143 8.29 12.6774 8.5882 12.6774H10.0792C10.3178 12.6774 10.5563 12.8551 10.5563 13.1513V14.6323C10.5563 14.9285 10.3774 15.1062 10.0792 15.1062ZM10.0792 9.7746H8.5882C8.34964 9.7746 8.11108 9.59688 8.11108 9.30068V7.81968C8.11108 7.58272 8.29 7.34576 8.5882 7.34576H10.0792C10.3178 7.34576 10.5563 7.52348 10.5563 7.81968V9.30068C10.5563 9.59688 10.3774 9.7746 10.0792 9.7746ZM14.8504 15.1062H13.3594C13.1209 15.1062 12.8823 14.9285 12.8823 14.6323V13.1513C12.8823 12.9143 13.0612 12.6774 13.3594 12.6774H14.8504C15.089 12.6774 15.3276 12.8551 15.3276 13.1513V14.6323C15.3276 14.9285 15.1486 15.1062 14.8504 15.1062ZM14.8504 9.7746H13.3594C13.1209 9.7746 12.8823 9.59688 12.8823 9.30068V7.81968C12.8823 7.58272 13.0612 7.34576 13.3594 7.34576H14.8504C15.089 7.34576 15.3276 7.52348 15.3276 7.81968V9.30068C15.3276 9.59688 15.1486 9.7746 14.8504 9.7746Z"
          />
      </svg>
    </template>

  </VueDatePicker>
  <label :class="selectedDate ? 'input-label-top' : 'input-label-transition'">{{ placeholder }}</label>
</div>
</template>