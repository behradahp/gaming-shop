import { useEffect, useState } from "react";
import { AxiosInstance } from "../config/axios.instance";
import { AxiosRequestConfig } from "axios";

export const useAxios = <TData>(
  url: string,
  config: AxiosRequestConfig<any>
) => {
  const [data, setData] = useState<TData>([] as TData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = () => {
    AxiosInstance(url, config)
      .then((res) => res.data)
      .then((data) => setData(data))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => fetchData, []);

  return { data, isLoading, isError };
};
