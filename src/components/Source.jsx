const Source = ({ URL }) => {
  return (
    URL && (
      <div>
        <h4 className="text-custom-gray underline">Source</h4>
        <a
          className="text-black underline"
          href={URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {URL}
        </a>
      </div>
    )
  );
};
export default Source;
