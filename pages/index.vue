<template>
  <Banner />

  <br>

  <TodoList :todoes="recentTodoes"/>
</template>

<script setup>
const todoStore = useTodoStore();
const { todoes } = storeToRefs(todoStore);

const recentTodoes = computed(() => {
  return todoes?.value?.slice(-3).reverse()
});

onMounted(async () => {
  await todoStore.fetchTodoes();
});
</script>

<style></style>