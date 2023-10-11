import externalLink from "../assets/images/tabler_external-link.svg";
const Source = ({ URL }) => {
  return (
    URL && (
      <div>
        <h4 className="text-custom-gray underline mb-2">Source</h4>
        <div className="flex gap-9 cursor-pointer ">
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
