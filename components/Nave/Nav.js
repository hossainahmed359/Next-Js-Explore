import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Navbar
          </Link>
        </div>
      </nav>
    </div>
  );
}
