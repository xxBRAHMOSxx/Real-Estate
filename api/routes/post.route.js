import express from 'express';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = express.Router();

// Add router0
router.get('/test', (req,res)=>{
    console.log("router works")
});
// router.get('/', SessionController.store);
// router.post('/', SessionController.store);
// router.put('/', SessionController.store);
// router.delete('/', SessionController.store);

export default router;
