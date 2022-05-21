import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

import Button from '../../components/Button/Button';

const MyProfile = () => {
  const { data, status } = useSession();

  if (status === 'loading') {
    return 'Loading...';
  }

  return (
    <main className="flex flex-col items-center gap-4 p-8 text-gray-700">
      <h1>{data.user.name}</h1>
      <Image src={data.user.image} width={80} height={80} />
      <Button variant="outlined" color="secondary" onClick={() => signOut()}>
        Log Out
      </Button>
    </main>
  );
};

export default MyProfile;
