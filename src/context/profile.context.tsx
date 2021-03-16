import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from 'react';
import { database, auth } from '../utils/firebase';
import firebase from 'firebase';

interface Profile {
  name: string;
  createdAt: number;
  email: string | null;
  uid: string;
  avatar?: string;
}

interface InitialState {
  profile: Profile | null;
  loading: boolean;
}

const ProfileContext = createContext<InitialState>({
  profile: null,
  loading: true,
});

export const ProfileProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let userRef: firebase.database.Reference;
    const authUnSub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt, avatar } = snap.val();
          const data = {
            name,
            createdAt,
            avatar,
            uid: authObj.uid,
            email: authObj.email,
          };

          setProfile(data);
          setLoading(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      authUnSub();
      if (userRef) {
        userRef.off();
      }
    };
  }, []);
  return (
    <ProfileContext.Provider value={{ profile, loading }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileProvider = () => {
  const state = useContext(ProfileContext);
  return state;
};
