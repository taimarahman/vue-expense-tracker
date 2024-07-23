<script setup>
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow
} from 'flowbite-vue'
import { computed, useSlots } from 'vue'

const slots = useSlots()

defineProps({
  header: {
    type: Array,
    default: () => []
  },
  tableData: {
    type: Array,
    default: () => []
  },
  style: {
    type: String,
    default: ''
  }
})

const hasAdditionalHeader = computed(() => {
  return !!slots.additionalHeader
})

const hasAdditionalData = computed(() => {
  return !!slots.additionalData
})
</script>

<template>
  <fwb-table v-if="tableData.length > 0" :class="style" hoverable>
    <fwb-table-head>
      <fwb-table-head-cell v-for="th of header" :key="th.value">
        <span :class="'justify-'+ th.headerAlign " class="flex items-center gap-x-2">
          {{ th.text }}
          <svg
            v-if="th.sortable"
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect fill="white" height="15" rx="7.5" width="15" x="0.832031" y="0.683594" />
            <path
              d="M8.06268 5.56681L8.06056 10.1688L7.19363 9.30922C7.14395 9.25849 7.07573 9.22985 7.00448 9.22985C6.76937 9.23183 6.65393 9.51502 6.8215 9.67882L8.14045 10.9905C8.24357 11.0931 8.41101 11.0931 8.51413 10.9905L9.83307 9.67882C10.0914 9.43106 9.70689 9.05127 9.45888 9.30922L8.58835 10.1739L8.59046 5.56681C8.5931 5.41905 8.47225 5.29833 8.32348 5.29982C8.17691 5.30081 8.05982 5.42126 8.06268 5.56681Z"
              fill="#111111"
            />
          </svg>
        </span>
      </fwb-table-head-cell>
      <fwb-table-head-cell v-if="hasAdditionalHeader">
        <slot name="additionalHeader"></slot>
      </fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="(data, idx) of tableData" :key="idx">
        <!-- <fwb-table-cell v-for="(th, idx) of header" :key="idx"
          ><p v-html="data[th.value]"></p
        ></fwb-table-cell> -->
        <fwb-table-cell v-for="(th, colIndex) of header" :key="colIndex">
          <slot :data="data[th.value]" :name="`column-${th.value}`" :rowData="data">
            <p :class="'text-' + th.dataAlign" v-html="data[th.value]"></p>
          </slot>
        </fwb-table-cell>
        <fwb-table-head-cell v-if="hasAdditionalData">
          <slot :data="data" name="additionalData"></slot>
        </fwb-table-head-cell>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>
