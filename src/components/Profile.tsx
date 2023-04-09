import { database, storage } from '@firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import React, { useEffect, useState } from 'react';

const Profile = ({ user }) => {
  const { username, email, avatar } = user;
  console.log(user);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState(avatar);

  const docRef = doc(database, 'users', username);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUpload(e.target.files[0]);
  };

  const upload = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };

  const addAvatar = async () => {
    const getUser = await getDoc(docRef);
    const data = getUser.data();
    await setDoc(docRef, {
      ...data,
      avatar: imageUrl,
    });
  };

  useEffect(() => {
    addAvatar();
  }, [imageUrl]);

  useEffect(() => {
    upload();
  }, [imageUpload]);

  return (
    <div className='flex h-[20vh] items-center space-x-6 border-b px-6'>
      <img id='avatar' className='h-24 w-24 rounded-full bg-slate-200' src={imageUrl} />
      <div className='flex-col space-y-2'>
        <h2>{user.username}</h2>
        <p>{user?.email}</p>

        <label
          htmlFor='changeProfile'
          className='block w-20 rounded-md border border-blue-500 bg-blue-500 p-1 text-center text-sm text-white'>
          사진 변경
        </label>
        <input id='changeProfile' type='file' className='hidden' onChange={changeValue} />
      </div>
    </div>
  );
};

export default Profile;
