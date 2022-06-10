<template>
  <div>
      <h1>Home- {{ userStore.userData }}</h1>
  </div>
</template>

<script>
import { computed } from 'vue-demi'
import { useUserStore } from '../stores/user'
export default {

  setup() {
    const userStore = useUserStore();
    

    return { userStore }
  }

}
</script>

<style>

</style>