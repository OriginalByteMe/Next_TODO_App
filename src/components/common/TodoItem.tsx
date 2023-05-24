interface TodoItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const todoItem = (props: TodoItemProps) => {
  return (
    <div className="todo-item">
      <div className="todo-item__title">{props.title}</div>
      <div className="todo-item__description">{props.description}</div>
    </div>
  );
};

export default todoItem;
