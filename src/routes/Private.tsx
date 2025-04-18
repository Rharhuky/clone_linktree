import { ReactNode, useState, useEffect } from "react";
import { auth } from "../services/firebaseConnect";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router";

interface PrivateProps {
  children: ReactNode;
}

export function Private({ children }: PrivateProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          uid: user?.uid,
          email: user?.email,
        };
        localStorage.setItem("@app", JSON.stringify(userData));
        setSigned(true);
        setLoading(false);
      } else {
        setLoading(false);
        setSigned(false);
      }
    });
    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <div>Vazio!</div>;
  }
  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
}
