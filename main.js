(function () {
    'use strict';

    angular
            .module('toDoApp', [])
            .controller('toDoController', toDoController);

    function toDoController() {
        var vm = this;
        
        vm.toDoName = '';
        vm.todos = [];
        
        vm.addToDoToList = function () {
            vm.todos.push({name: vm.toDoName});
        }
        
        vm.removeFromToDoList = function ($key) {
            vm.todos.splice({name: $key});
        }
    }
})();