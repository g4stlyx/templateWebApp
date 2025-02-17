import { ErrorProps } from "../types";
export default function ErrorPage({ message, status }: ErrorProps) {

  return (
    <div className="Error">
      <h1>Oops, something went bad!</h1>
      <h3>{message}</h3>
      <h5>Status Code: {status}</h5>   
    </div>
  );
}
