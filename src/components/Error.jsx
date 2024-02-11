import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>{err.error.message}</h1>
      <p>
        {err.status} : {err.statusText}
      </p>
    </>
  );
};

export default Error;
