<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <button><router-link :to="{ name: 'home' }">Home</router-link></button>
  <button><router-link to="/about">About</router-link></button>
  <button><router-link to="/data-types">DataTypes</router-link></button>
  <router-view/>
</template>