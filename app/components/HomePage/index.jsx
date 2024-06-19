import { redirect } from "next/navigation";
import Button from "../Button";

function HomePage() {

  const handleSubmit = async (formData) => {
    'use server'
    const titleInput = formData.get("title");
    // console.log("TITLE", title);
    const title = titleInput.replaceAll(" ", "-");
    redirect(`/movie-detail/${title}`);
  }

  return (
    <div className="bg-black w-full h-screen flex flex-col items-center gap-2 ">
      <p className="text-white text-center text-2xl font-extrabold mt-6 border-b-2">Get Movie Details</p>
      <form action={handleSubmit} className="mt-20 flex flex-col items-center p-2 gap-4">
        <p className="text-green-600 text-xl font-extrabold p-2">Search Movie Here</p>
        <input type="text" name='title' className="rounded px-5 py-4 border-green-500 border-2 bg-black text-white focus:border-blue-400 container" placeholder="e.g Titanic" required/>
        <div className="flex justify-between gap-4">
          <button type="submit" className="bg-green-500 rounded px-4 py-2 text-white">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default HomePage