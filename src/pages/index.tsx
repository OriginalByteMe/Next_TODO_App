import { useRouter } from 'next/router';
import UseAnimations from 'react-useanimations';
import searchToX from 'react-useanimations/lib/searchToX';
import PrimaryLayout from 'src/components/layouts/PrimaryLayout';
import { PageWithLayout } from 'src/types/page';

export default function Home(_: PageWithLayout) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/TodoApp');
  };

  return (
    <>
      <section className="flex items-center justify-center w-screen h-screen ">
        <button className="btn glass" onClick={handleButtonClick}>
          <UseAnimations animation={searchToX} size={32} />
        </button>
      </section>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <PrimaryLayout title="Home Page">{page}</PrimaryLayout>;
