import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const token = sessionStorage.getItem("token") as string;

    const router = useRouter();

    useLayoutEffect(() => {
      if (!token) {
        router.push("/");
      }
    }, [token, router]);

    return !!token ? <Component /> : null;
  };

  return AuthenticatedComponent;
};
