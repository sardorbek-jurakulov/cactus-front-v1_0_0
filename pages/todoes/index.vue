<template>
  <div>
    <h2>All Todoes:</h2>
    <TodoList :todoes="todoes"/>
  </div>
</template>

<script setup lang="ts">

  const todoStore = useTodoStore();
  const { todoes } = storeToRefs(todoStore);

  useHead({
    title: 'Nuxt - All Todoes',
    meta: [
      { name: 'description', content: 'All your todoes here!' },
      { name: 'keywords', content: 'todo, list, nuxt' },
      { name: 'lang', content: 'en-US' },
      { name: 'publisher', content: 'GSBE' },
    ],
    script: [
      {
        innerHTML: 'console.log("All todoes page")'
      }
    ]
  })
</script>

<style scoped>

</style>