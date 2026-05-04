import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">Projects</Link>
      <Link href="/projects">Experience</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
