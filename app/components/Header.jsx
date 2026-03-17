import Link from "next/link";

export default function Header() {
  return (
    <nav>
        <b>
      <Link href="/" style={{ marginRight: "15px" }}>
        Home
      </Link>

      <Link href="/characters">
        Characters
      </Link>
        </b>
    </nav>
  );
}
