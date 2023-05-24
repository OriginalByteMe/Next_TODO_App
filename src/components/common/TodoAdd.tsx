import { addTodo } from '@/redux/slices/todoSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TodoAdd: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    dispatch(
      addTodo({
        id: Date.now(),
        title: inputValue,
        description: '',
        completed: false,
        subtask: [],
      }),
    );
    setInputValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Type here"
        className="w-full max-w-xs input input-bordered"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-circle">
        Add Todo
      </button>
    </form>
  );
};

export default TodoAdd;
