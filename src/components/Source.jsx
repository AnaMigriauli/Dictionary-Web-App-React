import externalLink from "../assets/images/tabler_external-link.svg";
const Source = ({ URL }) => {
  return (
    URL && (
      <div className=" md:flex  md:gap-7">
        <h4 className="text-custom-gray underline mb-2 md:text-sm md:mb-0">
          Source
        </h4>
        <div className="flex  items-center gap-9 cursor-pointer md:text-sm  ">
          <a
            className="text-black underline dark:text-white "
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {URL}
          </a>
          <img src={externalLink} alt="" />
        </div>
      </div>
    )
  );
};
export default Source;
