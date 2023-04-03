import axios from 'axios';

const BASE_URL = 'https://korea-webtoon-api.herokuapp.com';

export const getAllWebtoons = async (day: string) => {
  const { data } = await axios.get(`${BASE_URL}/?perPage=100&updateDay=${day}`);

  return data.webtoons;
};
