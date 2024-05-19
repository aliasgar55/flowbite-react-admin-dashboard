type HotelCardProps = {
  name: string;
  cover_img: string;
  rating: number;
  tags: Array<string>;
};

const HotelCard = (props: HotelCardProps) => {
  return (
    <div className="w-72 rounded-xl overflow-hidden">
      <img
        className="w-full"
        src={props.cover_img}
        alt="Sunset in the mountains"
      />
      <div className="flex justify-between mt-2">
        <div className="text-xl uppercase text-yellow-600">{props.name}</div>
        <div className="flex">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7965 8.19908L15.9008 7.34225L13.2653 1.99927C13.1933 1.85298 13.0749 1.73456 12.9286 1.66257C12.5618 1.48145 12.1159 1.63239 11.9325 1.99927L9.29699 7.34225L3.40136 8.19908C3.23882 8.2223 3.09021 8.29893 2.97643 8.41503C2.83888 8.55641 2.76308 8.74661 2.76569 8.94385C2.7683 9.14109 2.84911 9.32922 2.99036 9.46691L7.25593 13.6257L6.24817 19.4981C6.22453 19.6347 6.23965 19.7752 6.2918 19.9036C6.34395 20.0321 6.43105 20.1433 6.54322 20.2248C6.65539 20.3063 6.78815 20.3547 6.92643 20.3645C7.06471 20.3744 7.20299 20.3453 7.32559 20.2806L12.5989 17.5081L17.8722 20.2806C18.0162 20.3572 18.1834 20.3828 18.3436 20.3549C18.7476 20.2852 19.0193 19.9021 18.9497 19.4981L17.9419 13.6257L22.2075 9.46691C22.3236 9.35313 22.4002 9.20452 22.4234 9.04198C22.4861 8.63562 22.2028 8.25945 21.7965 8.19908Z"
              fill="#FFD33C"
            />
          </svg>
          <span className="pl-1 ">{props.rating.toFixed(1)}</span>
        </div>
      </div>
      <div className="mt-2">
        {props.tags.map((tag) => (
          <span className="inline-block bg-[#846316] rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 uppercase" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
export default HotelCard;
