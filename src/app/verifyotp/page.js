"use client";
import React, { useState } from 'react'
import Image from "next/image";
import Otpbanner from "@/assets/common/otpbanner.png"
import Logo from "@/assets/logo.png";
// import {useSearchParams } from 'next/navigation';

const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(10);

// const searchParams = useSearchParams()
 
//   const username = searchParams.get('username');
//   const phone = searchParams.get('phone');
//   console.log(username,phone,"SERACH")

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleResend = () => {
    // Reset timer logic here
    setTimer(10);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 justify-center">
        <div className="justify-self-center p-5 md:order-none order-2">
          <Image src={Otpbanner} alt="Login Banner" className="w-full" />
        </div>
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="w-full max-w-sm bg-white rounded-lg shadow-2xl p-8">
            {/* Logo */}
            <div className="flex justify-center mb-14">
              <Image src={Logo} alt="Drugcarts Logo" className="h-14" />
            </div>
            {/* OTP Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              OTP Verification
            </h2>
            <p className="text-sm text-gray-600 text-center mb-6">
              Enter your verification code we just sent to your number
            </p>

            {/* OTP Inputs */}
            <div className="flex justify-center space-x-4 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              ))}
            </div>

            {/* Resend Timer */}
            <div className="text-right text-sm text-gray-600 mb-4">
              Resend {timer > 0 ? `0:${timer.toString().padStart(2, "0")}` : ""}
            </div>

            {/* Verify Button */}
            <button
              type="button"
              className="w-full bg-bgcolor text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Verify
            </button>

            {/* Resend Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Didn’t receive code?{" "}
                <button
                  onClick={handleResend}
                  disabled={timer > 0}
                  className={`${timer > 0 ? "text-bgcolor" : "text-indigo-600"
                    } hover:underline`}
                >
                  Resend
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OTP;