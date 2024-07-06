import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="flex flex-col min-h-96 w-full justify-center items-center">
        <h1 className="text-8xl">Welcome to <span className="text-zinc-500">Productify</span></h1>

        <p className="text-2xl mt-4">The best place to manage your products</p>

        <span className="text-zinc-500 mt-6">Please <Link to={"/login"} className="hover:underline underline-offset-2 text-zinc-700">Login</Link> First if you haven't</span>
    </div>
  )
}
export default Hero