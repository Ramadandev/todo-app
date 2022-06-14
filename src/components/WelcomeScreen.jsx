const Welcome = () => {
  return(
    <>
      <div className="container p-6 bg-[#171717] w-full h-screen">
        <h1 className="text-3xl font-bold text-center mt-10 text-[#61dafb]">Welcome to todo list app</h1>
        <h1 className="text-md font-bold text-center text-[#61dafb]">Author: @mframadann</h1>
        <div className="flex flex-col lg:w-96 lg:mx-auto md:w-96 md:mx-auto">
          <div className="flex-1 my-4">
            <button onClick={() => window.location='/login'} className="w-full h-10 rounded-md focus:ring-2 duration-500 transition focus:transition focus:duration-500 focus:ring-offset-2 focus:ring-offset-[#61dafb] bg-slate-900 border-2 border-[#61dafb] focus:text-[#61dafb] text-white">Login</button>
          </div>
          <div className="flex-1">
            <button onClick={() => window.location='/register'} className="w-full h-10 rounded-md focus:ring-2 duration-500 transition focus:transition focus:duration-500 focus:ring-offset-2 focus:ring-offset-[#61dafb] bg-slate-900 border-2 border-[#61dafb] focus:text-[#61dafb] text-white">Register</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome;