import styles from "./page.module.css";
import Banner from "@/components/Banner";
import { unstable_noStore as noStore } from "next/cache";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getMe from "@/libs/getMe";

export default async function Home() {
  noStore();

  const session = await getServerSession(authOptions);
  let isAdmin = false;
  if (session) {
    isAdmin = (await getMe()).data.role === "admin";
  }


  return (
    <main className={styles.main}>
      <Banner isAdmin={isAdmin}/>
    </main>
  );
}
