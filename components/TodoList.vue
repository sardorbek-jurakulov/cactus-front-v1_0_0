<template>
  <ul class="todo-list">
    <li class="todo-list__item" v-for="(todo, index) in todoes" :key="index">
      <NuxtLink class="todo-list__link" :to="`/todoes/${todo.id}`">{{ todo.title }}</NuxtLink>
      <span>{{ todo.isCompleted ? 'Completed' : 'Not-Completed' }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
  defineProps({
    todoes: {
      type: Array as PropType <
        Array <{
          id:number,
          title:string,
          isCompleted: boolean,
        }>
      >
    }
  });
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