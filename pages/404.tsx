import { TbError404 } from 'react-icons/tb';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@/components';

const NotFound = () => {
  const router = useRouter();
  return (
    <article className="flex items-center justify-center flex-col h-full w-full gap-4">
      <h1 className="text-4xl font-semibold text-primary-light">
        There was an error!
      </h1>
      <p className="text-2xl font-semibold text-slate-800">
        The page you are looking for does not exist.
      </p>
      <TbError404 className="h-52 w-52 text-primary-light" />
      <div className="flex flex-col items-center justify-center gap-4 w-fit">
        <Link href="/">
          <Button className="!px-8" variant="primary">
            Go to Homepage
          </Button>
        </Link>
        <Button
          className="!w-full"
          variant="primary-dark"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </div>
    </article>
  );
};

export default NotFound;
