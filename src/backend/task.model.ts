
export class Tarea {

  id: number;
  code: number;
  title: string;
  description: string;

  constructor(id,code,title) {
    this.id = id;
    this.title = title;
    this.code = code;
  }
}