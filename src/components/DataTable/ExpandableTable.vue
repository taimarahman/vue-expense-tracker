<script setup>
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow
} from 'flowbite-vue'
import { ref, computed } from 'vue'

const props = defineProps({
  header: {
    type: Array,
    default: () => []
  },
  tableData: {
    type: Array,
    default: () => []
  }
})

const expandedRows = ref(new Set())

const toggleRow = (id) => {
  if (expandedRows.value.has(id)) {
    expandedRows.value.delete(id)
  } else {
    expandedRows.value.add(id)
  }
}

const processedTableData = computed(() => {
  return props.tableData.flatMap(data => {
    const expandedData = expandedRows.value.has(data.testId) ? [{ ...data, expanded: true }] : []
    return [data, ...expandedData]
  })
})
</script>

<template>
  <fwb-table hoverable class="!preview-table" v-if="tableData.length > 0">
    <fwb-table-head>
      <fwb-table-head-cell v-for="th of header" :key="th.value">{{ th.text }}</fwb-table-head-cell>
      <fwb-table-head-cell></fwb-table-head-cell>
    </fwb-table-head>
    <fwb-table-body>
      <fwb-table-row v-for="(data, idx) of processedTableData" :key="idx">
        <template v-if="!data.expanded">
          <fwb-table-cell v-for="(th, idx) of header" :key="idx">{{ data[th.value] }}</fwb-table-cell>
          <fwb-table-cell @click="toggleRow(data.testId)" class="cursor-pointer">
            <span :class="expandedRows.has(data.testId) ? 'rotate-90' : ''">▶</span>
          </fwb-table-cell>
        </template>
        <template v-else>
          <fwb-table-cell colspan="100%">
            <slot name="rowDetails" :data="data"></slot>
          </fwb-table-cell>
        </template>
      </fwb-table-row>
    </fwb-table-body>
  </fwb-table>
</template>

<style scoped>
.rotate-90 {
  transform: rotate(90deg);
}
</style>
