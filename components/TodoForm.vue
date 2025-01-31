<template>
  <form class="todo-form">
    <div class="todo-form__insert-elements-wrapper">
      <label class="todo-form__label" for="title">Title</label>
      <input class="todo-form__input" type="text" name="title" id="title" required>
    </div>

    <div class="todo-form__insert-elements-wrapper">
      <label class="todo-form__label" for="description">Description</label>
      <textarea class="todo-form__textarea" type="text" name="description" id="description" required>
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
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  .todo-form__insert-elements-wrapper {
    margin-bottom: 10px;
  }

  .todo-form__label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .todo-form__input, .todo-form__textarea {
    width: 100%;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
</style>