'use client';

import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { accordionItems } from '~/constants/accordion-items';

export const Accordion: React.FC = () => (
  <div className="mx-6 flex flex-col gap-8 rounded-xl bg-white p-6 lg:w-[40rem] lg:p-12">
    <div className="flex items-center gap-6">
      <Image
        className="h-8 w-8 lg:h-10 lg:w-10"
        src="/icon-star.svg"
        alt="Star"
        width={40}
        height={41}
      />

      <h1 className="text-dark-purple text-4xl font-bold lg:text-5xl">FAQs</h1>
    </div>

    <div className="flex flex-col gap-4 lg:gap-6">
      {accordionItems.map(({ question, answer }, index) => (
        <Disclosure key={index} defaultOpen={index == 0}>
          {({ open }) => (
            <>
              <Disclosure.Button className="group flex w-full items-center justify-between gap-4">
                <span className="text-dark-purple group-hover:text-purple group-focus:text-purple text-start text-lg font-semibold transition-colors">
                  {question}
                </span>

                <Image
                  src={open ? '/icon-minus.svg' : '/icon-plus.svg'}
                  alt={open ? '-' : '+'}
                  width={30}
                  height={31}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="text-grayish-purple">{answer}</Disclosure.Panel>

              {index !== accordionItems.length - 1 && <hr />}
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </div>
);
