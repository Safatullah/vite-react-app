import ReactImg from "../assets/images/react.svg"
import "../assets/css/main.css"

export default function Welcome() {
    return (
    <>
    <div className=" bg-slate-200 w-90 rounded-2xl text-center px-10 py-7 mt-40 shadow-md border-b">
    <img className="inline-block" src={ReactImg} alt="React Logo" width={200} height={200} />
    <h1 className="text-3xl font-bold py-3">Welcome To My App</h1>
    <p>This is going to be the first ViteReact App! It has tailwind css.</p>
    </div>
    </>
    );
    }