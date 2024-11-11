import React, { useState } from 'react'

const FormExample: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {  // e: React.ChangeEvent<HTMLInputElement> write this type of e to solve type error
    setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  // e: React.FormEvent<HTMLFormElement> write this type of e to solve type error
    e.preventDefault()
    console.log(`${value}`);
    
  }
  return (
    <>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Enter your name'
        onChange={handleForm}
        value={value}
        required
        />
        <button type='submit'>Submit</button>
      </form>
      <h3>{value}</h3>
    </>
  )
}

export default FormExample
