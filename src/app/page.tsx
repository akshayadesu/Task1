import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="absolute top-4 right-4">
        <Link href="/login">
          <button className="bg-red-400 text-white py-2 px-4 rounded">
            Login
          </button>
        </Link>
      </div>
      <div className="text-center  text-red-400 text-8xl italic">Welcome</div>
    </div>
  );
}
