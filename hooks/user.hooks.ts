import { useRouter } from "next/router";
import { useState } from "react";
import instance from "../axios/config";

export const useData = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const verifyNIN = async (nin: number) => {
    setLoading(true);
    try {
      const { data } = await instance.post("/auth/verify", nin);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (payload: object) => {
    setLoading(true);
    try {
      const resp = await instance.post("/auth.login", payload);
      return resp;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    signIn,
    verifyNIN,
  };
};
