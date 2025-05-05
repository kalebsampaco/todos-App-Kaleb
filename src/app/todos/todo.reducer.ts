import { createReducer, on } from '@ngrx/store';
import { crear, toogle, editar, borrar, borrarCompletados, toogleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoIncial: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer Thanos'),
    new Todo('Comprar traje de Iron Man'),
    new Todo('Quitar escudo de capitan américa'),
];

export const _todoReducer = createReducer(
    estadoIncial,
  on(crear, (state, { texto }) => [...state, new Todo( texto )]),
  on(borrar, (state, { id } ) => state.filter(todo => todo.id !== id)),
  on(borrarCompletados, state => state.filter(todo => todo.completado !== true)),
  on(toogle, (state, { id }) => {
    return state.map( todo => {
        if(todo.id === id ) {
            return {
                ...todo,
                completado: !todo.completado
            }
        } else {
            return todo
        }
    })
  }),
  on(toogleAll, (state, { completado }) => {
    return state.map( todo => {
        return {
            ...todo,
            completado: completado
        }
    })
  }),
  on(editar, (state, { id, texto }) => {
    return state.map( todo => {
        if(todo.id === id ) {
            return {
                ...todo,
                texto: texto
            }
        } else {
            return todo
        }
    })
  }),
);