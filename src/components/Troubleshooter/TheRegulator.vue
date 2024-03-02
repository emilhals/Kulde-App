<script setup lang="ts">
import { ref, onMounted } from 'vue' 

const displayed = ref()


onMounted(() => {
})

</script>

<template>
  <div class="wrapper">
    <div class="regulator">
      <div class="face">
        <div class="display">
          <h3>{{ displayed }}</h3>
        </div>
        <div class="buttons">

        </div>
      </div>
    </div>
  </div>
</template>


<style scope>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap')

.wrapper {
  display: flex;
}
.regulator {
  position: fixed;
  right: 0;
  margin: 50px;
  background-color: #202020;
  width: 320px;
  height: 120px;
  color: #fff;
}

.face {

}

.display {
  margin: 0 auto;
  position: absolute;
  background-color: #404040;
  width: 70%;
  height: 70%;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
}

.display h3 {
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  text-align: center;
  font-size: 1.8em;
}


</style>
