angular.module('appModule')
.component('todoList', {
    templateUrl : 'app/appModule/todoList/todoList.component.html',
    controller : function(todoService) {
        var vm = this;
        
        vm.selected = null;
        
        vm.editTodo = null;

        vm.todos = [];
        
        vm.todos = todoService.index();
        
        vm.todos = todoService.create();
        
        vm.todos = todoService.update();
        
        
        vm.updateTodo = function(edittedTodo) {
                vm.todos.forEach(function(todo, idx, array) {
                    if (todo.id === edittedTodo.id) {
                        array.splice(idx, 1, edittedTodo);
                    }
                });
                vm.selected = vm.editTodo; 
                vm.editTodo = null;
        }
        
        vm.setEditTodo = function() {
                vm.editTodo = angular.copy(vm.selected);
        }
        
        vm.displayTable = function() {
            vm.selected = null;
        }
        
        vm.displayTodo = function(todo) {
                vm.selected = todo;
        }
        
       vm.deleteTodo = function(id){
    	   todoService.destroy(id);
    	   vm.todos = todoService.index();
       }
       
       vm.updateTodo = function(eddittedTodo){
    	   todoService.update(eddittedTodo);
    	   vm.todos = todoService.index();
    	   vm.selected = vm.editTodo;
    	   vm.editTodo = null;
       }
        
        vm.countTodos = function() {
            return vm.todos.length;
        }
        
        vm.addTodo = function(todo) {
            console.log(todo);
            var todo = angular.copy(todo);
            todo.id = generateId();
            todo.description = '';
            todo.completed = false;
          
            
            vm.todos.push(todo);
        }
        
       
        
    },
    controllerAs : 'vm'
});