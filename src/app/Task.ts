export interface Task{ // interfase: nos da informacion al id sobre el modelo de datos de los que estamos construyendo
    id?: number; // cuando se crea una tarea no tiene un id, hasta que no se guarde no la tiene
    text: string;
    dia: string;
    reminder: boolean;
}