<template>
  <div id="app">
      <div class="container py-4">

        <div class="p-5 mb-4 rounded-3">
          <div class="col-md-6 offset-md-3">
            <h1 class="text-center mb-4">To-Do-List</h1>
              <div class="input-group w-100">
              <span class="input-group-text" id="basic-addon1" @click="addNewTodo">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </span>
              <input type="text" class="form-control" placeholder="할 일을 입력해주세요 :-)" v-model="userInput" @keyup.enter="addNewTodo">
              </div>
              <div class="list-group list">
              {{ errorMessage }}
            </div>
          </div>
        </div>

        <div class="row align-items-md-stretch eachTodo">
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3 todoBox" :class="{ boxBorder: isSbClicked }" @click="handleClickSejunBox">
              <h4>세준 TODO</h4>
                <div class="list-group list">
                  <button class="list-group-item text-left mb-2" v-for="todo in sjTodoList" :key="todo" @click="toggleTodoState(todo)">
                  {{ todo.label }}
                  </button>
                </div>
              <!-- <button class="btn btn-outline-light" type="button">Example button</button> -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3 todoBox" :class="{ boxBorder: isEcClicked }" @click="handleClickEunchaeBox">
              <h4>은채 TODO</h4>
                <div class="list-group list">
                  <button class="list-group-item text-left mb-4" v-for="todo in ecTodoList" :key="todo" @click="toggleTodoState(todo)">
                  {{ todo.label }}
                  </button>
                </div>
            </div>
          </div>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userInput: '',
      sjTodoList: [],
      ecTodoList: [],
      isSbClicked: false,
      isEcClicked: false,
      errorMessage: ''
    };
  },
  // class의 getter함수처럼 동작
  computed: {
  activeTodoList() {
      return this.todoList.filter((item) => item.state === 'active');
    }
  },
  methods: {
    // todoList의 항목 추가 (active 상태)
    addNewTodo() {
      // 클릭된 영역이 없다면 에러메세지 추가
      if (!this.isSbClicked && !this.isEcClicked) {
        this.errorMessage = '원하는 영역을 클릭해주세요.';
        return;
      }

      // input이 빈 값이면 에러메세지 추가
      if (this.userInput === '') {
        this.errorMessage = '내용을 입력해주세요.';
        return;
      }

      // 세준이 영역 클릭해서 리스트 넣을 때
      if (this.isSbClicked) {
        this.sjTodoList.push({
          label: this.userInput,
          state: 'active'
        });
      }
      // 은채 영역 클릭해서 리스트 넣을 때
      if (this.isEcClicked) {
        this.ecTodoList.push({
          label: this.userInput,
          state: 'active'
        });
      }

    this.userInput = '';
    this.errorMessage = '';
    },
    // 클릭 시 done 상태로 전환
    toggleTodoState(todo) {
      todo.state = todo.state === 'active' ? 'done' : 'active';
    },
    // todo 박스를 클릭 시 선택 영역
    handleClickSejunBox() {
      this.isSbClicked = !this.isSbClicked;
      this.isEcClicked = !this.isSbClicked;
      this.errorMessage = '';
    },
     handleClickEunchaeBox() {
      this.isEcClicked = !this.isEcClicked;
      this.isSbClicked = !this.isEcClicked;
      this.errorMessage = '';
    },
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

#basic-addon1:hover {
  cursor: pointer;
  opacity: 0.9;
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

.todoBox {
  cursor: pointer;
}

.boxBorder {
  border: 5px solid;
}

body {
  background: black;
}
</style>
