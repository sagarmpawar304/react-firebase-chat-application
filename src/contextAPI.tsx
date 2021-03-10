import React, {
  createContext,
  useContext,
  Dispatch,
  ReactNode,
  FC,
  useReducer,
  useEffect,
  useState,
} from 'react';
import profileReducer from './containers/SignIn/reducer';
import { auth, database } from './utils/firebase';
import firebase from 'firebase';

interface Profile {
  name: string;
  createdAt: number;
  email: string;
  uid: string;
}

interface InitialState {
  profile: Profile | null;
  loading: boolean;
}

interface Context {
  state: InitialState;
  dispatch: Dispatch<any>;
}

const initialState: InitialState = {
  profile: null,
  loading: true,
};

const AppContext = createContext<Context>({
  state: initialState,
  dispatch: () => null,
});

const loadingReducer = (state = true, action: any) => {
  switch (action.type) {
    case 'stop':
      return false;
    default:
      return state;
  }
};

export const reducer = ({ profile, loading }: InitialState, action: any) => ({
  profile: profileReducer(profile, action),
  loading: loadingReducer(loading, action),
});

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let userRef: firebase.database.Reference;

    const authUnsub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt } = snap.val();
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          dispatch({ type: 'success', payload: data });
          dispatch({ type: 'stop' });
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        dispatch({ type: 'reset' });
        dispatch({ type: 'stop' });
      }
    });

    return () => {
      authUnsub();
      if (userRef) {
        userRef.off();
      }
    };
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useProvider = () => {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
};
