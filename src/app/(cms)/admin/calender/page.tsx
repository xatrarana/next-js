'use client'
import React, { ChangeEvent, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';

export default function App() {
  const editorRef = useRef<any>(null);
  const [values, setValues] = useState({
    title:'',
    description:'This is the initial content of the editor.',

  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
};
  const log = () => {
    if (editorRef.current) {
      values.description = editorRef.current.getContent()
    }
  };
  const handleSubmit = async () =>{
    log()
    console.log(values)
    try {
      const response = await fetch('/api/about',{
          method: "POST",
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify(values)
      })

      console.log(await response.json())
    } catch (error) {
      console.log(error)
    }   

  }

  
  return (
    <form className='p-3 flex flex-col gap-y-3'>
      <div>
        <Label htmlFor='title'>
            Title
        </Label>
        <Input onChange={handleChange} name='title' className='outline-none' id='title' placeholder='title' type='text'/>
      </div>
      <Editor
        apiKey='8vge2asbflygjkki2s2zow2j2js54qh95vf642eyj58c2zwe'
        
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={values.description}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}