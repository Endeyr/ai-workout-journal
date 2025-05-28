import { auth } from '@/auth';
import SignIn from '@/components/sign-in';
import SignOut from '@/components/sign-out';
import UserAvatar from '@/components/UserAvatar';
import Link from 'next/link';

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      {!user ? <SignIn /> : <SignOut />}
      <h1>Home</h1>
      <Link href='/about'>About</Link>
      <UserAvatar />
    </div>
  );
}
