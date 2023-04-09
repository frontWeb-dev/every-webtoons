import axios from 'axios';

const BASE_URL = 'https://korea-webtoon-api.herokuapp.com';

interface resultProps {
  service: string;
}
export const getAllWebtoons = async (day: string) => {
  const { data } = await axios.get(`${BASE_URL}/?perPage=100&updateDay=${day}`);

  return data.webtoons;
};

export const getWebtoonInfo = async (service: string, title: string) => {
  const { data } = await axios({ url: `${BASE_URL}/search?keyword=${title}` });

  if (data.webtoons.length !== 1) {
    const result = data.webtoons.filter((a: resultProps) => a.service === service);
    return result;
  }
  return data.webtoons;
};

export const getSearchWebtoon = async (body: string) => {
  const { data } = await axios({ url: `${BASE_URL}/search?keyword=${body}` });

  return data.webtoons;
};

export const getServiceWebtoon = async (service: string, day: string) => {
  const { data } = await axios.get(`${BASE_URL}/?perPage=100&service=${service}&updateDay=${day}`);

  return data.webtoons;
};
