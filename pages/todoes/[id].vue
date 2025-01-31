<template>
  <div>
    <h2>Title</h2>
    <p>Description</p>

    <hr class="my-5">

    <p>Completed: Yes</p>
    <p>Created At: 12:00</p>

    <NuxtLink :to="`/todoes/edit/{$1}`" class="btn">Edit</NuxtLink>
    <button class="btn-success">Mark As Completed</button>
  </div>
</template>

<script setup lang="ts"></script>

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