import Image from "next/image";

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="animate-pulse duration-700"
              width={100}
              height={24}
              priority
            />
        </div>
    )
}