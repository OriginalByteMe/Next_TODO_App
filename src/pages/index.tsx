import SearchBar from '@/components/common/SearchBar';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PrimaryLayout from 'src/components/layouts/PrimaryLayout';
import { PageWithLayout } from 'src/types/page';

export default function Home(_: PageWithLayout) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleTextChange = (value: string) => {
    setText(value);
  };

  return (
    <>
      <section className="flex items-center justify-center w-screen h-screen bg-slate-200">
        <SearchBar onSearch={handleTextChange} />
      </section>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => <PrimaryLayout title="Home Page">{page}</PrimaryLayout>;
