 import RightCard from "./RightCard";

const Rightcontent = (props) => {
  return (
    <div id="right" className="h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 p-7 w-2/3">
      {props.users.map((elem, index) => (
        <RightCard
          key={index}
          id={index}
          tag={elem.tag}
          img={elem.img}
          intro={elem.intro}
        />
      ))}
    </div>
  );
};

export default Rightcontent;