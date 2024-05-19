type SeperatorProps = {
  text: string;
};

const Seperator = (props: SeperatorProps) => {
  return (
    <div className="bg-red-700 p-4 h-20 relative">
      <span className="bg-white text-yellow-500 px-4 py-2 bottom-0 left-20 h-10 text-lg absolute uppercase rounded-t">
	{props.text}
      </span>
    </div>
  );
};

export default Seperator;
