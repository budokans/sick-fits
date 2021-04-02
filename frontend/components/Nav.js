import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const authenticatedUser = useUser();

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {authenticatedUser ? (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
        </>
      ) : (
        <Link href="/signin">Sign in</Link>
      )}
    </NavStyles>
  );
}
