import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent implements OnInit {

  completado: boolean = false;

  constructor(
      private store: Store<AppState>
    ){}

  ngOnInit(): void {

  }

  toggleAll() {
    this.completado = !this.completado;
    this.store.dispatch( actions.toogleAll({completado: this.completado}))
  }
}
