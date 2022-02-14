import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from "../../components/Nave/Nav";
import DefaultLayout from "../../layout/Default";
export default function Cat() {
  const router = useRouter();
  const { id } = router.query;

  const [cat, setCat] = useState(null);
  console.log(cat);

  useEffect(() => {
    fetchCats();
  }, []);

  const fetchCats = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    setCat(data);
  };
  return (
    <div>
      <DefaultLayout>
        {cat && (
          <div className="d-flex container mt-5">
            <div className="me-5">
              <img
                src={cat.image?.url}
                style={{ width: "300px" }}
                alt={cat.image?.alt}
              />
            </div>
            <div>
              <h3>{cat.name}</h3>
              <p>{cat.phone}</p>
              <p>{cat.email}</p>
              <p>{cat.description}</p>
            </div>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}
