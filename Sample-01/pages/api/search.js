// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import audit from "../../server/pangea";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function handler(
  req,
  res
) {
  const body = req.body;

  const response = await audit.search(body.query ?? "", body);
  res.status(200).json(response.result);
});
