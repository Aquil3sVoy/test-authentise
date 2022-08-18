import { useEffect, useState } from "react";
import config from "src/config";

const API_CALL = `${config.backendUrl}breeds/image/random`;

// This is a example with a custom hook to fetch data from an API using the fetch

export function useCustomHook() {
  const [loading, setLoading] = useState(false as boolean | null);
  const [img, setImg] = useState(null as any | null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(API_CALL);
      const data = await response.json();
      setImg(data.message);
      setLoading(false);
    };
    fetchData();
  }, []);

  const onClick = async () => {
    setLoading(true);
    const response = await fetch(API_CALL);
    const data = await response.json();
    setImg(data.message);
    setLoading(false);
  };
  return [
    loading,
    img,
    {
      setOnClick: onClick,
    },
  ];
}
