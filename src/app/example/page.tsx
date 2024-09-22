'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";

const example = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="absolute top-4 right-4">
                <Link href="/">
                    <Button className="bg-red-400 text-white hover:bg-white">
                        Logout
                    </Button>
                </Link>
            </div>
            <div className="text-red-400 text-center text-2xl">
                <h1>You have successfully logged in.</h1>
            </div>
        </div>
    );
}

export default example;