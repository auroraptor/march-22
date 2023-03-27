// controllers/pipelinesController.ts
import { Request, Response } from "express";
import { fetchLeads } from "../utils/apiClient";

export const getLeads = async (req: Request, res: Response) => {
  const query = req.query.query as string;

  try {
    const data = await fetchLeads(query);
    res.json(data);
  } catch (error) {
    console.error('Error fetching leads:',error);
    res.status(500).send("Произошла ошибка при обработке запроса");
  }
};
