import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos = 'todos'
  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void {
    // this.store.select('todos')
    //   .subscribe( todos => this.todos = todos)
    this.store.subscribe( ({ todos, filtro}) => {

      this.todos = todos;
      this.filtroActual = filtro;

    })
  }
}
