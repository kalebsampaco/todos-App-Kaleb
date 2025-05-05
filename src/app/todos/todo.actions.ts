import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO] Crear todo',
    props<{texto: string}>()
);

export const toogleAll = createAction(
    '[TODO] ToogleAll todo',
    props<{completado: boolean}>()
);

export const toogle = createAction(
    '[TODO] Toogle todo',
    props<{id: number}>()
);

export const editar = createAction(
    '[TODO] Editar todo',
    props<{id: number, texto: string}>()
);

export const borrar = createAction(
    '[TODO] Borrar todo',
    props<{id: number}>()
);


export const borrarCompletados = createAction(
    '[TODO] Borrar todos completados',
);