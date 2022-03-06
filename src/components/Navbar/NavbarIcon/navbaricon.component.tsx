import Link from "next/link";
import { TNavbar } from "./navbaricon.definition";
import { ListItem } from "./navbaricon.style";

export default function NavbarIcon({ name, direct }: TNavbar) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={direct}>
      <ListItem>
        <div className={name}></div>
      </ListItem>
    </Link>
  );
}
