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
    <button
      @click="handleDelete"
      class="btn-danger"
    >
      Delete
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTransition: {
    name: 'rotate',
  }
});

useSeoMeta({
  title: 'Nuxt - Todo details',
  description: 'Todo details page'
});

  const route = useRoute();
  const router = useRouter();
  const todoStore = useTodoStore();
  const { todoes } = storeToRefs(todoStore);
  const todoId = Number(route?.params?.id);

  const todo = computed(
    () => {
      return todoes.value.find(t => t.id === Number(route?.params?.id))
    }
  );

  const handleDelete = async () => {
    todoStore.deleteTodo(todoId);
    router.push(`/todoes`);
  };
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