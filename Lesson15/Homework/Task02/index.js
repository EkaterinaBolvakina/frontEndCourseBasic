const products = [
    {group: 'Laptop', name: 'Dell Inspiron 15', price: 799.99, manufacturer: 'Dell'},
    {group: 'Smartphone', name: 'iPhone 12', price: 999.00, manufacturer: 'Apple'},
    {group: 'Television', name: 'Samsung QLED 4K TV', price: 1499.99, manufacturer: 'Samsung'},
    {group: 'Watch', name: 'Rolex Submariner', price: 8000.00, manufacturer: 'Rolex'},
    {group: 'Headphones', name: 'Sony WH-1000XM4', price: 349.99, manufacturer: 'Sony'},
    {group: 'Car', name: 'Toyota Camry', price: 26000.00, manufacturer: 'Toyota'},
    {group: 'Camera', name: 'Canon EOS Rebel T7i', price: 749.00, manufacturer: 'Canon'},
    {group: 'Sneakers', name: 'Nike Air Max 270', price: 150.00, manufacturer: 'Nike'},
    {group: 'Refrigerator', name: 'LG French Door Refrigerator', price: 1999.99, manufacturer: 'LG'},
    {group: 'Blender', name: 'Vitamix 5200', price: 449.95, manufacturer: 'Vitamix'}
];

const resFilter = products.filter(product => product.price > 5000);
console.log(resFilter);