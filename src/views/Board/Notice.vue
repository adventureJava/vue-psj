<template>
    <ContextBox>공지사항</ContextBox>
    <NoticeSearch/>
    <NoticeMain/>
</template>

<script setup>
import { provide } from 'vue';

const providedValue = ref();

provide('providedValue', providedValue);
</script>
