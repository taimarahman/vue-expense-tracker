<script setup>
import { isReadonly, ref, watch } from 'vue';

const props = defineProps({
   type : { 
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String || Number,
    },
    placeholder: {
        type: String,
        default: 'Enter here'
    },

    readonly: {
        type: Boolean,
        default: false
    },
    style: {
        type: String,
        default: ''
    }

})

const emit = defineEmits(['update:modelValue'])

const localModelValue = ref(props.modelValue)
const showPassword = ref(false)

watch(localModelValue, (newVal)=>{
    emit('update:modelValue', newVal)
})

watch(
  () => props.modelValue,
  (newValue) => {
    localModelValue.value = newValue
  }
)

</script>
<template >
    <div class="relative">
        
        <input v-if="type!='password'" :type=type v-model="localModelValue" class="input peer" :class="style" :readOnly="readonly">

        <input v-else :type="showPassword ? 'text': 'password'" v-model="localModelValue" class="input peer" :class="style" :readOnly="readonly">

        <!-- PLACEHOLDER/LABEL -->
        <label :class="localModelValue ? 'input-label-top' : 'input-label-transition'">{{ placeholder }}</label>

        <!-- PASSWORD SHOW/HIDE FOR INPUT TYPE PASSWORD -->
        <template v-if="type=='password'">
            <i v-if="showPassword" class="fa-solid fa-eye text-[0.625rem] absolute-middle right-4 text-gray-700 cursor-pointer" @click="showPassword=!showPassword"></i>
            <i v-else class="fa-solid fa-eye-slash text-[0.625rem] absolute-middle right-4 text-gray-500 cursor-pointer" @click="showPassword=!showPassword"></i>
        </template>
    </div>
</template>