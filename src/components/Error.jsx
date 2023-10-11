import smile from "../assets/images/😕.svg";

const Error = () => {
  return (
    <div className="flex mt-36 items-center flex-col">
      <img className="w-10 h-10 mb-4" src={smile} alt="" />
      <h4 className="mb-6 font-bold text-lg dark:text-white ">
        No Definitions Found
      </h4>
      <p className="text-custom-gray text-base ">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};
export default Error;
