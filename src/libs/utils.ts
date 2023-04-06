export const joinClass = (...classnames: string[]) => {
  return classnames.join(' ');
};

export const getUid = () => {
  const info = JSON.parse(localStorage.getItem('user-info'));

  if (info) return info.uid;
  else return null;
};

export const getUsername = () => {
  const info = JSON.parse(localStorage.getItem('user-info'));
  if (info) return info.name;
  else return null;
};
