// controllers/pipelinesController.ts
import { Request, Response } from "express";
import { fetchContacts } from "../utils/apiClient";

export const getContacts = async (req: Request, res: Response) => {
  const leadId = Number(req.query.leadId);

  if (!leadId) {
    res.status(400).send("Необходимо указать параметр leadId");
    return;
  }

  try {
    const data = await fetchContacts(leadId);
    res.json(data);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).send("Произошла ошибка при обработке запроса");
  }
};
