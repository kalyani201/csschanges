// components/layout.js
import type { NextPage } from "next";
import Link from "next/link";

interface IProps {
  children: any;
  token: string | undefined;
  logout: () => void;
}

export default function Layout({ children, token, logout }: IProps) {
  // const token = localStorage.getItem('token');
  return (
    <>
      {/* <nav classNameName="navbar">
        <Link href={'/'}>
          <button classNameName='btn btn-default'>Home</button>
        </Link>
        {!token && (
          <>
            <Link href={'/signUp'}>
              <button classNameName='btn btn-default'>Sign Up</button>
            </Link>
            <Link href={'/login'}>
              <button classNameName='btn btn-default'>Login</button>
            </Link>{' '}
          </>
        )}
        {token && (
          <>
            <Link href={'/dashboard'}>
              <button>Dashboard</button>
            </Link>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {!token && (
                <>
                  <Link href={"/signUp"}>
                    <button className="btn btn-default mr-2">Sign Up</button>
                  </Link>
                  <Link href={"/login"}>
                    <button className="btn btn-default">Login</button>
                  </Link>{" "}
                </>
              )}
              {token && (
                <>
                  <Link href={"/dashboard"}>
                    <button>Dashboard</button>
                  </Link>
                  <button onClick={logout}>Logout</button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
}
