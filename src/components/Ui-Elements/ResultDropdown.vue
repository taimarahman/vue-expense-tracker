<script setup>
import { FwbProgress } from 'flowbite-vue'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

defineProps({
  testName: {
    type: String,
    default: ''
  },
  percentage: {
    type: String,
    default: ''
  }
})

const target = ref(null)
const dropdownOpen = ref(false)

onClickOutside(target, () => {
  dropdownOpen.value = false
})
</script>

<template>
  <div class="relative" ref="target">
    <button class="flex-center gap-x-3 w-full" @click.prevent="dropdownOpen = !dropdownOpen">
      <!-- dropdown icon -->
      <svg
        v-if="!dropdownOpen"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5.9375" cy="5.69141" r="5.5" class="fill-coal-600 dark:fill-lightGray" />
        <path
          d="M4.96418 3.36531C4.8954 3.3638 4.82785 3.38374 4.77094 3.42239C4.71402 3.46104 4.67056 3.51649 4.6466 3.58098C4.62263 3.64548 4.61936 3.71582 4.63723 3.78226C4.65511 3.8487 4.69323 3.90789 4.74632 3.95166L6.77176 5.68683L4.74632 7.42139C4.7096 7.44838 4.67884 7.48264 4.65598 7.52206C4.63313 7.56149 4.61865 7.60522 4.61347 7.6505C4.60829 7.69577 4.61252 7.74162 4.62588 7.78519C4.63925 7.82876 4.66146 7.86911 4.69114 7.9037C4.72081 7.93828 4.75731 7.96633 4.79834 7.98616C4.83938 8.00599 4.88406 8.01712 4.9296 8.01888C4.97514 8.02064 5.02055 8.013 5.06299 7.99639C5.10543 7.97979 5.14398 7.9546 5.17623 7.9224L7.49518 5.93831C7.5316 5.90723 7.56084 5.86866 7.58089 5.82519C7.60094 5.78171 7.61133 5.7344 7.61133 5.68652C7.61133 5.63865 7.60094 5.59133 7.58089 5.54786C7.56084 5.50439 7.5316 5.46578 7.49518 5.4347L5.17623 3.4487C5.11765 3.39666 5.04251 3.36716 4.96418 3.36531Z"
          class="fill-white dark:fill-coal-900"
        />
      </svg>

      <svg
        v-else
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="5.9375" cy="6.05859" r="5.5" class="fill-coal-600 dark:fill-lightGray" />
        <path
          d="M8.43742 4.91145C8.43893 4.84267 8.41899 4.77512 8.38034 4.7182C8.34169 4.66129 8.28624 4.61782 8.22175 4.59386C8.15726 4.5699 8.08691 4.56663 8.02047 4.5845C7.95404 4.60237 7.89484 4.6405 7.85108 4.69358L6.11591 6.71903L4.38135 4.69358C4.35436 4.65686 4.32009 4.62611 4.28067 4.60325C4.24125 4.58039 4.19751 4.56592 4.15224 4.56074C4.10696 4.55556 4.06111 4.55978 4.01754 4.57315C3.97398 4.58651 3.93362 4.60873 3.89904 4.6384C3.86445 4.66808 3.8364 4.70458 3.81657 4.74561C3.79675 4.78664 3.78561 4.83133 3.78385 4.87687C3.7821 4.9224 3.78974 4.96781 3.80634 5.01025C3.82295 5.05269 3.84814 5.09124 3.88033 5.1235L5.86442 7.44245C5.8955 7.47886 5.93407 7.50811 5.97755 7.52816C6.02102 7.54821 6.06834 7.55859 6.11621 7.55859C6.16409 7.55859 6.2114 7.54821 6.25488 7.52816C6.29835 7.50811 6.33696 7.47886 6.36804 7.44245L8.35404 5.1235C8.40607 5.06492 8.43558 4.98978 8.43742 4.91145Z"
          class="fill-white dark:fill-coal-900"
        />
      </svg>

      <!-- name -->
      <span class="hidden text-right lg:block">
        <span class="block text-base" v-html="testName"></span>
      </span>
      <span class="grow mx-4 border-b-2 border-dashed h-full"> </span>
      <span>
        {{ percentage }}
      </span>
    </button>

    <!-- Dropdown Start -->
    <div
      v-show="dropdownOpen"
      class="absolute left-0 mt-4 p-4 flex w-full flex-col gap-y-6 z-9999 rounded overflow-hidden shadow-1 bg-bodyColor text-sm font-medium"
    >
      <div class="flex-center gap-x-3 w-full" @click.prevent="dropdownOpen = !dropdownOpen">
        <div class="hidden text-right lg:block">
          <span class="flex gap-x-4"
            ><img src="@/assets/images/icon/icon-check-mark-sqr.svg" alt=">" />
            <p>Solving Syllogisms (Deductive Reasoning)</p>
          </span>
        </div>
        <span class="grow">
          <fwb-progress :progress="50" label-position="inside"  label-progress size="md" class="result-progress-bar" />
        </span>
      </div>
      <div class="flex-center gap-x-3 w-full" @click.prevent="dropdownOpen = !dropdownOpen">
        <div class="hidden text-right lg:block">
          <span class="flex gap-x-4"
            ><img src="@/assets/images/icon/icon-check-mark-sqr.svg" alt=">" />
            <p>Solving Syllogisms (Deductive Reasoning)</p>
          </span>
        </div>
        <span class="grow">
          <fwb-progress :progress="50" label-position="inside"  label-progress size="md" class="result-progress-bar" />
        </span>
      </div>
      <div class="flex-center gap-x-3 w-full" @click.prevent="dropdownOpen = !dropdownOpen">
        <div class="hidden text-right lg:block">
          <span class="flex gap-x-4"
            ><img src="@/assets/images/icon/icon-check-mark-sqr.svg" alt=">" />
            <p>Solving Syllogisms (Deductive Reasoning)</p>
          </span>
        </div>
        <span class="grow">
          <fwb-progress :progress="50" label-progress size="md" class="result-progress-bar" />
        </span>
      </div>
    </div>
    <!-- Dropdown End -->
  </div>
</template>
