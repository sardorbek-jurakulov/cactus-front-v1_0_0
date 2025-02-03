<template>
  <div>
     <TodoForm :todo="todo" :isEdit="isEdit"/>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const isEdit = computed(() => {
    return route.params.action === 'edit'
  });
  const todo = ref({
    id: null,
    title: '',
    description: '',
    completed: false,
    createdAt: new Date().toISOString(),
  });
</script>

<style scoped></style>