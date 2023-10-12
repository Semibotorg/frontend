import { APIUser } from "discord-api-types/v10";
import axios from "axios";

export async function getUser(token: string): Promise<APIUser> {
  const res = await axios.get(`${process.env.BACKEND_API_URL}/user`, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
}
