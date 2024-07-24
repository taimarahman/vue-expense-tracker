<script setup>
import CategorizedExpenseSummary from "../../components/Expenses/CategorizedExpenseSummary.vue"
import RecentExpenseList from "../../components/Expenses/RecentExpenseList.vue"
</script>
<template>
    <div class="page-setup">
        <div class="grid grid-cols-3 gap-x-3">
            <div class="bg-red">cds</div>
            <RecentExpenseList/>
            <CategorizedExpenseSummary/>
        </div>
    </div>
</template>