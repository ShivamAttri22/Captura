import { useUser } from "../context/UserContext";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoggedin } = useUser();

  // 2. If there is no authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isLoggedin) navigate("/login");
    },
    [isLoggedin, navigate]
  );

  // 3. While loading, show a spinner
  //   if (isLoading)
  //     return (
  //       <FullPage>
  //         <Spinner />
  //       </FullPage>
  //     );

  // 4. If there IS a user, render the app

  if (isLoggedin) return children;
}

export default ProtectedRoute;
