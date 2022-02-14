import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Nav from "../../components/Nave/Nav";
import DefaultLayout from "./../../layout/Default";

export default function Cats() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch(`/api/cats`);
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <DefaultLayout>
        <div className="container mt-5">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {cats.map((cat) => {
              return <Card key={cat.key} cat={cat} />;
            })}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
