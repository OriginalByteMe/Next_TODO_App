import TodoAdd from '@/components/common/TodoAdd';
import TodoItem from '@/components/common/TodoItem';
import PrimaryLayout from '@/components/layouts/PrimaryLayout';
import { RootState } from '@/redux/store';
import { Todo } from '@/types/interfaces';
import { PageWithLayout } from '@/types/page';
import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoPage(_: PageWithLayout) {
  const todos = useSelector((state: RootState) => state.todo.todos);
  console.log('🚀 ~ file: TodoApp.tsx:12 ~ TodoPage ~ todos:', todos);

  return (
    <section className="flex items-center justify-center w-screen h-screen ">
      <TodoAdd />
      <ul>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} description={todo.description} completed={todo.completed} />
        ))}
      </ul>
    </section>
  );
}

TodoPage.getLayout = (page: React.ReactNode) => <PrimaryLayout title="Todo Page">{page}</PrimaryLayout>;
