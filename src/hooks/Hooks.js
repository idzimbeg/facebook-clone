import {
  useEffect,
  useState,
  useRef
} from "react";

export function useFirestoreQuery(query) {
  const [docs, setDocs] = useState([]);

  const queryRef = useRef(query);

  useEffect(() => {
    if (!queryRef?.current?.isEqual(query)) {
      queryRef.current = query;
    }
  });

  useEffect(() => {
    if (!queryRef.current) {
      return null;
    }

    const unsubscribe = queryRef.current.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocs(data);
    });

    return unsubscribe;
  }, [queryRef]);

  return docs;
}

export function useAuthState(auth) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [auth, initializing]);

  return { user, initializing };
}
