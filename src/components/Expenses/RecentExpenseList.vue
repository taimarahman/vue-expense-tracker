<script setup>
</script>
<template>
<div class="space-y-6">
    <p class="text-xl text-dark font-medium pb-2 border-b-2 border-b-primary-300">Recent Expenses</p>
    <div class="space-y-3 ">
        <div class="expense-list">
            <p class="date color-2">Feb 10, 2024</p>
            <div class="items color-1">
                <p class="">Lunch <span class="space"></span> $ 3.25</p>
                <p class="">Medicine <span class="space"></span> $ 4</p>
                <p class="">Groceries <span class="space"></span> $ 56</p>
                <p class="">Travel <span class="space"></span> $ 5</p>
                <p class="">Dinner <span class="space"></span> $ 12</p>
                <hr>
                <p class="flex-between ">Total <span class="space"></span> $ <span class="amount">80.25</span></p>    
            </div>
        </div>
        <div class="expense-list">
            <p class="date color-3">Feb 09, 2024</p>
            <div class="items color-2">
                <p class="">Lunch <span class="space"></span> $ 3.25</p>
                <p class="">Travel <span class="space"></span> $ 5</p>
                <p class="">Dinner <span class="space"></span> $ 12</p>
                <hr>
                <p class="flex-between ">Total <span class="space"></span> $ <span class="amount">20.25</span></p>    
            </div>
        </div>
        <div class="expense-list">
            <p class="date color-2">Feb 08, 2024</p>
            <div class="items color-3">
                <p class="">Lunch <span class="space"></span> $ 3.25</p>
                <p class="">Groceries <span class="space"></span> $ 56</p>
                <p class="">Travel <span class="space"></span> $ 5</p>
                <p class="">Dinner <span class="space"></span> $ 12</p>
                <hr>
                <p class="flex-between ">Total <span class="space"></span> $ <span class="amount">76.25</span></p>    
            </div>
        </div>
        
    </div>
</div>
</template>