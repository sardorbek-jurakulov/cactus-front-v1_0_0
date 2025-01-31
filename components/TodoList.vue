<template>
  <ul class="todo-list">
    <li class="todo-list__item">
      <NuxtLink class="todo-list__link" :to="`/todoes/${1}`">{{"Title 1"}}</NuxtLink>
      <span>{{ 'Completed' }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .todo-list {
    list-style-type: none;
    padding: 0;
  }

  .todo-list__item {
    margin: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f9f9f9;
  }
</style>