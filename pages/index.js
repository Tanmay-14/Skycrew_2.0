import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { Button, Card } from "@nextui-org/react";

const Index = ({ notes }) => {
  return (
    <div>
      <Button>Connect Wallet</Button>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/notes");
  const { data } = await res.json();

  return { notes: data };
};

export default Index;