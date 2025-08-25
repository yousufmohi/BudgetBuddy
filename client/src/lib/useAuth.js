import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuth({ redirectTo = "/login", redirectIfFound = false } = {}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
      if (redirectIfFound) {
        router.push("/dashboard"); 
      }
    } else {
      setIsAuthenticated(false);
      if (!redirectIfFound) {
        router.push(redirectTo); 
      }
    }
    setLoading(false);
  }, [redirectTo, redirectIfFound, router]);

  return { isAuthenticated, loading };
}
