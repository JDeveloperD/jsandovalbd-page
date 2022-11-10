import { Item, Link } from './styled';

const NavbarItem = ({ text, to }: { text: string; to: string }) => {
  return (
    <Item>
      <Link href={to}>{text}</Link>
    </Item>
  );
};

export default NavbarItem;
