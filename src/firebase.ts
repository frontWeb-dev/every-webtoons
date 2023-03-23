// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth, // authentication 설정
  signInWithPopup, //google 로그인 팝업창
  GoogleAuthProvider, //google login 기능
  signInWithEmailAndPassword, // email 로그인
  createUserWithEmailAndPassword, //email 회원가입
  updateProfile, // 닉네임과 사진 정보 profile에 저장
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGLxn4AOS7vhIyLy9VRkAYKEdEbvy0lss',
  authDomain: 'korea-webtoon.firebaseapp.com',
  projectId: 'korea-webtoon',
  storageBucket: 'korea-webtoon.appspot.com',
  messagingSenderId: '310092931229',
  appId: '1:310092931229:web:19396bcc80549852c4b474',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth 설정 필수!!
const auth = getAuth();

//Email 회원가입
export const signupEmail = async (nickname: string, email: string, password: string) => {
  // email, password로 유저 가입
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  // 프로필 사진 storage 업로드
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { displayName: nickname });
  }

  return user;
};

//Email 로그인
export const loginEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Goolge 로그인
const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};
