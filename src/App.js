import "./App.css";
import TodoInputs from "./components/TodosInputs";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <>
      <div className="container p-6 bg-[#171717] w-full h-screen">
        <h1 className="text-3xl text-[#61dafb] font-bold text-center mt-7 mb-2">
          Todo list apps by @mframadann
        </h1>
        <h5 className="text-sm text-gray-400 mb-7 text-center">
          Build with ReactJS - NodeJS - ExpressJS - PostgreSQL
        </h5>
        <TodoInputs />
        <TodoLists />
      </div>
    </>
  );
}

export default App;
