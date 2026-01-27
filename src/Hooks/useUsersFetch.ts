import { useEffect, useState } from "react";
import type { User } from "../Interfaces/User";

const useUsersFetch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const API_URL = "https://fakestoreapi.com/users";

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data: Array<User> = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
};

export default useUsersFetch;
