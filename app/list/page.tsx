'use client';

import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import Loading from '../components/loader';
import { NationContext } from '../globalstates/nationinfo';
import Link from 'next/link';

type Country = {
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
  };
};

const getData = async (url: string): Promise<Country[]> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

const PAGE_SIZE = 16;

export default function List() {
  const { setNationdata } = useContext(NationContext);

  const [data, setData] = useState<Country[]>([]);
  const [page, setPage] = useState(1);

  const { data: fulldata, isLoading, error } = useSWR<Country[]>(
    'https://restcountries.com/v3.1/all?fields=name,flags',
    getData
  );

  const [firstmount, setFirstMount] = useState<number>(0);

  useEffect(() => {
    if (!isLoading) {
      setFirstMount(prev => prev + 1);
    }
  }, [isLoading]);

  const handleNationdata = (item: { flags: { png: string }, name: { common: string } }) => {
    setNationdata({
      flag: item.flags.png,
      name: item.name.common,
      loc: `https://maps.google.com/maps?q=${item.name.common}&output=embed`,
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.innerHeight + window.scrollY + 1 >= document.documentElement.scrollHeight) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    if (fulldata) {
      const newItems = fulldata.slice(page * PAGE_SIZE - PAGE_SIZE, page * PAGE_SIZE);
      setData(prev => [...prev, ...newItems]);
    }
  }, [page, fulldata]);

  if (isLoading && firstmount < 2) return <Loading />;
  if (error) return <div className="p-4 text-red-600">Error loading data</div>;

  return (
    <>
      <div className='flex justify-center items-center mt-[2px] mb-[2px]'>
        <h3 className="text-[6vw] font-bold text-emerald-900">Explore the World</h3>
      </div>
      <div className="px-2 py-3 mb-3">
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between h-[40vh] p-4 bg-emerald-100 border border-emerald-300 rounded-xl shadow-md"
            >
              <h4 className="font-semibold text-emerald-800 mb-2 text-base">
                {item.name.official}
              </h4>

              <div className="relative w-full h-[70%] mb-2 rounded-md overflow-hidden">
                <Image
                  src={item.flags.png}
                  alt={item.flags.alt || `${item.name.common} flag`}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>

              <p className="text-sm text-gray-700 whitespace-normal">
                {`It's also known as ${item.name.common}....`}
                <Link
                  onClick={() => handleNationdata(item)}
                  className="text-blue-600 hover:underline ml-1"
                  href="/info"
                >
                  Know more
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
