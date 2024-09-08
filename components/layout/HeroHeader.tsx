import React from 'react'
// import SubscribeForm from './SubscribeForm'

const HeroHeader = () => {
  return (
    <section
      className="ezy__header29_GdhJlN03 py-32 md:py-52 text-white bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          'url(https://cdn.easyfrontend.com/pictures/hero/hero_30.png)',
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="md:max-w-5xl mx-auto flex justify-center items-center text-center">
          <div>
            <h1 className="mb-2 text-2xl font-bold leading-tight md:text-[62px]">
              바로 써먹는 랜딩페이지 체크리스트
              <br /> 한시적 무료 배포
            </h1>

            <p className="text-xl opacity-80 leading-snug px-12 py-6">
              전문가들이 숨겨둔 카피라이팅의 비밀을 알고 싶으신가요? 프로들만
              알고 있는 카피라이팅 비밀, 당신도 알고 싶지 않으신가요? 이 무료
              체크리스트 하나로 전환율이 폭발하는 랜딩페이지를 만들어 보세요.
            </p>
            <div className="sm:max-w-lg mx-auto flex justify-center"></div>
          </div>
        </div>
        {/* <SubscribeForm /> */}
      </div>
    </section>
  )
}

export default HeroHeader
