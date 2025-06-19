'use client'
import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../public/images/plus_icon_emerald.svg';
import { useRouter } from 'next/navigation';
import { NationContext } from '../globalstates/nationinfo';

export default function Homelist() {
  const router = useRouter();

  const { setNationdata } = useContext(NationContext);

  const handleNationdata = (item: { flag: string, common: string }) => {
    if (item.common != 'India') {
      setNationdata({
        flag: item.flag,
        name: item.common,
        loc: `https://maps.google.com/maps?q=${item.common}&output=embed`,
      });
    }
  }

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>) => {
    evt.preventDefault();
    router.push('/list');
  }

  return (
    <div
      className="overflow-x-auto px-2 py-3 mb-3"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <div className="flex gap-3 min-w-max">
        {[
          {
            title: 'Republic of India',
            desc: "It's also known as ",
            flag: "https://flagcdn.com/w320/in.png",
            common: 'India',
          },
          {
            title: 'Russian Federation',
            desc: "It's also known as ",
            flag: "https://flagcdn.com/w320/ru.png",
            common: 'Russia',
          },
          {
            title: 'United States of America',
            desc: "It's also known as ",
            flag: "https://flagcdn.com/w320/us.png",
            common: 'United States',
          },
          {
            title: 'State of Israel',
            desc: "It's also known as ",
            flag: "https://flagcdn.com/w320/il.png",
            common: 'Israel',
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between w-[90vw] sm:w-[400px] h-[55vh] p-4 bg-emerald-100 border border-emerald-300 rounded-xl shadow-md flex-shrink-0"
          >
            <h4 className="font-semibold text-emerald-800 mb-2 text-base">{item.title}</h4>
            <div className="w-full mb-2 rounded-md overflow-hidden flex items-center">
              <Image
                src={item.flag}
                alt={`${item.title} flag`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-[80%] object-contain"
              />
            </div>

            <p className="text-sm text-gray-700 whitespace-normal">
              {item.desc}{item.common}....
              <Link onClick={() => handleNationdata(item)} className="text-blue-600 hover:underline ml-1" href="/info">
                Know more
              </Link>
            </p>
          </div>
        ))}

        <div className="flex items-center justify-center w-[90vw] sm:w-[400px] p-4 bg-emerald-100 border border-emerald-300 rounded-xl shadow-md flex-shrink-0 h-auto">
          <Image src={Icon} alt="addicon" className="max-w-[100px] h-auto hover:scale-[110%]" onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}
