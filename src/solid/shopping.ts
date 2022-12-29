import { CartItem } from "./intefaces/cart-item";

class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private orderStatus?: 'open' | 'closed' = 'open'

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    console.log(this._items);
    return this._items;
  }

  total(): number {
    return this._items.reduce((total, next) => total + next.price, 0);
  }

  checkout(): void {
    if(this.isEmpty()) {
      console.log('Carrinho vazio');
      return;
    }
    this.orderStatus = 'closed';
    this.sendMessage('Seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada', msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras limpo');
  }

}

export { ShoppingCart }