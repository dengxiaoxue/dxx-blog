<template>
  <svg class="dxx-icon" v-bind="$attrs" :width="finalSize" :height="finalSize" aria-hidden="true" :fill="iconColor">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { IconProps } from './type.sfc'

const props = withDefaults(defineProps<IconProps>(), {
  icon: 'arrow',
  size: 'large',
  iconColor: 'yellow',
})

const sizeMap = {
  large: 20,
  big: 18,
  medium: 16,
  small: 14,
  mini: 12,
}

const finalSize = computed(() => (props.customSize ? props.customSize : sizeMap[props.size]))
</script>
<style lang="scss" scoped>
.dxx-icon {
  outline: none;
}
</style>
