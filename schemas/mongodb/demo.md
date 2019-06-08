### demo code
```
let Product = require('./product')

let product = new Product({
    name: '卫衣',
    price: 123,
    img: "/uploads/1.jpg"
})

product.save((err, res) => {
    if(err) {
        console.log(err);
        
    } else {
        console.log(res);
        
    }
})
```