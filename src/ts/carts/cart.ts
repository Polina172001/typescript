import Buyable from "../domain/Buyable";


export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }
  get items(): Buyable[] {
    return [...this._items];
  }

  getSum(items: Buyable[]): number {
    return items.reduce((a, b) => a + b.price, 0)
  }

  getSumSale(items: Buyable[], sale: number): number {
    return this.getSum(items) * (100 - sale) * 0.01
  }

  deletedId(id: number): void {
    let index = this._items.findIndex((i) => i.id === id)
    this.items.splice(index, 1)
  }
}