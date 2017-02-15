export class Queso {
  name;
  cost;
  isSharing;
  peopleSharing;
  constructor(name: string, cost: number, isSharing: boolean, peopleSharing: number) {
    this.name = name;
    this.cost = cost;
    this.isSharing = isSharing;
    this.peopleSharing = peopleSharing;
  }
}