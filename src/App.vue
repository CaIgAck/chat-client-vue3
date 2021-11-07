<template>
  <div>
    <component :is='layout' />
  </div>
</template>


<script>
import AuthLayout from "./layouts/AuthLayout";
import DefaultLayout from "./layouts/DefaultLayout";
export default {
  components: {
    AuthLayout,
    DefaultLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  }
}
</script>

<style lang="scss">
</style>