'use client';
import { useEffect, useState } from 'react';

export default function Modal({ isOpen, onClose, title, children, className }: any) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 300); // match with animation duration
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <button
        onClick={() => {}}
        className="absolute right-0 top-0 h-10 w-10 rounded-full bg-slate-500 text-4xl text-white hover:text-gray-800"
      >
        &#x2715;
      </button>
      <div
        className={`${className} w-11/12 max-w-lg transform animate-bounce rounded-lg p-6 shadow-lg transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <div className="mt-4">{children}</div>
        <div className="mt-6 flex justify-end">
          {/* <button
            onClick={onClose}
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
}
