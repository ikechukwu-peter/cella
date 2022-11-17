import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import Layout from "../../pages/admin/admin.layout";

export const withAuthAdmin = (Component: any) => {
  const AuthenticatedComponent = () => {
    const token = sessionStorage.getItem("token") as string;

    const router = useRouter();

    useLayoutEffect(() => {
      //   if (!token) {
      //     router.push("/");
      //   }
    }, [token, router]);

    return !token ? (
      <>
        <Layout>
          <Component />
        </Layout>
      </>
    ) : null;
  };

  return AuthenticatedComponent;
};
