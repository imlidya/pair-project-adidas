const Cart = require ("../models").Cart
const userOrder = require ("../models").UserOrder

class CartController {

  static cart (UserId) {
    Cart.findAll ({UserId: UserId})
    .then (data => {
      res.render('cart', {data:data})
    })
    .catch (()=>res.sed(err))
  }

  static checkout (UserId) {
    Cart.findAll ({UserId: UserId})
    .then (data => {
      data.forEach(el =>{
         userOrder.create (el)
      });
    })
    .then (()=>res.redirect(''))
    .catch (()=>res.send(err))
  }

  static add (ProductId) {
    Cart.create ({ProductId:ProductId, UserId:UserId})
  }

  static remove (PruductId) {
    Cart.destroy (PruductId)
    .then (()=>res.redirect('cart'))
    .catch (()=>res.send(arr))
  }
}
module.exports = CartController