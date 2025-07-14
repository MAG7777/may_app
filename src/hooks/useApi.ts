import { useState, useCallback, useRef, useEffect } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const useApi = <T = unknown>(baseUrl: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const controllerRef = useRef<AbortController | null>(null);

  const request = useCallback(
    async (method: HttpMethod, endpoint: string, body?: object): Promise<void> => {
      if (controllerRef.current) controllerRef.current.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      setLoading(true);
      setError(null);

      try {
        const options: RequestInit = {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          signal: controller.signal,
        };

        if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(`${baseUrl}/${endpoint}`, options);

        if (!response.ok) {
          throw new Error(`${method} failed: ${response.status}`);
        }

        if (method !== "DELETE") {
          const result: T = await response.json();
          setData(result);
        } else {
          setData(null);
        }
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          console.warn(`${method} aborted`);
        } else if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Unknown error"));
        }
      } finally {
        setLoading(false);
      }
    },
    [baseUrl]
  );

  // Методы CRUD
  const get = (endpoint: string) => request("GET", endpoint);
  const post = (endpoint: string, body: object) => request("POST", endpoint, body);
  const put = (endpoint: string, body: object) => request("PUT", endpoint, body);
  const patch = (endpoint: string, body: object) => request("PATCH", endpoint, body);
  const remove = (endpoint: string) => request("DELETE", endpoint);

  useEffect(() => {
    return () => controllerRef.current?.abort();
  }, []);

  return { data, loading, error, get, post, put, patch, remove };
};

export default useApi;
