<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      v-model="task.name"
      placeholder="Adicionar Nova Tarefa"
    />
    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: {
        name: "",
        completed: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("ADD_TASK", this.task);

      this.task = {
        name: "",
        completed: false,
      };
    },
  },
};
</script>

<style scoped>
</style>