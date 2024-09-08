'use client'

import React, { useState } from 'react'

const StibeeForm = () => {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // State to manage checkbox and error messages
  const [isChecked, setIsChecked] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Handle form submission
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    let hasError = false

    // Reset error messages
    setEmailError('')
    setNameError('')
    setErrorMessage('')

    // Form field values
    const email = e.currentTarget.email.value
    // @ts-ignore
    const name = e.currentTarget.name.value

    // Email validation
    if (!email) {
      setEmailError('이메일 주소를 입력하세요')
      hasError = true
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('유효한 이메일 주소를 입력해야 합니다.')
      hasError = true
    }

    // Name validation
    if (!name) {
      setNameError('이름을 입력하세요')
      hasError = true
    }

    // Checkbox validation
    if (!isChecked) {
      setErrorMessage('개인정보 수집 및 이용에 동의해야 합니다.')
      hasError = true
    }

    if (hasError) {
      return
    }

    // Submit the form if no errors
    e.currentTarget.submit()
  }

  // Handle input change for email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError('')
  }

  // Handle input change for name
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameError('')
  }

  // Handle checkbox change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
    if (isChecked) {
      setErrorMessage('')
    }
  }

  return (
    <>
      <div id="stb_subscribe">
        <form
          action="https://stibee.com/api/v1.0/lists/M8gqrHhQi-jeQG59Ws9RsEtA-_SqEA==/public/subscribers"
          method="POST"
          target="_blank"
          acceptCharset="utf-8"
          className="stb_form"
          name="stb_subscribe_form"
          id="stb_subscribe_form"
          data-lang=""
          noValidate={true}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-12 gap-8 items-end ">
            <div className="col-span-12 lg:col-span-4">
              <label
                htmlFor="stb_email"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                이메일 주소
              </label>
              <input
                type="email"
                className={`h-12 w-full leading-10 border ${emailError ? 'border-red-500' : 'border-gray-400'} dark:border-gray-600 bg-transparent rounded px-5 transition focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none`}
                id="stb_email"
                name="email"
                placeholder="이메일"
                required
                onChange={handleEmailChange}
              />
              {emailError && (
                <div className="text-red-600 text-sm mt-1">{emailError}</div>
              )}
            </div>
            <div className="col-span-12 lg:col-span-4">
              <label
                htmlFor="stb_name"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                이름
              </label>
              <input
                type="text"
                className={`h-12 w-full leading-10 border ${nameError ? 'border-red-500' : 'border-gray-400'} dark:border-gray-600 bg-transparent rounded px-5 transition focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none`}
                id="stb_name"
                name="name"
                placeholder="이름"
                required
                onChange={handleNameChange}
              />
              {nameError && (
                <div className="text-red-600 text-sm mt-1">{nameError}</div>
              )}
            </div>
            <div className="col-span-12 lg:col-span-4">
              <button
                type="submit"
                className="w-full py-3 px-6 font-medium text-white text-center bg-blue-600 hover:bg-opacity-90 rounded transition"
              >
                무료 다운로드
              </button>
            </div>
          </div>

          <div className="stb_form_policy mt-6">
            <label className="flex items-start text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                id="stb_policy"
                value="stb_policy_true"
                className="mr-2 mt-1"
                required
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="mr-1">(필수)</span>
              <button
                onClick={openModal}
                className="text-blue-600 underline"
                type="button"
              >
                개인정보 수집 및 이용
              </button>
              에 동의합니다.
            </label>
            {errorMessage && (
              <div className="text-red-600 text-sm mt-1">{errorMessage}</div>
            )}
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="stb_form_modal stb_form_policy_text fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded shadow-lg max-w-lg mx-auto">
                <h1 className="font-bold text-lg mb-2">
                  개인정보 수집 및 이용
                </h1>
                <div className="text-gray-600 dark:text-gray-400">
                  뉴스레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다.
                  수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가
                  종료되거나 구독을 해지할 경우 즉시 파기됩니다.
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={closeModal}
                    className="py-2 px-4 bg-gray-300 hover:bg-gray-400 rounded"
                    type="button"
                  >
                    닫기
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  )
}

export default StibeeForm
