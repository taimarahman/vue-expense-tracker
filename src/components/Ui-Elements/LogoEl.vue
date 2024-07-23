<script setup>

const props = defineProps({
    size: {
        type: String,
        default: ''
    }
})

</script>

<template>
    <div class="w-full flex-center py-3">
        <div class="w-10 mr-2" :class="{'w-14' : size=='xl'}">
            <img src="@/assets/images/logo/logo.svg" alt="">
        </div>
        <div class="text-white font-alumni">
            <p class="uppercase font-bold text-xl tracking-wider" :class="{'!text-2xl tracking-widest' : size=='xl'}">track-o-wallet</p>
            <p class="capitalize font-medium text-xs tracking-widest text-center" :class="{'!tracking-[.3em]' : size=='xl'}">See where your money goes</p>
        </div>
    </div>
</template>