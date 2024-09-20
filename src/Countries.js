import useFetch from "./useFetch";

function Countries() {
  const [data, error] = useFetch("https://restcountries.com/v3.1/all");

  return (
    <>{!error && !data ? <>Waiting</> : error ? <>{error}</> : <>{data}</>}</>
  );
}

export default Countries;
