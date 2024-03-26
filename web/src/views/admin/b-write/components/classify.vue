<template>
  <div class="classify">
    <p>分类</p>
    <dxx-radio-group v-model="radio1" size="">
      <dxx-radio-button label="随笔" value="New York" />
      <dxx-radio-button label="前端" value="Washington" />
    </dxx-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DxxRadioGroup, DxxRadioButton } from 'dxx-web-ui'

const radio1 = ref('New York')
</script>

<style scoped>
.classify {
  display: flex;
  height: 100px;
  flex-direction: column;
  background-color: #fff;
  box-shadow: var(--box-shadow);
}
</style>
