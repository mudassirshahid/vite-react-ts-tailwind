import { Phone } from "../types";
import MasterComponent from "./MasterComponent";
import GridComponents from "./GridComponents";
import MyButton from "./partials/MyButton";
import HooksExample from "./partials/HooksExample";
// import FormExample from "./partials/FormExample";
import ContextCounter from "./partials/ContextCounter";
import ContextForm from "./partials/ContextForm";
import { lazy, Suspense } from "react";
// import GridImageLoad from "./partials/GridImageLoad";
const FormExample = lazy(() => import('./partials/FormExample'))

function Home({ items }: { items: Phone[] }) {
  const [masterPhone, ...otherPhones] = items;

  const handleButtonClick = () => {
    alert("TS Props");
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col space-y-4 dark:bg-gray-800">
        {/* <GridImageLoad /> */}
        <MyButton
          onClick={handleButtonClick}
          text={"Click me"}
          className="custom-button-class"
          disabled={false}
        />
        <HooksExample />
        <Suspense fallback={"Please wait"}>
        <FormExample />
        </Suspense>
        <ContextCounter />
        <ContextForm />
        <MasterComponent phone={masterPhone} />
        <GridComponents phones={otherPhones} />
      </div>
    </>
  );
}

export default Home;
