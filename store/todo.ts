import SecureLS from "secure-ls";

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoes: [
      // {
      //   id: 1,
      //   title: 'Task 1',
      //   description: 'First Task',
      //   isCompleted: false,
      //   createdAt: new Date().toISOString(),
      // },
      // {
      //   id: 2,
      //   title: 'Task 2',
      //   description: 'Second Task',
      //   isCompleted: false,
      //   createdAt: new Date().toISOString(),
      // },
      // {
      //   id: 3,
      //   title: 'Task 3',
      //   description: 'Third Task',
      //   isCompleted: true,
      //   createdAt: new Date().toISOString(),
      // },
    ] as Array<{
      id: number,
      title: string,
      description: string,
      isCompleted: boolean,
      createdAt: string,
    }>,
  }),

  getters: {
    getTodoById: (state) => {
      return (id:number) => {
        return state.todoes.find((todo) => todo.id === id)
      }
    },
  },

  actions: {
    addTodo(
      todo:{
        id: number,
        title: string,
        description: string,
        isCompleted: boolean,
        createdAt: string,
    }) {
      this.todoes.push(todo);
    },
    updateTodo(
      updateTodo:{
        id: number,
        title: string,
        description: string,
        isCompleted: boolean,
        createdAt: string,
    }) {
      const index = this.todoes.findIndex((todo) => todo.id === updateTodo.id);
      if (index !== -1) {
        this.todoes[index] = updateTodo;
      }
    },

    deleteTodo(id: number) {
      this.todoes = this.todoes.filter((todo) => todo.id !== id);
    },

    updateMarkCompletedStatus(id: number) {
      const index = this.todoes.findIndex(
        (todo) => todo.id === id
      );

      if (index !== -1) {
        this.todoes[index].isCompleted = !this.todoes[index].isCompleted;
      }
    },
  },

  persist: {
    storage: {
      getItem: (key) => {
        return new SecureLS({
          encodingType: 'des',
          encriptionSecret: 'One23456',
        }).get(key);
      },
      setItem: (key, value) => {
        return new SecureLS({
          encodingType: 'des',
          encriptionSecret: 'One23456',
        }).set(key, value);
      }
    }
  }
});