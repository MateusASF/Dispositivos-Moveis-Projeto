import { Router } from 'express';
const router = Router();


// Routes for User
import { CreateUserController } from '../controller/User/createUserController';
import { DeleteUserController } from '../controller/User/deleteUserController';
import { ListUserController } from '../controller/User/listUserController';
import { UpdateUserController } from '../controller/User/updateUserController';

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();

router.get('/teste', (req, res) => {console.log('teste'); res.send('teste')});

router.post('/users', createUserController.handle);
router.delete('/users', deleteUserController.handle);
router.get('/users', listUserController.handle);
router.put('/users', updateUserController.handle);

//////////////////////////////////////////////////////////////////////////////////

// Routes for Category
import { CreateCategoryController } from '../controller/Category/createCategoryController';
import { DeleteCategoryController } from '../controller/Category/deleteCategoryController';
import { ListCategoryController } from '../controller/Category/listCategoryController';
import { UpdateCategoryController } from '../controller/Category/updateCategoryController';

const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();

router.post('/categories', createCategoryController.handle);
router.delete('/categories', deleteCategoryController.handle);
router.get('/categories', listCategoryController.handle);
router.put('/categories', updateCategoryController.handle);


//////////////////////////////////////////////////////////////////////////////////

// Routes for Product
import { CreateProductController } from '../controller/Product/createProductController';
import { DeleteProductController } from '../controller/Product/deleteProductController';
import { ListProductController } from '../controller/Product/listProductController';
import { UpdateProductController } from '../controller/Product/updateProductController';

const createProductController = new CreateProductController();
const deleteProductController = new DeleteProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();

router.post('/products', createProductController.handle);
router.delete('/products', deleteProductController.handle);
router.get('/products', listProductController.handle);
router.put('/products', updateProductController.handle);

export { router };