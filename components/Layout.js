import Link from "next/link";
import { useRouter } from "next/router";
import MainNav from "./MainNav";
import { Container } from "react-bootstrap";

export default function Layout(props) {
  const router = useRouter();

  return (
    <>
      <MainNav />
      <br />
      <Container>{props.children}</Container>
      <br />
    </>
  );
}
