<script setup>
    definePageMeta({
        validate: async(route) => {
            return /^\d+$/.test(route.params.id)
        }
    })
</script>
<template>
    <div>
        <h1>{{ $route.params.id }}を表示中</h1>
    </div>
</template>