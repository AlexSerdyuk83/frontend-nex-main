import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from 'next/link'
import Image from 'next/image'
import axios from "axios";
import { Loader } from "../components/Loader";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  const fetchCustomer = async () => {
    const token = localStorage.getItem("auth");
    await axios
      .get(`${process.env.NEXT_PUBLIC_LOCAL_SERVER_URL}/whoAmI`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  const handleLogout = () => {
    console.log("sdasdasds");
    localStorage.removeItem("auth");
  };

  if (isLoading) return <Loader/>;
  if (error) return <div>{error.message}</div>;

  return user ? (
    <div>
      <Image src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <Link onClick={handleLogout} href="/api/auth/logout">
        <a>Logout</a>
      </Link>
    </div>
  ) : (
    <div>
        <h2>You are not Authorize!! Please Login first</h2>
    </div>
  );
}