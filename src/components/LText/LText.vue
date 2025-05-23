<template>
  <component
    :is="props.tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
  >
    {{ props.text }}
  </component>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from "vue";
import { textDefaultProps, textStylePropNames } from "../../defaultProps";
import type { TextComponentProps } from "../../defaultProps";
import useComponentCommon from "../../hooks/useComponentCommon";

const props = withDefaults(defineProps<TextComponentProps>(), {
  ...textDefaultProps,
});

// 使用 useComponentCommon hook
const { styleProps, handleClick } = useComponentCommon(
  props,
  textStylePropNames
);
</script>

<script lang="ts">
export default {
  name: "LText",
};
</script>

<style scoped lang="scss">
.l-text-component {
  position: relative !important;
}
</style>
