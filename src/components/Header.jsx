import bookIcon from "../assets/images/iconoir_book.svg";
import moon from "../assets/images/iconoir_half-moon.svg";
const Header = () => {
  return (
    <div className="flex justify-between w-full mb-6">
      <img src={bookIcon} alt="book icon" className="h-32 w-28.05" />
      <div className="flex items-center">
        <select className="w-98 h-24 ">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <div className="border-l border-light-gray h-32 mx-16 "></div>
        <div className="flex gap-12 ">
          <div className=" w-40 h-4 bg-custom-gray flex items-center justify-start rounded-28">
            <div className="w-14 h-14 bg-white rounded-full cursor-pointer ml-3"></div>
          </div>
          <img src={moon} alt="moon" className="h-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
