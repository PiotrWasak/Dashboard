<template>
  <div class="todo container">
    <h1>TODO</h1>
    <br /><br /><br />

    <label for="taskInput" class="form-label lead">Dodaj zadanie</label>
    <input
      @keyup.enter="addTask"
      v-model="task"
      type="text"
      class="form-control"
      id="taskInput"
    />
    <br />
    <button @click="addTask" type="submit" class="btn btn-primary">
      Submit
    </button>
    <br />
    <ul class="list-group">
      <li
        v-for="(task, index) in tasks"
        :key="task.id"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        {{ task }}
        <span @click="deleteTask(index)" class="badge badge-danger badge-pill">
          <i class="fas fa-times-circle"></i
        ></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TODO",
  data() {
    return {
      tasks: ["Create TODO app"],
      task: "",
    };
  },
  props: {},
  methods: {
    addTask() {
      if (this.task) {
        this.tasks.push(this.task);
      }
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
fas {
  float: right;
}
</style>
