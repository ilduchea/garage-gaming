export class Gamer {
  joined: Date = new Date();

  constructor (
    public name: string,
    public age: number,
    public availability: string,
    public gameTypes: string[]
  ) { }
}
