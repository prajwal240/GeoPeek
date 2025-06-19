'use client'
import React, { useContext, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Loading from '../components/loader';
import { NationContext } from '../globalstates/nationinfo';

export default function Info() {

  const { nationdata } = useContext(NationContext);

  const [text, setText] = useState<string | null>(null);
  const apiUrl = process.env.NEXT_PUBLIC_GEMINI_API;

  const checkAPI = async () => {
    setText(null);
    const res = await fetch(`${apiUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Provide a detailed summary about the country ${nationdata.name}. Include the following information:

1. Independence status (whether it is independent or not)
2. Official and commonly spoken languages
3. Capital city
4. Currency name and symbol
5. Region and subregion
6. Whether the country is landlocked or not
7. Total area in square kilometers
8. UN member status

In addition to this, include:

9. A few more useful or interesting facts (e.g., population, major industries, famous landmarks, or unique traditions)
10. A quote telling some special thing about the country in a regional language

Ensure the output is formatted in clean, readable **paragraphs** with **bold headings** and **bullet points** where appropriate. Do not output raw JSON or list-style formatting only — write it like a human-written informative article or travel guide.
Note: Don't give any prefix or suffix like 'Here is your summary' or 'Your summary ends here'.`
              }
            ]
          }
        ]
      })
    });

    const data = await res.json();
    const countryText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    setText(
      countryText?.replace(/(?<!\n)\n(?!\n)/g, '\n\n') || 'No response received.'
    );
  };

  useEffect(() => {
    checkAPI();
  }, [nationdata]);

  return (
    <div>
      {!text ? <Loading /> :
        <><div className='flex justify-center items-center mt-[2px] mb-[2px]'>
          <h3 className="text-[6vw] font-bold text-emerald-900">{nationdata.name}</h3>
        </div>

          <div className='flex justify-center items-center'>
            <Image
              src={nationdata.flag}
              alt='Israel flag'
              width={0}
              height={0}
              sizes="100vw"
              className="w-[70vw] h-auto object-contain lg:w-[40vw] border-2 border-black rounded-md"
            />
          </div>


          <div className="w-full h-auto py-6 px-4 text-justify leading-relaxed">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>

          <div className='flex justify-center items-center'>
            <iframe
              src={nationdata.loc}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='mx-[2px] mb-[2px] w-[90vw] h-[50vh] rounded-md border-[1px] border-emerald-900'
            />
          </div></>}
    </div>
  );
}
