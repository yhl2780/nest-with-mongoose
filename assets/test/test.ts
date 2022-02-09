class Product {
  name: string;
  price: number;
  amount: number;

  constructor(name:string, price:number, amount:number){
    this.name = name;
    this.price = price;
    this.amount = amount;
  }

  print(){
    console.log(`상품 이름은 ${this.name}이고 가격은 ${this.price}원이며 현재 ${this.amount}개 남았습니다!`)
  }
}

const product:Product = new Product('shirt', 3000, 10);
const { ...etc } = product;
const  { name: name1, price: price1, amount:price2 } = product;
product.print();
console.log(etc)
console.log(name1)
console.log(price1)
console.log(price2)


const testObj = {
  name: "pants",
  price: 2000,
  amount: 5
};
const product2:Product = testObj as Product;
console.log(product2)
