<template>
  <div>
      <h1>Login</h1>
      <p> {{ textoMayusculas }}</p>
      <p>{{ userStore.minuscula }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue-demi';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const textoMayusculas = computed( () => {
  return userStore.userData.toUpperCase()
})
</script>

<style>

</style>