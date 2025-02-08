<template>
  <div class="login">
      <button @click="popupState = !popupState" class="login__logIn">auth</button>
      <div v-if="popupState" class="login__popup">
          <form @submit.prevent="console.log('asdf')">
            авторизация
              <input type="text" placeholder="login">
              <input type="text" placeholder="password">
              <button>LogIn</button>
          </form>
      </div>
  </div>
</template>
<style lang="scss" scoped>
  .login{
    width: 100px;
    height: 100%;
    position: relative;
    color: #000000;
    &__logIn{
      cursor: pointer;
      height: 100%;
      width: 100%;
    }
    &__popup{
      position: absolute;
      top: 100%;
      right: 0;
      padding: 5px;
      background-color: wheat;
    }

  }
</style>
<script setup>
import { ref } from 'vue';

const popupState = ref(false)
</script>