angular.module('appModule')
.factory('todoService', function(){
	var service = {};
	
	var todos = [
        {
            id : 1,
            task : 'Go round mums',
            description : '',
            completed : true
          },
          {
            id : 2,
            task : 'Get Liz back',
            description : '',
            completed : false
          },
          {
            id : 3,
            task : 'Sort life out',
            description : '',
            completed :  false
          }
        ];
	
	 var generateId = function() {
         return todos[todos.length-1].id + 1;
     }
	
	service.index = function(){
		return todos;
	}
	service.create = function(todo) {
        console.log(todo);
        var todo = angular.copy(todos);
        todo.id = generateId();
        todo.description = '';
        todo.completed = false; 
        todos.push(todos);
	}
//	service.update = function(todo){
//		return todos;
//	}
//	service.destroy(id) = function(eddittedTodo){
//		todos.forEach(function(todo))
//		if(todo.id ===editedTodo){
//			array.splice()
//		return todos.remove(todos)
//	}
//
//	return service;

	} )