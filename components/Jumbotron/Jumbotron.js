import { useRouter } from "next/router";
import React from "react";

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className="jumbotron jumbotron- mt-5">
      <div className="container">
        <h1 className="display-4">Look 4 Cats</h1>
        <p className="lead">
          Cats and kittens can be so cute! Find your cat now...
        </p>
        <button
          onClick={() => router.push("/cats")}
          type="button"
          className="btn btn-primary"
        >
          Start Looking
        </button>
      </div>
    </div>
  );
}
