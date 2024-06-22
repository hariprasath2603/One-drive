import controller from './outlook-controller';

const router = require('express').Router();

// The route for the outlook service


router.get('/permission/:itemId', controller.filePermissions);
router.get('/list/:itemId', controller.listContents);
router.get('/download/:itemId', controller.downloadFile);

export default router;