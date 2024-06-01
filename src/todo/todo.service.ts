import { Injectable,  NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { createTodoInputs } from './dto/inputs/create-dto.inputs';
import { updateTodoInputs } from './dto/inputs/update-dot.input';
import { StatusArgs } from './dto/Args/status.args';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        {id: 1, description: 'Piedra del alma', done: false},
        {id: 2, description: 'Piedra del tiempo', done: false},
        {id: 3, description: 'Piedra del realidad', done: true},
    ];

    findAll( statusArgs: StatusArgs ): Todo[]{

        const {status} = statusArgs;
        if(status !== undefined) return this.todos.filter(todo => todo.done === status);

        return this.todos;
    }

    findOne(id: number): Todo {
        const todo =  this.todos.find(todo => todo.id === id);

        if(! todo) throw new NotFoundException(`Todo with id ${id} not found`);

        return todo;
    }

    create(createTodo: createTodoInputs): Todo {
        const todo = new Todo();
        todo.description = createTodo.description;
        todo.id = Math.max(...this.todos.map(todo => todo.id), 0 ) + 1;

        this.todos.push(todo)

        return todo;
    }

    update(updateTodo: updateTodoInputs): Todo {
        const todoU = this.findOne(updateTodo.id);
        if(updateTodo.description) todoU.description = updateTodo.description;
        if(updateTodo.done !== undefined) todoU.done = updateTodo.done;

        this.todos = this.todos.map(todo => {
            return (todo.id === updateTodo.id)?  todoU : todo;

        });

        return todoU;
    }
    
    delete(id: number) {
        const todo = this.findOne(id);
        this.todos = this.todos.filter(todo => todo.id !== id);
        return 'Todo eliminado';
    }
}


