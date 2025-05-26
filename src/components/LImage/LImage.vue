<template>
  <div class="l-image-component" @click="handleClick">
    <img :src="props.src" :style="styleProps" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  imageDefaultProps,
  imageStylePropsNames,
  transformToComponentProps,
} from "../../defaultProps";
import type { ImageComponentProps } from "../../defaultProps";
import useComponentCommon from "../../hooks/useComponentCommon";

export default defineComponent({
  name: "LImage",
  props: transformToComponentProps(imageDefaultProps),
  setup(props: ImageComponentProps) {
    // 使用 useComponentCommon hook
    const { styleProps, handleClick } = useComponentCommon(
      props,
      imageStylePropsNames
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
.l-image-component {
  position: relative !important;
}
</style>
