import logo from "./logo.svg";
import "./App.css";
import TodoInputs from "./components/TodosInputs";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <>
      <div className="container p-6 bg-[#171717] w-full h-screen">
        <h1 className="text-3xl text-[#61dafb] font-bold text-center m-7">
          Todo list apps
        </h1>
        <TodoInputs />
        <TodoLists />
      </div>
    </>
  );
}

export default App;
