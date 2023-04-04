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
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCeZvDFuJKOG-zDP2-MDERRoV0GcOm7YF0',
  authDomain: 'every-webtoons-4c928.firebaseapp.com',
  projectId: 'every-webtoons-4c928',
  storageBucket: 'every-webtoons-4c928.appspot.com',
  messagingSenderId: '918007705097',
  appId: '1:918007705097:web:bd09c6a38a2a4c35c752d8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);

// auth 설정
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
