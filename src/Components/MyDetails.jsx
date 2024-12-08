import { IoManSharp } from "react-icons/io5";

const MyDetails = () => {
  return (
    <div className="p-10 ">
      <h1 className="text-5xl font-bold text-center items-center justify-center flex">
        <IoManSharp /> About <span className="text-amber-500"> Me</span>
      </h1>
      <div className="grid grid-cols-2">
        <div className="p-10">
          <img
            className="rounded-xl"
            height={250}
            width={300}
            src="/src/assets/images/Mainul.jpg"
            alt=""
          />
        </div>
        <div className="p-10">
          <h1>Hi! I am Mainul</h1>
          <h1>Computer Science Student | Web Developer</h1>
          <p>Brac</p>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
