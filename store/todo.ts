// import SecureLS from "secure-ls";

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
      todo: {
        id: number,
        title: string,
        description: string,
        isCompleted: boolean,
        createdAt: string,
    }) {
      try {
        const { data, error } = await useFetch('/api/todoes', {
          method: 'POST',
          body: todo,
        });

        if (error.value) {
          throw new Error('Failed to add todoes');
        }
        // if (data.value) {
        //   this.todoes = data?.value.data;
        // }
        if (data.value) {
          this.todoes.push(data?.value.data);
        }
        this.todoes.push(data?.value.data);
      } catch (error) {
        console.error('Failed to add todoes', error);
      }
    },

    async updateTodo(
      updateTodo: {
        id: number,
        title: string,
        description: string,
        isCompleted: boolean,
        createdAt: string,
    }) {
      try {
        const { data, error } = await useFetch('/api/todoes', {
          method: 'PUT',
          body: updateTodo,
        });

        if (error.value) {
          throw new Error('Failed to update todoes');
        }
        // if (data.value) {
        //   this.todoes = data?.value.data;
        // }
        // if (data.value) {
        //   this.todoes.push(data?.value.data);
        // }
        // this.todoes.push(data?.value.data);
      } catch (error) {
        console.error('Failed to update todoes', error);
      }
    },

    async deleteTodo(id: number) {
      try {
        const { data, error } = await useFetch('/api/todoes', {
          method: 'DELETE',
          body: { id },
        });

        if (error.value) {
          throw new Error('Failed to delete todoes');
        }
      } catch (error) {
        console.error('Failed to delete todoes', error);
      }
    },

    async updateMarkCompletedStatus(id: number) {
      const index = this.todoes.findIndex(
        (todo) => todo.id === id
      );

      if (index === -1) {
        return 'Error';
      }
      const updateTodo = { ...this.todoes[index], isCompleted:!this.todoes[index].isCompleted };

      try {
        const { data, error } = await useFetch('/api/todoes', {
          method: 'PUT',
          body: updateTodo,
        });

        if (error.value) {
          throw new Error('Failed to update todoes');
        }
      } catch (error) {
        console.error('Failed to update todoes', error);
      }

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