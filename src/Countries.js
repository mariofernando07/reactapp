import { Fragment } from "react";
import useCountries from "./useCountries";

function Countries() {
  const countries = useCountries();

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
