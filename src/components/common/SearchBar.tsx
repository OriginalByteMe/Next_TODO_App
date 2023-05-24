import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import UseAnimations from 'react-useanimations';
import searchToX from 'react-useanimations/lib/searchToX';
const SearchBar: React.FC = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTextarea, setIsTextarea] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleIconClick = () => {
    setInputVisible(true);
  };

  const handleInputBlur = () => {
    setInputVisible(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.length >= 20) {
      setIsTextarea(true);
    }
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleTextareaBlur = () => {
    setIsTextarea(false);
  };

  const handleTextareaKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Escape') {
      setIsTextarea(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="relative" ref={wrapperRef}>
      <motion.div
        className="absolute inset-y-0 left-0 z-10 flex items-center pl-2 cursor-pointer"
        initial={{ x: '50%' }}
        animate={{ x: inputVisible ? '0%' : '50%' }}
        transition={{ duration: 0.5 }}
      >
        <UseAnimations
          animation={searchToX}
          size={32}
          reverse={inputVisible}
          onClick={() => {
            setInputVisible(!inputVisible);
          }}
        />
      </motion.div>
      <AnimatePresence>
        {inputVisible && (
          <>
            {isTextarea ? (
              <motion.textarea
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                className="w-full py-2 pl-10 pr-4 text-sm font-medium leading-5 text-gray-700 placeholder-gray-400 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-md resize-none focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:placeholder-gray-600 sm:text-sm sm:leading-5"
                value={inputValue}
                placeholder="Search..."
                onChange={handleTextareaChange}
                onBlur={handleTextareaBlur}
                onKeyDown={handleTextareaKeyDown}
                initial={{ opacity: 0, height: '0px' }}
                animate={{ opacity: 1, height: `${inputRef.current?.scrollHeight}px` }}
                exit={{ opacity: 0, height: '0px' }}
                transition={{ duration: 0.3 }}
                style={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              />
            ) : (
              <motion.input
                ref={inputRef as React.RefObject<HTMLInputElement>}
                className="w-full py-2 pl-10 pr-4 text-sm font-medium leading-5 text-gray-700 placeholder-gray-400 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-full shadow-md focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:placeholder-gray-600 sm:text-sm sm:leading-5"
                type="text"
                value={inputValue}
                placeholder="Search..."
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                initial={{ opacity: 0, width: '0%' }}
                animate={{ opacity: 1, width: '100%' }}
                exit={{ opacity: 0, width: '0%' }}
                transition={{ duration: 0.3 }}
                style={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                }}
              />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
