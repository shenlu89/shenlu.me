import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-row relative justify-between w-full'>
      <div className='flex flex-col relative w-full'>
        <h1 className='font-extrabold text-2xl tracking-tight mb-4'>Shen Lu</h1>
        <p className='text-gray-600 dark:text-gray-400 mb-4'>
          Developer and Writer
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          All good things come to those who wait.
        </p>
      </div>
      <div className='relative mr-auto'>
        <Image
          className='rounded-full'
          alt='Shen Lu'
          width={120}
          height={120}
          src={'/images/avatar.jpg'}
          priority
        />
      </div>
    </div>
  );
}
