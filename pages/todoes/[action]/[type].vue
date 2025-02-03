<template>
  <div>
     <TodoForm :todo="todo" :isEdit="isEdit"/>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const todoStore = useTodoStore();
  const { todoes } = storeToRefs(todoStore);

  const isEdit = computed(() => {
    return route.params.action === 'edit'
  });

  const todo = ref({
    id: 0,
    title: '',
    description: '',
    completed: false,
    createdAt: new Date().toISOString(),
  });

  onMounted(() => {
    if (isEdit.value) {
      const todoId = Number(route.params.type);
      const foundTodo = todoes?.value.find((todo) => todo.id === todoId);
      if (foundTodo) {
        todo.value = { ...foundTodo };
      }
    }
  });
</script>

<style scoped></style>