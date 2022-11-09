import { useState, createContext, FC, useEffect } from "react";
import { useRouter } from "next/router";
import { Props } from "../@types/react";
import { AuthContextType, IAuth, IUser } from "../@types/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<Props> = ({ children }) => {
  const router = useRouter();

  const [user, setUser] = useState<IUser>({
    email: "",
    firstName: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const storedUser = sessionStorage.getItem("user");
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const onLogin = async (payload: IAuth) => {
    console.log(payload);
    // const user = await login(payload);
    setIsLoading(false);
    if (user) {
      sessionStorage.setItem("token", user?.token);
      sessionStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      router.push("/account");
    }
  };

  const onLogout = () => {
    setUser({
      email: "",
      firstName: "",
      token: "",
    });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    if (!user) {
      router.push("/");
    }
  };

  return (
    <AuthContext.Provider value={{ user, onLogin, onLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
