import { Request, Response } from 'express';
import { fetchUsers } from '../utils/apiClient';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await fetchUsers();
    console.log(users)
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};