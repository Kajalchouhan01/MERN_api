import express from 'express'
import { addProduct, getProducts, getProductById, deleteProduct ,updateProduct } from '../controllers/product.js';

const router = express.Router()

// @methed - get
// @route - /api/products/get
//  @des - to get all products
router.get("/get",getProducts);

// @method - post
// @route - /api/products/add
// @desc - to add product
router.post('/add',addProduct)

// @method - get
// @route - /api/products/:id
// @desc - to add single product
router.get('/:id',getProductById);


// @method - delete
// @route - /api/products/:id
// @desc - to delete product
router.delete('/:id', deleteProduct);

// @method - delete
// @route - /api/products/:id
// @desc - to delete product
router.put('/:id', updateProduct);





export default router;