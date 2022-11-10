import { useRouter } from "next/router";
import { useState } from "react";
import instance from "../axios/config";

export const useData = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const saveData = async (payload: any) => {
    setLoading(true);
    try {
      const { data } = await instance.post("/verify", payload);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const verifyNIN = async (nin: number) => {
    setLoading(true);
    try {
      const { data } = await instance.post("/verify", { nin });
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (payload: { email: string; password: string }) => {
    setLoading(true);
    try {
      console.log(payload, "PAYLOAD");
      const resp = await instance.post("/login", payload);
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
    saveData,
  };
};
