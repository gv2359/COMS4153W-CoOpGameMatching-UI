import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

//keshav's config
const firebaseConfig = {
  apiKey: "AIzaSyA3PfG0zFffbq3bWRNQmrd5emFnR3npcOo",
  authDomain: "cloud-computing-763fc.firebaseapp.com",
  projectId: "cloud-computing-763fc",
  storageBucket: "cloud-computing-763fc.firebasestorage.app",
  messagingSenderId: "440181901188",
  appId: "1:440181901188:web:76d30975425d566ca57fd1",
  measurementId: "G-PSSJY6YYZS"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBfOiobyv8dTTH5M2LI3AvZxgvSahRqpUo",
//   authDomain: "w4153-40419.firebaseapp.com",
//   projectId: "w4153-40419",
//   storageBucket: "w4153-40419.firebasestorage.app",
//   messagingSenderId: "86348119349",
//   appId: "1:86348119349:web:d8bfd9f1ffbd1e7bd5e07c",
//   measurementId: "G-H4BBEBWFZ3"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);