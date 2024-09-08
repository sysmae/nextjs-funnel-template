import React from 'react'
import Image from 'next/image'
import SubscribeForm from './forms/SubscribeForm'
import StibeeForm from './forms/StibeeForm'

const About = () => {
  return (
    <section className="ezy__about12_vbvhEReC pt-14 md:pt-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5 justify-center items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex justify-center lg:justify-start lg:ml-12">
              <Image
                src="/세오퍼널체크리스트목업.png"
                alt="세오퍼널체크리스트"
                width={500}
                height={500}
                quality={100}
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 border lg:border-gray-500 lg:rounded-xl md:px-4 lg:px-8 py-12">
            <div className="lg:px-7">
              <h1 className="text-2xl md:text-6xl leading-tight font-medium mb-2">
                한시적 무료 배포
              </h1>
              <p className="text-lg leading-normal opacity-75 my-6">
                전문가들이 숨겨둔 카피라이팅의 비밀을 알고 싶으신가요?
                <br />
                프로들만 알고 있는 카피라이팅 비밀, 당신도 알고 싶지 않으신가요?
                이 무료 체크리스트 하나로 전환율이 폭발하는 랜딩페이지를 만들어
                보세요.{' '}
              </p>
              <div className="mt-12">
                <StibeeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
