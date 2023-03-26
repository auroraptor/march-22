// controllers/pipelinesController.ts
import { Request, Response } from 'express';
import { fetchPipelines } from '../utils/apiClient';

export const getPipelines = async (req: Request, res: Response) => {
  try {
    const pipelines = await fetchPipelines();
    res.json(pipelines);
  } catch (error) {
    console.error('Error fetching pipelines:', error);
    res.status(500).json({ error: 'An error occurred while fetching pipelines' });
  }
};