<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  loadRefrigerants()
})


  const loadRefrigerants = async () => {
    const response = await fetch("../refrigerants.json")
    
    const refrigerants = await response.json()

    console.log(refrigerants)
  
  }

</script>

<template>


</template>
