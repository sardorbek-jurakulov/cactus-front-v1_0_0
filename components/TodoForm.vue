<template>
  <form class="todo-form">
    <div class="todo-form__insert-elements-wrapper">
      <label class="todo-form__label" for="title">Title</label>
      <input class="todo-form__input" type="text" name="title" id="title" required>
    </div>

    <div class="todo-form__insert-elements-wrapper">
      <label class="todo-form__label" for="description">Description</label>
      <textarea class="todo-form__input" type="text" name="description" id="description" required>
      </textarea>
    </div>

    <button type="submit" class="btn-success">Add todo</button>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped>
  .todo-form {
    background-color: #fff;
    padding: 10px;
    margin: 20px 0px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
  }

  .todo-form__insert-elements-wrapper {
    margin-bottom: 10px;
  }

  .todo-form__label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
</style>