'use client'
import React, { useState } from 'react'
// Import the Slate editor factory.
import { createEditor,BaseEditor, Descendant } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact,ReactEditor  } from 'slate-react'

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}
const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]
const HomeForm = () => {
    const [editor] = useState(() => withReact(createEditor()))
    // Render the Slate context.
    return <Slate editor={editor} initialValue={
        [
        {
            type: 'paragraph',
            children: [{
                text: "Sample places in the text"
            },],
        },
    ]
} >
    <Editable/>
</Slate>
}

export default HomeForm