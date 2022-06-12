import { useState } from "react";
import axios from "axios";

const TodoInputs = () => {
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendData = await axios({
        method: "POST",
        url: "http://localhost:4000/rest/add-todos",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          description: description,
        },
      });

      alert("Success add data!");
      console.log(sendData);
      window.location = "/";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="flex justify-center" method="post" onSubmit={onSubmit}>
        <div className="w-full flex flex-row md:w-2/5 lg:w-2/5 sm:w-80 p-3 h-15 rounded-xl bg-[#262626]">
          <input
            type="text"
            placeholder="Type todo list here.."
            className="flex-0 text-white w-[75%] h-[2.27rem] p-3 rounded-md bg-transparent outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="flex-1 bg-[#61dafb] h-[2.27rem] rounded-xl text-slate-900"
          >
            {" "}
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoInputs;
