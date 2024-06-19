import NotFoundImage from "@assets/missing-image.svg";
import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center gap-6">
        <Image src={NotFoundImage} height={120} width={120} alt="Image" />
        <p className="font-extrabold text-lg text-white">Sorry, Movie Not Found!</p>
        <Link href='/' className="text-white border-b text-left">Go Back</Link>
    </div>
  )
}

export default NotFoundPage