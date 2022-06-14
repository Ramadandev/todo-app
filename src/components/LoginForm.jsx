const FormLogin = () => {
  return(
  <>
    <div className="container p-6 bg-[#171717] w-full h-screen">
        <h1 className="text-3xl text-[#61dafb] font-bold text-center mt-7 mb-2">
          Todo list apps
        </h1>
        <h5 className="text-sm text-gray-400 mb-7 text-center">
          Build with ReactJS - NodeJS - ExpressJS - PostgreSQL
        </h5>
        <div className="w-full h-96 p-8 bg-[#262626] sm:w-1/2 lg:w-96 md:w-2/5 mx-auto rounded-md">
          <h1 className="text-2xl text-[#61dafb] font-bold text-center">Login - Todo apps</h1>
          <form action="">
            <div className="form-group mt-7">
              <label htmlFor="username" className="text-[#61dafb] text-sm font-semibold">Username</label>
              <input type="text" name="username" id="username" className="
              w-full outline-none ring-1 ring-[#61dafb] text-white focus:text-[#61dafb] h-10 focus:transition focus:duration-500 focus:ring-offset-1 focus:ring-offset-blue-200 transition duration-500 focus:ring-2 focus:ring-[#61dafb] bg-[#171717] my-3 rounded-md p-3
              "
              placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="Password" className="text-[#61dafb] text-sm font-semibold">Password</label>
              <input type="password" name="Password" id="Password" className="
              w-full outline-none ring-1 ring-[#61dafb] text-white focus:text-[#61dafb] h-10 focus:transition focus:duration-500 focus:ring-offset-1 focus:ring-offset-blue-200 transition duration-500 focus:ring-2 focus:ring-[#61dafb] bg-[#171717] my-3 rounded-md p-3
              "
              placeholder="Password" />
            </div>
            <button className="w-full animation duration-500 focus:transition-all focus:duration-500 focus:ring-offset-1 focus:ring-2 focus:ring-[#61dafb] h-10 bg-[#61dafbd6] focus:ring-offet-blue-200 rounded-md mt-4 text-slate-900 font-bold">Login</button>
          </form>
          <p className="text-xs text-white my-4 text-center">
            Not have account? 
            <a href="/register" className="ml-1 text-[#61dafb]">Register</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default FormLogin;