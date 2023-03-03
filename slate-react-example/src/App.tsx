import React, { useState } from "react";
import { BaseEditor, createEditor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";

type CustomText = { text: string };
type CustomElement = { type: "paragraph"; children: CustomText[] };

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

const initialValue: any = [
  {
    type: "paragraph",
    children: [{ text: "Edit me" }],
  },
];

const App = () => {
  // Create a Slate editor object that won't change across renders.
  const [editor] = useState(() => withReact(createEditor()));
  return (
    <div style={{ backgroundColor: "lightgrey", padding: 10, width: 300 }}>
      <p>Slate editor</p>
      <div
        style={{
          backgroundColor: "white",
          height: 100,
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Slate editor={editor} value={initialValue}>
          <Editable />
        </Slate>
      </div>
    </div>
  );
};

export default App;
