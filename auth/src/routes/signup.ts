import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { User } from '../models/user';
import { validateRequest, BadRequestError } from '@keitickets/common';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check if there are duplicate emails
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email already in use');
    }

    // Create an user
    const user = User.build({ email, password });
    await user.save();

    // Generate JWT & Store it in the cookie (Session object)
    const payload = {
      id: user.id,
      email: user.email,
    };
    const userJwt = jwt.sign(payload, process.env.JWT_KEY!); // Securely store secrets with Kubernetes / ! makes TS error go away (because already checked in index.ts));
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
