import Card from "../Card"
import MessageCard from "./MessageCard";

export default function AboutSection() {
    return (
     <section className="grid w-full  max-w-6xl gap-y-2 md:gap-y-0 md:grid-cols-2 py-10 px-3 mx-auto">
       <div className="flex flex-col">
        <h1 className="text-2xl font-bold rounded-md bg-green-500 text-white  px-10 py-3">हाम्रो परिचय</h1>
        <div className="flex  items-center justify-start mt-2">
        <Card/>
        </div>
      </div>
        <div className="flex items-center justify-end">
        <MessageCard/>
        </div>
        
     </section>
    );
  }
  