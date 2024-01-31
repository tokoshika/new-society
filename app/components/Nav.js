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
      <Link className="link" href="/lang">
        Language
      </Link>
      <Link className="link" href="https://www.anzen.mofa.go.jp/info/pchazardspecificinfo_2023T054.html#ad-image-0">
        外務省
      </Link>
      <hr />
    </div>
  );
}

