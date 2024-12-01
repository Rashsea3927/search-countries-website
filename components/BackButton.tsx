'use client';

import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@/components/icons/ArrowBackIcon';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className='mb-12 text-blue-900 dark:text-neutral-0 rounded shadow-xs bg-neutral-0 dark:bg-blue-700 flex gap-2 items-center text-sm px-6 py-2'
    >
      <ArrowBackIcon />
      Back
    </button>
  );
};

export default BackButton;
