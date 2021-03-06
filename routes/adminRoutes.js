const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//admin
router.route('/')
    .put(adminController.admin_update_put)
    .post(adminController.admin_create_post)


// router.route('/new')
//     .get(adminController.admin_create)

router.route('/show')
    .get(adminController.admin_create_get)


router.route('/:id/edit')
    // .get(adminController.admin_update_get)
    .put(adminController.admin_update_put)

router.route('/delete/:id')
    .delete(adminController.admin_delete)

module.exports = router;

