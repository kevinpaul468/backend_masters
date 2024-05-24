import { useState } from "react";

const PlaygroundNav = () => {

     const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between">
                <div className="flex space-x-3">
                    <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">HOME</a>
                    
                </div>
                <div  >
                    <select className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <option>JavaScript</option>
                        <option>Python</option>
                        <option>Java</option>
                        <option>C++</option>
                        <option>C</option>
                        <option>Go</option>
                        <option>Swift</option>
                        <option>Ruby</option>
                        <option>PHP</option>
                        <option>SQL</option>
                        <option>HTML</option>
                        <option>CSS</option>
                    </select>
                </div>
                <div className="flex space-x-3 mr-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Run
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Save
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Share
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Fork
                    </button>
                </div>
            </div>
        </div>
    );
    }

export default PlaygroundNav;
