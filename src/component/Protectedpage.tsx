import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Protectedpage = ({ children }: Props) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Check if token exists , code returns true or  false

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default Protectedpage;
