export interface Webtoon {
  _id: string;
  img: string;
  title: string;
  service?: string;
}

export interface Webtoons {
  webtoon: {
    _id: string;
    img: string;
    title: string;
    service?: string;
  };
}

export interface UserProps {
  user: {
    username: string;
    email: string;
    avatar?: string;
  };
}
