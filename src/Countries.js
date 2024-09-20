import { Fragment } from "react";
import useCountries from "./useCountries";

function Countries({name}) {
  const countries = useCountries(name);

  return (
    <>
      {!countries ? (
        <>Waiting</>
      ) : (
        <>
          {countries.map((name, index) => (
            <Fragment key={index}>
              {name}
              <br />
            </Fragment>
          ))}
        </>
      )}
    </>
  );
}

export default Countries;
