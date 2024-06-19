
import Image from "next/image";
import React, { Children } from "react";
import Details from "../Details";
import Link from "next/link";
import NotFoundPage from "../NotFoundPage";
import Loader from "../LoaderSkeleton";

async function DetailPage({ title }) {
  const res = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=79a51fda&t=${title}`
  ).then((response) => response.json());
  await new Promise((resolve) => {setTimeout(resolve, 2000)});
  console.log("Response", res);
  const keysToCheck = [ "Year", "Genre", "Actors", "Language", "Plot"];
  return res.Response == 'True' ? (
    <div className="w-full min-h-screen bg-black pt-2 flex flex-col items-center px-8 md:mx-auto">
      <Link href='/' className="text-white px-4 py-3 self-start" >Back</Link>
      <Image src={res.Poster} height={200} width={200} alt="Poster" className="mx-auto py-6 md:w-60" />
      <p className="text-center font-extrabold text-2xl text-cyan-300 pb-5">{res.Title}</p>
      <div className="sm:w-[65%] sm:self-end sm:pr-8">
      {Children.toArray(
        keysToCheck.map((key) => <Details title={key} value={res[key]} />)
      )}
      </div>
    </div>
  ) : <NotFoundPage/>;
}

export default DetailPage;
