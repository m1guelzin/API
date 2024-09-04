//Importa o módulo Router do express
//router sera utilizado para definir rotas especificas da aplicação
const router = require('express').Router();


//Importa a controller de profesores onde contem a logica relacionada a professores
const teacherController = require('../controllers/teacherController');

///Rota POST para '/teacher'
router.post('/teacher/',teacherController.postTeacher); 
router.get('/teacher/', teacherController.getTeacher);

module.exports = router
