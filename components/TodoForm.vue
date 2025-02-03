<template>
  <form @submit.prevent="handleSubmit()" class="todo-form">
    <div class="todo-form__insert-elements-wrapper">
      <label class="todo-form__label" for="title">Title</label>
      <input
        class="todo-form__input"
        type="text"
        name="title"
        id="title"
        required
        v-model="form.title"
      >
    </div>

    <div class="todo-form__insert-elements-wrapper">
      <label class="todo-form__label" for="description">Description</label>
      <textarea
        class="todo-form__textarea"
        type="text"
        name="description"
        id="description"
        required
        v-model="form.description"
      >
      </textarea>
    </div>

    <button type="submit" class="btn-success">{{ isEdit ? "Update" : "Add" }} todo</button>
  </form>
</template>

<script setup lang="ts">
  const router = useRouter();
  const todoStore = useTodoStore();

  const props  = defineProps({
    todo: {
      type: Object as PropType<{
        id: number;
        title: string;
        description: string;
        isCompleted: boolean;
        createdAt: string;
      }>,
      required: true,
    },
    isEdit: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  });

  const form = ref({...props.todo});

  const handleSubmit = () => {
    if (props.isEdit) {
      todoStore.updateTodo(form.value);
    } else {
      form.value.id = Date.now();
      todoStore.addTodo(form.value);
    }
    router.push(`/todoes/${form.value.id}`);
  };
</script>

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