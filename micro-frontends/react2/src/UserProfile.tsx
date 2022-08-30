import React from "react";
import prisma from '../lib/prisma';
import { GetStaticProps } from "next";

type Order = {
  id: string,
  createdAt: string,
  updatedAt: string,
  products: string,
  buyer: User,
  buyerId: number
}

type User = {
  id:       string,
  username: string,
  title:    string
  name:     string
  surname:  string
  orders:   Order[]
}

interface UserProfileProps {
  user: User
}

export default function UserProfile({ user }: UserProfileProps) {
  console.log(user);
  return (
    <div>Test React 2</div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const user = await prisma.users.findMany();

  return {
    props: { user }
  };
};