import React,{useState} from 'react'

interface Book {
    name: string;
    price: number;
    isPublished?: boolean
}

const HooksExample: React.FC = () => {
    //For Hooks TS Example
    // const [value, setValue] =useState(0)  // Implicit way to define type like directly define type.
    // const [value, setValue] =useState<number>(0)  // Explicit way like Directly define type.
    const [value, setValue] = useState<Book>({
        name: "React TS",
        price: 2999,
        isPublished: true
    })  // Explicit way to define type like to create interface and then define as type.

    const { name, price, isPublished } = value

    // const handleBook = () => {
    //   setValue({name: "React JS", price: 1999, isPublished: false})
    // }

    // Function to toggle all values
  const toggleAllValues = () => {
    setValue((prevValue) => ({
      name: prevValue.name === "React TS" ? "React JS" : "React TS", // Toggle between two names
      price: prevValue.price === 2999 ? 1999 : 2999, // Toggle between two prices
      isPublished: !prevValue.isPublished // Toggle boolean value
    }));
  };

  return (
    <>
    <h3 className="text-white text-center">Name of Book is: {name} and the price is: {price} <br /> {isPublished ? "And Finally It is Published" : "But Unfornately It is not Published"}</h3>
      <button
        className={`text-white border px-4 py-2 rounded hover:bg-cyan-500 hover:-rotate-3 hover:animate-pulse duration-150`}
        onClick={toggleAllValues}
      >
        Click to Update
      </button>
    </>
  )
}

export default HooksExample
