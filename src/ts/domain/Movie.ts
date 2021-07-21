import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number,
    readonly year: number,
    readonly genre: string[],
    readonly slogan: string,
    readonly time: number,
    readonly country: string,

  ) { }
}