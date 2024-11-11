import React from "react";

// First Way to create type
// type: More versatile and flexible, supporting unions, intersections, tuples, and primitive type aliases, but without declaration merging.

type prop = { text: string }

// Second way this is more cleaner and readable
//interface: Best for defining object shapes and class structures, and it supports merging and extension.

interface MyButtonProps {
  text: string | number | boolean;
  onClick?: () => void; //If you want to make this prop optional in ts to make any props optional simply use ?
}

interface MyStyleProps {
  className?: string;  // ? means optional to pass this prop
  disabled?: boolean;
}

// Use interface when you want to define the shape of an object and type for more complex and flexible types like unions and intersections.
// For Example
// Can use multiple interfaces and can call with & or | union types

const MyButton: React.FC<MyButtonProps & MyStyleProps & prop> = (props) => {
    const { text, onClick, className, disabled } = props // Use destructuring method to avoid everytime write props.this and props.that and benefit of this pattern we can set default value.
  return (
    <>
    <div className="flex">
      <button
        className={`flex items-center group gap-2 text-white border px-4 py-2 rounded hover:bg-cyan-500 hover:-rotate-3 hover:animate-pulse duration-150 ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
        <span className="h-4 w-4 bg-amber-500 border group-hover:animate-spin"></span>
      </button>
      </div>
    </>
  );
};

export default MyButton;

