// import { userData } from "./data";

import Link from "next/link";

export default function Home() {
  // const { profile, resume } = userData;

  return (
   <div>
    Dashboard
    <Link href="/admin/sign-in">
  <button className="btn">Go to SignIn Page</button>
</Link>
   </div>
  );
}
