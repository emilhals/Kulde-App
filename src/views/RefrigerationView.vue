<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  loadRefrigerants()
})


  const loadRefrigerants = async () => {
    try {
      const response = await fetch("../refrigerants.json")
        
      if (!response.ok) {
        throw new Error(`HTTP Error. Status: ${response.status}`);
      }
      const refrigerants = await response.json();
      console.log(refrigerants)
    } catch(error) {
      console.log("Could not load refrigerants: ", error)
  }
  
  }

</script>

<template>


</template>
