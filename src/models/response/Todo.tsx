export class ToDo {
    userId: number | undefined;
    id: number | undefined;
    title: string = "";
    completed: boolean = false;
}

export class Todos {
    todos: ToDo[] = [];
}