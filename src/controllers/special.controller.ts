import { Request, Response } from 'express';
import { IUser } from '../models/user';

export const special = (req: Request, res: Response) => {
  const user = <IUser>req.user;
  return res.json({ msg: `Hey ${user.email}!` });
};
