export const joinClass = (...classnames: string[]) => {
  return classnames.join(' ');
};

export const getUid = () => {
  const info = JSON.parse(localStorage.getItem('user-info'));
  return info.uid;
};

export const getUsername = () => {
  const info = JSON.parse(localStorage.getItem('user-info'));
  return info.name;
};
