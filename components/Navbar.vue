<template>
  <nav class="site-nav">
    <ul class="site-nav__list">
      <li>
        <NuxtLink to="/" class="site-nav__link">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/todoes" class="site-nav__link">All Todoes</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/todoes/add/new" class="site-nav__link">Add Todo</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
  .site-nav {
    background-color: #333;
    color: #fff;
    padding: 10rem;
  }

  .site-nav__list {
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }

  .site-nav__link {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .site-nav__link:hover {
    color: #ddd;
    text-decoration: underline;
  }

</style>