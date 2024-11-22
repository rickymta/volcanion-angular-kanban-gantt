export class MonthModel {
  id: string;
  name: string;
  weeks: any[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
