<script setup>
import CategorizedExpenseSummary from "../../components/Expenses/CategorizedExpenseSummary.vue"
import RecentExpenseList from "../../components/Expenses/RecentExpenseList.vue"
import InputOne from "../../components/Inputs/InputOne.vue";
</script>
<template>
    <div class="page-setup">
        <div class="grid grid-cols-3 gap-x-3">
            <div class="space-y-6">
                <p class="text-xl text-dark font-medium pb-2 border-b-2 border-b-primary-300">Categorized Summary</p>
                <div class="space-y-3">
                    <InputOne type="text" placeholder="Title" :style="'input-capsule'"/>
                    
                </div>
            </div>
            <RecentExpenseList/>
            <CategorizedExpenseSummary/>
        </div>
    </div>
</template>