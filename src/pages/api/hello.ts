// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  console.log("Request Id: ", req.headers['x-vercel-id']);
  console.log("Parent Request Id: ", req.headers['x-parent-request-id']);

  res.status(200).json({ name: "John Doe" });
}
