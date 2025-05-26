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

<script lang="ts">
import { defineComponent } from "vue";
import {
  textDefaultProps,
  textStylePropNames,
  transformToComponentProps,
} from "../../defaultProps";
import type { TextComponentProps } from "../../defaultProps";
import useComponentCommon from "../../hooks/useComponentCommon";

export default defineComponent({
  name: "LText",
  props: transformToComponentProps(textDefaultProps),
  setup(props: TextComponentProps) {
    // 使用 useComponentCommon hook
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropNames
    );

    return {
      props,
      styleProps,
      handleClick,
    };
  },
});
</script>

<style scoped lang="scss">
.l-text-component {
  position: relative !important;
}
</style>
