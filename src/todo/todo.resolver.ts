import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { createTodoInputs } from './dto/inputs/create-dto.inputs';
import { updateTodoInputs } from './dto/inputs/update-dot.input';
import { StatusArgs } from './dto/Args/status.args';

@Resolver(() => Todo)
export class TodoResolver {
    constructor(
        private readonly todoService: TodoService
    ){}


    @Query(() => [Todo], {name: 'todos'})
    findAll(@Args() statusArgs: StatusArgs): Todo[] {
        return this.todoService.findAll(statusArgs);
    }

    @Query(() => Todo, {name: 'todo'})
    findOne(
        @Args('id', {type: () => Int} ) id:number
    ) {
        return this.todoService.findOne(id);
    }

    @Mutation(() => Todo, {name: 'createTodo'})
    createTodo(
        @Args('createTodoInput') createTodoInput: createTodoInputs
    ) {

        return this.todoService.create(createTodoInput);                    
    }

    @Mutation(() => Todo, {name: 'updateTodo'})
    updateTodo(@Args('updateTodoInputs') updateTodoInputs: updateTodoInputs) {
        return this.todoService.update(updateTodoInputs);
    }

    @Mutation(() => String, {name: 'deleteTodo'})
    deleteTodo(@Args('id', { type: () => Int } ) id:number) {
        return this.todoService.delete(id);
    }

}
