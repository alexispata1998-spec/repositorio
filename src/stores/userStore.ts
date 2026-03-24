import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [] as any[]
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
        console.log("¡APIs consumidas y guardadas en el Store!", this.users);
      } catch (error) {
        console.error("Error al traer datos:", error);
      }
    }
  }
});