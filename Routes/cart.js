import express from 'express'
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from '../Controllers/cart.js';

const router = express.Router();

import { Authenticated } from '../Middlewares/auth.js';
//add to cart 
router.post('/add',Authenticated,addToCart)

// get user cart
router.get('/user',Authenticated,userCart)

export default router; 

//remove product from cart 
router.delete('/remove/:productId',Authenticated,removeProductFromCart)

//clear cart
router.delete('/clear',Authenticated,clearCart)

//decreased qty
router.post("/--qty",Authenticated,decreaseProductQty)