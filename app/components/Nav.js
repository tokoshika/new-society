import Link from "next/link";
export default function Nav() {
  return (
    <div className="nav">
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="/about">
        About
      </Link>
      <Link className="link" href="/number">
        Number
      </Link>
      <hr />
    </div>
  );
}
