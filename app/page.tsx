import { auth } from '@/auth';
import { ProfileForm } from '@/components/form';
import SignIn from '@/components/sign-in';
import SignOut from '@/components/sign-out';
import UserAvatar from '@/components/user-avatar';
import Link from 'next/link';

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <div>
      <div>{!user ? <SignIn /> : <SignOut />}</div>
      <h1>Home</h1>
      <div>
        <Link href='/about'>About</Link>
      </div>
      <div>
        <Link href='/chat'>Chat</Link>
      </div>
      <div>
        <UserAvatar />
      </div>
      <div>
        <ProfileForm />
      </div>
    </div>
  );
}
