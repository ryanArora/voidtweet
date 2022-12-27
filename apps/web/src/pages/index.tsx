import { trpc } from "../utils/trpc";
import { NextPage } from "next";
import { Button } from "ui";

const Homepage: NextPage = () => {
  const hello = trpc.hello.useQuery({ text: "client" });

  if (!hello.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Hello, world!</p>
      <p>{hello.data.greeting}</p>
      <Button />
    </div>
  );
};

export default Homepage;
