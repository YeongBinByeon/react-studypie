import { useState } from "react";
import "./App.css";
import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar";
import SideBarFooter from "./components/SideBarFooter";

function App() {
  const [memos, setMemos] = useState([
    {
      title: "Memo 1",
      content: "This is memo 1",
      createdAt: 1728346675314, // new Date().getTime();
      updatedAt: 1728346675314,
    },
    {
      title: "Memo 2",
      content: "This is memo 2",
      createdAt: 1728346675312,
      updatedAt: 1728346675312,
    },
  ]);

  return (
    <div className="App">
      <SideBar memos={memos} />
      <MemoContainer />
      <SideBarFooter />
    </div>
  );
}

export default App;
