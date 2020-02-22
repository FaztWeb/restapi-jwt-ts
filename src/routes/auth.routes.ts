import {Router} from 'express'
import {
  signIn,
  signUp,
} from '../controllers/user.controller'

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);

export default router;