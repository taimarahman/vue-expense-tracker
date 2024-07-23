<script setup>
import { FwbModal } from 'flowbite-vue'

const props = defineProps({
  isShowModal: {
    type: Boolean,
    default: false
  },
  showCancel: {
    type: Boolean,
    default: true
  },
  modalClass: {
    type: String,
    default: 'alert'
  }
})

const emit = defineEmits(['update:isShowModal'])

const closeModal = () => {
  emit('update:isShowModal', false)
}
</script>
<template>
  <!-- <fwb-button @click="showModal"> Open modal </fwb-button> -->

  <fwb-modal v-if="props.isShowModal" @close="closeModal" class="fwb-modal" :class="modalClass">
    <template #header> </template>
    <template #body>
      <div class="modal-body">
        <slot></slot>
      </div>
    </template>
    <template #footer>
      <div class="flex-center gap-x-4">
        <button @click="closeModal" class="btn-capsule-outline">Cancel</button>
        <slot name="footer-btn"></slot>
      </div>
    </template>
  </fwb-modal>
</template>
<style scoped></style>
