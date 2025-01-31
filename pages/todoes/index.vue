<template>
  <div>
    <h2>All Todoes:</h2>
    <TodoList :todoes="todoes"/>
  </div>
</template>

<script setup lang="ts">

  const todoStore = useTodoStore();
  const { todoes } = storeToRefs(todoStore);

</script>

<style scoped>

</style>