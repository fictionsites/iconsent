import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";

export default function Modal(props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="ic-fixed ic-z-10 ic-inset-0 ic-overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => {}}
      >
        <div className="ic-flex ic-items-end ic-justify-center ic-min-h-screen ic-pt-4 ic-px-4 ic-pb-20 ic-text-center sm:ic-block sm:ic-p-0">
          <Transition.Child
            as={Fragment}
            enter="ic-ease-out ic-duration-300"
            enterFrom="ic-opacity-0"
            enterTo="ic-opacity-100"
            leave="ic-ease-in ic-duration-200"
            leaveFrom="ic-opacity-100"
            leaveTo="ic-opacity-0"
          >
            <Dialog.Overlay className="ic-fixed ic-inset-0 ic-bg-gray-500 ic-bg-opacity-75 ic-transition-opacity ic-backdrop-blur" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="ic-hidden sm:ic-inline-block sm:ic-align-middle sm:ic-h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ic-ease-out ic-duration-300"
            enterFrom="ic-opacity-0 ic-translate-y-4 sm:ic-translate-y-0 sm:ic-scale-95"
            enterTo="ic-opacity-100 ic-translate-y-0 sm:ic-scale-100"
            leave="ic-ease-in ic-duration-200"
            leaveFrom="ic-opacity-100 ic-translate-y-0 sm:ic-scale-100"
            leaveTo="ic-opacity-0 ic-translate-y-4 sm:ic-translate-y-0 sm:ic-scale-95"
          >
            <div className="ic-inline-block ic-align-bottom ic-bg-white ic-rounded-lg ic-px-4 ic-pt-5 ic-pb-4 ic-text-left ic-overflow-hidden ic-shadow-xl ic-transform ic-transition-all sm:ic-my-8 sm:ic-align-middle sm:ic-max-w-md sm:ic-w-full sm:ic-p-6">
              <div>
                <div className="ic-mx-auto ic-flex ic-items-center ic-justify-center ic-h-12 ic-w-12 ic-rounded-full ic-bg-red-100">
                  <ExclamationIcon
                    className="ic-h-6 ic-w-6 ic-text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="ic-mt-3 ic-text-center sm:ic-mt-5">
                  <Dialog.Title
                    as="h3"
                    className="ic-m-0 ic-normal-case ic-text-xl ic-font-medium ic-text-gray-900"
                  >
                    You must be 18+ to view {props.name ?? "this site"}
                  </Dialog.Title>
                  <div className="ic-mt-2">
                    <p className="ic-m-0 ic-text-base ic-text-gray-500">
                      You must be at least eighteen years old to view this
                      content. Are you over eighteen and willing to see adult
                      content?
                    </p>
                  </div>
                </div>
              </div>
              <div className="ic-mt-5 sm:ic-mt-6 sm:ic-grid sm:ic-grid-cols-2 sm:ic-gap-3 sm:ic-grid-flow-row-dense">
                <button
                  type="button"
                  className="ic-w-full ic-inline-flex ic-justify-center ic-rounded-md ic-border ic-border-solid ic-border-transparent ic-shadow-sm ic-px-4 ic-py-2 ic-bg-blue-600 ic-text-base ic-font-medium ic-text-white hover:ic-bg-blue-700 focus:ic-outline-none focus:ic-ring-2 focus:ic-ring-offset-2 focus:ic-ring-blue-500 sm:ic-col-start-2"
                  onClick={props.onConsent}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="ic-mt-3 ic-w-full ic-inline-flex ic-justify-center ic-rounded-md ic-border ic-border-solid ic-border-transparent ic-shadow-sm ic-px-4 ic-py-2 ic-bg-blue-600 ic-text-base ic-font-medium ic-text-white hover:ic-bg-blue-700 focus:ic-outline-none focus:ic-ring-2 focus:ic-ring-offset-2 focus:ic-ring-blue-500 sm:ic-mt-0 sm:ic-col-start-1"
                  onClick={props.onDissent}
                  ref={cancelButtonRef}
                >
                  No
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
