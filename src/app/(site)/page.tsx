/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import TitleSection from '@/components/landing-page/title-section';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Banner from '../../../public/appBanner.png';
import Banner2 from '../../../public/appBanner2.png';
import Cal from '../../../public/cal.png';
import Diamond from '../../../public/icons/diamond.svg';
import CheckIcon from '../../../public/icons/check.svg';
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from '@/lib/contants';
import { randomUUID } from 'crypto';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import CustomCard from '@/components/landing-page/custom-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion'
import client1 from  "../../../public/client1.png"
import client2 from "../../../public/client2.png"
import client3 from "../../../public/client3.png"
import client4 from "../../../public/client4.png"
import client5 from "../../../public/client5.png"
import client6 from "../../../public/client6.png"
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';


const HomePage = () => {

  return (
    <>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-20
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center items-center justify-center flex flex-col"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="bg-foreground
          p-[2px]
          mt-12
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-yellow-200
          sm:w-fit
          w-fit
          border hover:border-primary dark:hover:border-foreground
        "
        >
            <Link href={'/login'}>
              <button className='relative hover:text-background dark:drop-shadow-[0_0_0.05rem_green] text-foreground py-2 px-3 rounded-lg font-medium text-md bg-gradient-to-b from-secondary to-primary shadow-[0px_0px_12px_#cdebc4] '>
                <div className='absolute inset-0 '>
                    <div className='border rounded-lg border-foreground/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,background,transparent)]'></div>
                    <div className='absolute inset-0 border-foreground/40 rounded-lg [mask-image:linear-gradient to_top,background,transparent'></div>
                    <div className='absolute inset-0 shadow-[0_0_10px_rgb(69,255,122,.7)_inset] rounded-lg'></div>
                </div>
                <span>Get Loba Free</span>
              </button>
            </Link>
        </div>
        <Button
            
            className="cursor-default mb-4 hover:bg-background bg-background shadow-none text-background dark:bg-background dark:shadow-none dark:text-background
          "
          >
            Get Loba Free
          </Button>
        <div
          className="md:mt-[-90px] 
          sm:w-fit
          w-[460px]
          flex
          justify-center
          items-center
          mt-[-90px]
          relative
          sm:ml-0
          
        "
        >
          <Image
            src={Banner}
            alt="Application Banner"
            // className='invert dark:invert-0'
          />
          {/* <div>
          <Image
            src={Banner2}
            alt="Application Banner"
            className='dark:hidden'
          />
          </div> */}
          <div
            className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden
          flex
          after:content['']
          after:dark:from-brand-dark
          after:to-transparent
          after:from-background
          after:bg-gradient-to-l
          after:right-0
          after:bottom-0
          after:top-0
          after:w-20
          after:z-10
          after:absolute

          before:content['']
          before:dark:from-brand-dark
          before:to-transparent
          before:from-background
          before:bg-gradient-to-r
          before:left-0
          before:top-0
          before:bottom-0
          before:w-20
          before:z-10
          before:absolute
          max-w-6xl md:max-w-4xl sm:max-w-2xl mx-auto
          flex-1 [mask-image:linear-gradient(to_right,transparent,black_20%,black,80%,transparent)]
        "
        >
          {[...Array(2)].map((arr) => (
            <div
              key={arr}
              className="flex
                flex-nowrap
                animate-slide
          "
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className=" relative
                    w-[80px] md:w-[40px]
                    m-20
                    shrink-0
                    flex
                    items-center
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="hover:grayscale object-contain max-w-none"
                  />
                </div>
                
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="px-4
        sm:px-6
        flex
        justify-center
        items-center
        flex-col
        relative
      "
      >
        <div
          className="w-[30%]
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-primary/50
          -z-10
          top-22
        "
        />
        <TitleSection
          title="Keep track of your meetings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pill="Features"
        />
        
        <div
          className="mt-10
          max-w-[400px]
          flex
          justify-center
          items-center
          relative
          sm:ml-0
          rounded-2xl
          border-2
          border-primary/60 
          border-opacity-10
          shadow-[0px_0px_12px_#94e0a5]
        "
        >
          <Image
            src={Cal}
            alt="Banner"
            className="rounded-2xl"
          />
        </div>
      </section>
      <section className="relative max-w-6xl mx-auto">
        <div
          className="w-full
          blur-[120px]
          rounded-full
          h-32
          absolute
          bg-primary/50
          -z-100
          top-56
        "
        />
        <div
          className="mt-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black,90%,transparent)]
          px-4
          sm:px-6 
          flex
          flex-col
          flex-1
        "
        >
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={uuidv4()}
              className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start', {
                  'flex-row-reverse': index === 1,
                  'animate-[slide_250s_linear_infinite]': true,
                  'animate-[slide_250s_linear_infinite_reverse]': index === 1,
                  'ml-[100vw]': index === 1,
                }),
                'hover:paused' 
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="w-[500px] border bg-card px-2 py-2 transition-colors hover:border-primary/50 hover:bg-primary/5 hover:dark:border-primary hover:dark:bg-primary/30 dark:border-primary/55 border-primary/30 shadow-xl shadow-primary/20 dark:border-opacity-5 max-w-md flex-none 
                  shrink-0s
                  rounded-3xl
                  dark:bg-gradient-to-t bg-gradient-to-t
                  dark:from-border dark:to-primary/30 [mask-image:linear-gradient(to_right,transparent,background_10%,background,90%,transparent)]
                "
                  cardHeader={
                    <div
                      className="flex
                      items-center
                      gap-4
                      
                  "
                    >
                      <Avatar >
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>LO</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          @{testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="mt-20
        px-4
        sm:px-6
      "
      >
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div
          className="flex 
        flex-col-reverse
        sm:flex-row
        gap-4
        justify-center
        sm:items-stretch
        items-center
        mt-10
        "
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                'w-[300px] rounded-2xl dark:bg-secondary/40 background-blur-3xl relative group border bg-card px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-yellow-200/50 hover:dark:bg-secondary/30  dark:border-opacity-5',
                {
                  'border-primary/50':
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle
                  className="text-2xl
                  font-semibold
              "
                >
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="hidden dark:block w-full blur-[120px] rounded-full h-32
                        absolute
                        bg-primary/80
                        -z-10
                        top-0
                      "
                      />
                      <Image
                        src={Diamond}
                        alt="Pro Plan Icon"
                        className="absolute top-6 right-6"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span
                    className="font-normal 
                    text-2xl
                "
                  >
                    R{card.price}
                  </span>
                  {+card.price > 0 ? (
                    <span className="dark:text-primary/80 ml-1">
                      /mo
                    </span>
                  ) : (
                    ''
                  )}
                  <p className="dark:text-primary/80">
                    {card.description}
                  </p>
                  <Button
                    variant="outline"
                    className="whitespace-nowrap w-full mt-4 bg-primary/80 border border-yellow-400/50 hover:border-yellow-400 hover:bg-gradient-to-r from-primary/80 to-yellow-300"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? 'Go Pro'
                      : 'Get Started'}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="font-normal
                  flex
                  mb-2
                  flex-col
                  gap-4
                "
                >
                  <small>{card.highlightFeature}</small>
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex
                      items-center
                      gap-2
                    "
                    >
                      <Image
                        src={CheckIcon}
                        alt="Check Icon"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
      <section className="py-20 md:py-24 px-4 overflow-hidden
      sm:px-6
      mt-2
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center">
      <div className='relative'>
        <div className='flex items-center gap-5 max-w-3xl md:max-w-xl sm:max-w-md relative justify-center'>
          <div className='flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black,80%,transparent)]'>
            <motion.div 
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
            className='flex flex-none gap-14 pr-14 -translate-x-1/2'>
              {[client1, client2, client3, client4, client5, client6, client1, client2, client3, client4, client5, client6, client1, client2, client3, client4, client5, client6].map((logo) => (
                <Image src={logo.src} key={logo.src} alt='Trusted Brands' className='h-6 w-auto' width={100} height={6}/>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;