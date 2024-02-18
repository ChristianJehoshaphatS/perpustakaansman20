import logout from "@/components/LogOut";
import { redirect } from "next/navigation";

const LogOut = () => {
  logout();
  redirect("/");
  return <h1>Logging Out</h1>;
};

export default LogOut;
