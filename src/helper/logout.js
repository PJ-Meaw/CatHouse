
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export function Logout_page(){
    const navigate = useNavigate();
    Cookies.remove('email');
    Cookies.remove('userData');
    navigate("/")
    window.location.reload();
} 