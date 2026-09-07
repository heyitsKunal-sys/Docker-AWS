import "./App.css"
import Editor from '@monaco-editor/react';
function App() {
    return (
        <main className="h-screen w-full bg-black flex gap-5 p-4 ">
            <aside className="h-full w-1/4 bg-[#55100D] rounded-xl">

            </aside>
            <section className="w-3/4 bg-[#1A0706] rounded-xl">
                <Editor
                    height="100%"
                    defaultLanguage="javascript"
                    defaultValue="//some comment"
                    theme="vs-dark" />

            </section>

        </main>

    )

}



export default App