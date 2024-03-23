import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "./axios";
import _axios from "axios";
// ignore any type error
/* eslint-disable @typescript-eslint/no-explicit-any */

export type AxiosOption = {
  url: string;
  method: "get" | "post";
  data?: any;
  params?: any;
  onError?: (error: unknown) => void;
  onSuccess?: (data: any) => void;
};

const useAxios = () => {
  const { pathname, search } = useLocation();
  const currentPath = pathname + search;
  const navigate = useNavigate();

  return useCallback(
    async ({ url, method, data, params, onError, onSuccess }: AxiosOption) => {
      try {
        const res = await axios({ url, method, data, params });

        if (res?.status === 403 && res.data?.error === "not logged in") {
          console.log("not logged in");
          navigate("/login");
        } else if (res.status !== 200 && res.status !== 201) {
          throw new Error("Status is not 200!");
        } else {
          if (onSuccess) onSuccess(res.data);
          return res.data;
        }
      } catch (e) {
        if (
          _axios.isAxiosError(e) &&
          e?.response &&
          e?.response?.status === 401 &&
          e?.response?.data?.error === "not logged in"
        ) {
          navigate("/login");
        } else if (onError) {
          navigate("/login");
          onError(e);
        } else {
          navigate("/login");
          console.error(e);
        }
      }
    },
    [navigate, currentPath]
  );
};

export default useAxios;
