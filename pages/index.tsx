import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Users } from "components";
import styles from "../styles/Home.module.css";
import { getUsers } from "firestoreService";
import { getDocs, addDoc } from "firebase/firestore";
import { usersCollection } from "firestoreService";

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await getUsers();
  const props = {
    users,
  };

  return { props };
};

const Home: NextPage = ({ users }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Users users={users} />
    </div>
  );
};

export default Home;
