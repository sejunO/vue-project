<template>
  <div id="app">
        <div class="container py-4">

          <div class="p-5 mb-4 rounded-3">
             <div class="col-md-6 offset-md-3">
               <h1 class="text-center mb-4">To-Do-List</h1>
              <div class="row">
                <div class="col-10">
                  <input type="text" class="form-control" v-model="userInput" @keyup.enter="addNewTodo">
                </div>
                <div class="col-2 plusIcon">
                  <i class="bi bi-plus-square clickPlusIcon" @click="addNewTodo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                  </i>
                </div>
              </div>
              </div>

               <div class="list-group list">
                <button class="list-group-item text-left" v-for="todo in todoList" :key="todo">
                 {{ todo }}
                </button>
              </div>
          </div>

          <div class="row align-items-md-stretch eachTodo">
            <div class="col-md-6">
              <div class="h-100 p-5 text-bg-dark rounded-3">
                <h2>세준 TODO</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                <button class="btn btn-outline-light" type="button">Example button</button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 text-bg-dark rounded-3">
                <h2>은채 TODO</h2>
                <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                <button class="btn btn-outline-light" type="button">Example button</button>
              </div>
            </div>
          </div>
        </div>

        <!-- list  -->
        <!-- <div class="list-group list">
          <button class="list-group-item text-left" v-for="todo in todoList" :key="todo">
            {{ todo }}
          </button>
        </div> -->
      
      <!-- </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userInput: '',
      todoList: []
    };
  },
  methods: {
    addNewTodo() {
      this.todoList.push(this.userInput);
      this.userInput = '';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

.row {
  padding-right: 0;
}

.plusIcon {
  text-align: left;
  align-self: center;
}

.list {
  padding: 12px;
}

.clickPlusIcon {
  cursor: pointer;
}

.eachTodo {
  height: 500px;
}

body {
  background: black;
}
</style>
