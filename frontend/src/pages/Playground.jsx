import Editor from "@monaco-editor/react"
import PlaygroundNav from "../components/PlaygroundNav";

const Playground = () => {
  return (
    <div>
        <PlaygroundNav />
        <Editor
            className="h-screen min-w-20"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            onMount={(editor, monaco) => {
                console.log('editor mounted');
            }
            }
            theme="vs-dark"
        />
    </div>
  );
};

export default Playground;