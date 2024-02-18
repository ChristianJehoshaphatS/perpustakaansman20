import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const handleLogout = async () => {
  "use server";
  console.log("logging out");

  cookies().delete("token");
  redirect("/");
};

const LogoutButton = () => {
  return (
    <form action={handleLogout}>
      <button
        type="submit"
        className="btn bg-white border-0 text-black hover:bg-[#fef7c0]"
      >
        Logout
      </button>
    </form>
  );
};

export default LogoutButton;
