<template>
  <Banner />

  <br>

  <TodoList :todoes="todoes"/>
</template>

<script setup>
const todoStore = useTodoStore();
const { todoes } = storeToRefs(todoStore);

const recentTodoes = computed(() => {
  return todoes.value.slice(-2).reverse()
});
</script>

<style></style>