"use client";

import useModalStore from "../../zustand-hooks/consent-modal";
import React, { FormEvent, useEffect, useState } from "react";
import { axiosInstance } from "../../constants/axiosInstance";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const UserConsentModal = () => {
  const {
    isOpen,
    closeModal,
    paymentLink,
    setTermsAndConditions,
    iAgree,
    setIAgree,
    title,
  } = useModalStore();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!paymentLink) toast.error("Unable able to proceed with checkout");

    axiosInstance
      .post(`/v1/contacts/`, {
        email: email,
      })
      .then(() => {
        Cookies.set("user_email", email, { expires: 7 });
        router.push(
          `${paymentLink}?prefilled_email=${encodeURIComponent(email)}`
        );
        setIsLoading(false);
        closeModal();
      })
      .catch((error) => {
        if (error instanceof Error)
          toast.error(error?.message, { id: "checkout" });
        toast.error(
          "we are unable to process you request right now. Please try later",
          { id: "checkout" }
        );
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const savedEmail = Cookies.get("user_email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  if (!isOpen) return null;
  return (
    <div className="w-full h-screen fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Modal */}
      <div tabIndex={-1} className="relative z-10 w-full max-w-2xl p-4">
        <div className="bg-white rounded-lg shadow-sm text-gray-600">
          <div className="flex items-center justify-between px-4 pt-4 rounded-t border-gray-200">
            <h3 className="text-xl font-semibold">
              {title || "Become a Wovvo Founding Member"}
            </h3>
            <button
              type="button"
              onClick={() => closeModal()}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-800 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-4">
              <label className="block mb-2 font-medium ">Email Address</label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:outline-primary block w-full p-2.5 "
                placeholder="example@company.com"
                required
                value={email}
                onChange={(event) => setEmail(event?.target?.value)}
              />
              <div className="inline-flex items-center mt-3">
                <label className="flex items-center cursor-pointer relative">
                  <input
                    checked={iAgree}
                    required
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-red-600 checked:border-red-600"
                    id="check2"
                    onChange={() => setIAgree(!iAgree)}
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <p
                  onClick={() => setTermsAndConditions(true)}
                  className="ml-2 hover:text-primary hover:underline cursor-pointer"
                >
                  I agree with the terms and conditions
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-b">
              <button
                type="submit"
                // onClick={() => proceedWithData()}
                className="hover:bg-primary-dark transition-colors text-white bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center flex gap-3"
              >
                {isLoading && (
                  <svg
                    aria-hidden="true"
                    className="inline w-5 h-5 animate-spin text-white/30 fill-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                )}
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserConsentModal;
