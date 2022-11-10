import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

export const withoutAuth = (Component: any) => {
  const UnAuthenticatedComponent = () => {
    const router = useRouter();
    const token = sessionStorage.getItem("token") as string;

    useLayoutEffect(() => {
      if (!!token) {
        router.push("/account");
      }
    }, [token, router]);

    return !token ? <Component /> : null;
  };

  return UnAuthenticatedComponent;
};
