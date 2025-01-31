<template>
  <div>
    <h2>{{ todo?.title }}</h2>
    <p>{{ todo?.description }}</p>

    <hr class="my-5">

    <p>Completed: {{ todo?.isCompleted ? 'Yes' : 'No' }}</p>
    <p>Created At: {{ todo?.createdAt }}</p>

    <NuxtLink :to="`/todoes/edit/${todo?.id}`" class="btn">Edit</NuxtLink>
    <button
      @click="todoStore.updateMarkCompletedStatus(todoId)"
      :class="
        todo?.isCompleted ? 'btn-danger' : 'btn-success'
      "
    >
      {{ todo?.isCompleted ? 'Mark As Not Completed' : 'Mark As Completed' }}
    </button>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute();
  const todoStore = useTodoStore();
  const { todoes, getTodoById } = storeToRefs(todoStore);
  const todoId = Number(route?.params?.id);

  const todo = computed(
    () => {
      return todoes.value.find(t => t.id === Number(route?.params?.id))
    }
  );
</script>

<style>
  .btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
  }

  .btn:hover {
    background-color: #0056b3;
    color: #fff;
  }

  .btn-success {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
  }

  .btn-success:hover {
    background-color: #218838;
  }

  .btn-danger {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
    font-size: 16px;
  }

  .btn-danger:hover {

  }
</style>