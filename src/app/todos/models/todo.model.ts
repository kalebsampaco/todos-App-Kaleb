

export class Todo {

    public id: number;
    public texto: string | undefined;
    public completado: boolean | undefined;

    constructor( texto: string ) {
        this.texto = texto;
        this.id = Math.random();
        this.completado = false;
    }
}