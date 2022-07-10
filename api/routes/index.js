const { Router } = require('express');
const userRoute= require('./Users');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(userRoute)
// router.use("/types", typeRoute)


module.exports = router;
