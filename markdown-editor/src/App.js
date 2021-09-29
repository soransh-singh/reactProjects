import React, {useState} from "react"
import ReactMarkdown from "react-markdown"
import "./master.css"

function App() {
  const markdown = `# Markdown Editor
## markdown editor
[example](https://example.com/)

> This a blockquote

- item one
- item two
- item third

![placeholder 1mg](https://via.placeholder.com/150)
**bolded text**

      this is a code bolck
`
  const markdownCode = "\n`this a inline code`"

  const [code, setCode] = useState(markdown+markdownCode)
  return (
    <div className="App">
      <h1>Markdown Editor</h1>
      <div className="container">
        <textarea name="editor" className="editor" id="editor" value={code} onChange={(e)=>{setCode(e.target.value)}}/>
        <div className="preview"  id="preview"><ReactMarkdown>{code}</ReactMarkdown></div>
      </div>
    </div>
  );
}

export default App;
