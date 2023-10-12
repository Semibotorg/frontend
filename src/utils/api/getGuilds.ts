import { RESTGetAPICurrentUserGuildsResult } from "discord-api-types/v10";
import axios from "axios";
export async function getGuilds(
  token: string
): Promise<{
  included: RESTGetAPICurrentUserGuildsResult;
  excluded: RESTGetAPICurrentUserGuildsResult;
}> {
  const res = await axios.get(`${process.env.BACKEND_API_URL}/user/guilds`, {
    headers: {
      Authorization: token,
    },
  });
  return res.data;
}
