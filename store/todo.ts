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

  // getters: {
  //   getTodoById: (state) => {
  //     return (id:number) => {
  //       return state.todoes.find((todo) => todo.id === id)
  //     }
  //   },
  // },

  actions: {
    async fetchTodoes() {
      try {
        const { data, error } = await useFetch('/api/todoes');
        if (error.value) {
          throw new Error('Failed to fetch todoes');
        }
        if (data.value) {
          this.todoes = data?.value.data;
        }
      } catch (error) {
        console.error('Failed to fetch todoes', error);
      }
    },

    async addTodo(
      todo:{
        id: number,
        title: string,
        description: string,
        isCompleted: boolean,
        createdAt: string,
    }) {
      try {
        const { data, error } = await useFetch('/api/todoes');
        if (error.value) {
          throw new Error('Failed to fetch todoes');
        }
        if (data.value) {
          this.todoes = data?.value.data;
        }
      } catch (error) {
        console.error('Failed to fetch todoes', error);
      }
    },

    updateTodo(
      updateTodo:{
        id: number,
        title: string,
        description: string,
        isCompleted: boolean,
        createdAt: string,
    }) {
      try {
        const { data, error } = await useFetch('/api/todoes');
        if (error.value) {
          throw new Error('Failed to fetch todoes');
        }
        if (data.value) {
          this.todoes = data?.value.data;
        }
      } catch (error) {
        console.log('Failed to fetch todoes', error);
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

  // persist: {
  //   storage: {
  //     getItem: (key) => {
  //       return new SecureLS({
  //         encodingType: 'des',
  //         encriptionSecret: 'One23456',
  //       }).get(key);
  //     },
  //     setItem: (key, value) => {
  //       return new SecureLS({
  //         encodingType: 'des',
  //         encriptionSecret: 'One23456',
  //       }).set(key, value);
  //     }
  //   }
  // }
});