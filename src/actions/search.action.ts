'use server'

import { getData } from "@/utils";

type TsearchParam = string;
export default async function searchAction(req: Request, res: Response): Promise<void>{
  const {q} = req.body;
  const data = await getData(`/cars?_name=${q}`);
  res.status(200).json("res from server: " + data);
  console.log('res on server: ', q);
}