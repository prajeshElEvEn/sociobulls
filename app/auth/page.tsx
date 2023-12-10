import Link from "next/link";

export default function Page() {
  return (
    <div>
      Sign In <Link href={"/auth/signup"}>Sign Up</Link>{" "}
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
