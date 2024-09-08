import React from 'react'

interface SubscribeFormProps {
  btnText?: string
}

const SubscribeFrom = ({ btnText }: SubscribeFormProps) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://resource.stibee.com/subscribe/stb_subscribe_form_style.css"
      />

      <form
        method="post"
        action="https://stibee.com/api/v1.0/lists/M8gqrHhQi-jeQG59Ws9RsEtA-_SqEA==/public/subscribers"
        target="_blank"
        acceptCharset="utf-8"
        className="stb_form"
        name="stb_subscribe_form"
        id="stb_subscribe_form"
        data-lang=""
        noValidate={true}
      >
        <div className="grid grid-cols-12 gap-8 items-center lg:pb-8">
          <div className="col-span-12 lg:col-span-4 ">
            <input
              name="name"
              className="h-12 w-full leading-10 border border-gray-400 dark:border-gray-600 bg-transparent rounded px-5 transition focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none"
              type="text"
              id="stb_name"
              placeholder="이름"
              required
            />
            <div className="stb_form_msg_error" id="stb_name_error"></div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <input
              name="email"
              className="h-12 w-full leading-10 border border-gray-400 dark:border-gray-600 bg-transparent rounded px-5 transition focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none"
              type="text"
              id="stb_email"
              placeholder="이메일"
              required
            />
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div>
              <button className="w-full py-3 px-8 font-medium text-white text-center bg-blue-600 hover:bg-opacity-90 rounded transition">
                {btnText ?? '무료 PDF 다운로드'}
              </button>
            </div>
          </div>
        </div>
        <div className="stb_form_policy">
          <label>
            <input type="checkbox" id="stb_policy" value="stb_policy_true" />
            <span>(필수)</span>
            <button
              id="stb_form_modal_open"
              data-modal="stb_form_policy_modal"
              className="stb_form_modal_open_btn"
              type="button"
            >
              개인정보 수집 및 이용
            </button>
            에 동의합니다.
          </label>
          <div className="stb_form_msg_error" id="stb_policy_error"></div>
          <div
            className="stb_form_modal stb_form_policy_text blind"
            id="stb_form_policy_modal"
          >
            <div className="stb_form_modal_body">
              <h1 className="stb_form_modal_title">개인정보 수집 및 이용</h1>
              <div className="stb_form_modal_text">
                뉴스레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다.
                수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가
                종료되거나 구독을 해지할 경우 즉시 파기됩니다.
              </div>
              <div className="stb_form_modal_btn">
                <button
                  id="stb_form_modal_close"
                  className="stb_form_modal_close_btn"
                  data-modal="stb_form_policy_modal"
                  type="button"
                >
                  닫기
                </button>
              </div>
            </div>
            <div className="stb_form_modal_bg" id="stb_form_modal_bg"></div>
          </div>
        </div>
      </form>
    </>
  )
}

export default SubscribeFrom
