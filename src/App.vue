<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <router-link :to="{ name: 'home' }">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/data-types">DataTypes</router-link>
  <router-view/>
</template>