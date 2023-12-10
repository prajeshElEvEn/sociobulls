import Link from "next/link";

export default function Page() {
  return (
    <div>
      Sign Up <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
