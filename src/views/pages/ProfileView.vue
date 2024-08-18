<script setup>
import { useNavigationStore } from '../../stores/navigationStore';
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import InputOne from '@/components/Inputs/InputOne.vue';
import DateInput from '@/components/Inputs/DateInput.vue';


const navStore = useNavigationStore()

const profileData = reactive({
    firstName: 'Haris',
    lastName: 'Mortage',
    email: 'harism@gmail.com',
    username: 'harry',
    dob: '1987-02-23',
    profession: 'Actor',
})

const imgFile = ref(null)
const imgSrc = ref('/src/assets/images/cards/cards-04.png')

const showProfileImg = (event) => {
  const file = event.target.files[0]
  if (file) {
      imgFile.value = file
      const reader = new FileReader()
      reader.onload = (e) => {
        console.log(e)
        imgSrc.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
// TO HIDE THE SIDEBAR ON PAGE LOAD
onMounted(()=> {
    navStore.hideNavbar()
})
// TO SHOW THE SIDEBAR ON PAGE LEAVE
onBeforeUnmount(()=> {
    navStore.showNavbar()
})
</script>
<template>
    <div class="page-setup space-y-12 ">
        <div class="space-y-6 text-center">
            <div class="relative inline-block mx-auto">
                <div class="w-32 lg:w-48 h-32 lg:h-48 rounded-full overflow-hidden mx-auto ring-4 ring-primary-300">
                    <img v-if="imgSrc" class="size-full object-cover" :src="imgSrc" alt="profile image">
                    <label for="profile-img" class="w-full absolute-center cursor-pointer"  :class="{ 'hidden': imgSrc }">Insert Your <br> Profile Picture</label>
                </div>
                <div class="flex-center w-5 lg:w-7 h-5 lg:h-7 rounded-full bg-white absolute bottom-4 right-1 lg:right-3 cursor-pointer">
                    <input type="file" name="" id="profile-img" @change="showProfileImg" class="size-full rounded-full absolute-center z-1 opacity-0">
                    <i class="fa-regular fa-pen-to-square text-xs lg:text-base text-primary-600"></i>
                </div>
            </div>
            <div class="space-x-4">
                <button class="btn-capsule btn-secondary wide">Update</button>
                <button class="btn-capsule text-secondary-600 btn-outline wide" @click="imgSrc = null">Delete</button>
            </div>
        </div>
        <hr class="border-primary-300"/> 
        <div class="grid lg:grid-cols-2 gap-5 xl:gap-8">
            <InputOne type="text" v-model="profileData.username" placeholder="Username" :style="'input-capsule'" :readonly="true"/>
            <InputOne type="email" v-model="profileData.email" placeholder="Email" :style="'input-capsule'" :readonly="true"/>
            <InputOne type="text" v-model="profileData.firstName" placeholder="First Name" :style="'input-capsule'"/>
            <InputOne type="text" v-model="profileData.lastName" placeholder="Last Name" :style="'input-capsule'"/>
            <DateInput placeholder="Date of birth" :style="'capsule'"/>
            <!-- <DateInput v-model="profileData.dob" placeholder="Date of birth" :style="'input-capsule'"/> -->
            <InputOne type="text" v-model="profileData.profession" placeholder="Profession" :style="'input-capsule'"/>
            <!-- <InputOne type="date" v-model="profileData.dob" placeholder="Date of birth" :style="'input-capsule'"/> -->
            <!-- <DatePicker v-model="profileData.dob"/> -->
        </div>
        <div class="space-x-4 float-end">
            <button class="btn-capsule widest text-secondary-600 btn-outline">Discard</button>
            <button class="btn-capsule wider btn-secondary">Save Changes</button>
        </div>
        <div class="clear-both"></div>
    </div>
        
</template>