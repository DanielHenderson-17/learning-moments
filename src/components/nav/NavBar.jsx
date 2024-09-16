import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      {localStorage.getItem("learning_user") ? (
        <li>
          <Link
            to=""
            onClick={() => {
              localStorage.removeItem("learning_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
