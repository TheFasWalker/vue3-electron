<script setup>
import Versions from './components/Versions.vue'
import MainLayout from './components/layout/MainLayout.vue'
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <MainLayout>
    <router-view/>
  </MainLayout>
</template>
