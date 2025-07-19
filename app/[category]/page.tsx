import TodoList from "../components/todoList";
import { Category } from "../variables";

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const categoryParam = decodeURIComponent(params.category) as Category;

  return (
<>
<TodoList category={categoryParam}/>
</>
  );
}
