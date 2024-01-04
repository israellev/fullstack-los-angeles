import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
  signOut,
} from "firebase/auth";
import { firebaseApp } from "../services/firebase";
import { createContext, useContext, useEffect, useState } from "react";

interface IUserProvider {
    user?: User,
    login?: () => void;
    logout?: () => void;
    isManager?: boolean;
}

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const UserContext = createContext<IUserProvider>({});

export function UserProvider(props: { children: any }) {
  const [user, setUser] = useState<User>();

  function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken; // @ts-ignore
        const user = result?.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => console.error(error));
  }

  function logout() {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setUser(user || undefined)
    );
    return () => unsubscribe();
  }, []);

  const isManager = user?.email === "israellev770@gmail.com";
  const value = {user, login, logout, isManager};

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export function useUser() {
    return useContext(UserContext) as Required<IUserProvider>;
}