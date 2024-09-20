import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => setData(data.toString()))
      .catch((error) => setError(error.toString()));
  }, [url]);

  return [data, error];
}
export default useFetch;
