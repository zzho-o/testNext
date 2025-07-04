import Calendar from "./Calendar";
import ToDoList from "./ToDoList";

const HomeRightSide = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <Calendar />
      <div className="mt-[12px]" />
      <ToDoList />
    </div>
  );
};

export default HomeRightSide;
