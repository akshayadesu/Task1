'use client'
import { Button } from "@/components/ui/button";

const example = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="text-black text-center text-2xl text-white">
                <h1>You have successfully logged in.</h1>
            </div>
            {/* <div><Button className="bg-white text-black hover:text-white">Logout</Button></div> */}
        </div>
    );
}

export default example;