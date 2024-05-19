const SearchHotel = () => {
  return (
    <div className="flex flex-col md:flex-row border-slate-600 border-2 rounded-md shadow-md max-h-40 gap-2 justify-center mx-auto wrap p-5">
      <div className="basis-2/5 flex flex-col justify-center align-center">
        <label className="uppercase flex justify-center text-xl mb-5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
	    className="mr-3 text-center"
          >
            <path
              d="M12.4998 15H8.5V21H12.4998V15Z"
              stroke="#344054"
              stroke-width="0.96"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.5 21H3.5M16.4998 21H4.49984V7.71984C4.48824 7.50173 4.54848 7.28583 4.67133 7.10523C4.79418 6.92464 4.97287 6.78931 5.18 6.72L16.4998 3V21ZM16.4998 21V9H19.4998C19.6312 8.99994 19.7612 9.02575 19.8826 9.07597C20.004 9.12619 20.1142 9.19983 20.2071 9.29268C20.3 9.38553 20.3737 9.49577 20.424 9.61711C20.4743 9.73844 20.5002 9.8685 20.5002 9.99984V21H16.4998Z"
              stroke="#306CFE"
              stroke-width="0.96"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Hotel Name
        </label>
        <div className="min-w-[200px] h-12">
          <input
            className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-xl font-normal text-blue-gray-700 outline outline-0 ring-4 ring-transparent transition-all focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          />
        </div>
      </div>
      <div className="basis-2/5 flex flex-col justify-center">
        <label className="uppercase flex justify-center text-xl mb-5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
	    className="mr-3"
          >
            <path
              d="M22 12H19.889M19.889 12C19.889 13.9598 19.111 15.8389 17.7252 17.2247C16.3394 18.6105 14.4598 19.389 12.5 19.389M19.889 12C19.889 10.0402 19.111 8.16013 17.7252 6.77433C16.3394 5.38853 14.4598 4.611 12.5 4.611M12.5 2.5V4.611M12.5 4.611C10.5403 4.611 8.66089 5.38848 7.27519 6.77419C5.88948 8.15989 5.111 10.0393 5.111 11.999C5.111 13.9587 5.88948 15.8381 7.27519 17.2238C8.66089 18.6095 10.5403 19.389 12.5 19.389M3 12H5.111M12.5 21.5V19.389"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M12.4993 16.2221C13.6191 16.2221 14.693 15.7773 15.4847 14.9855C16.2765 14.1937 16.7213 13.1198 16.7213 12.0001C16.7213 10.8803 16.2765 9.80645 15.4847 9.01467C14.693 8.22289 13.6191 7.77808 12.4993 7.77808C11.3796 7.77808 10.3057 8.22289 9.51394 9.01467C8.72216 9.80645 8.27734 10.8803 8.27734 12.0001C8.27734 13.1198 8.72216 14.1937 9.51394 14.9855C10.3057 15.7773 11.3796 16.2221 12.4993 16.2221Z"
              stroke="#306CFE"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          Country
        </label>
        <div className="min-w-[200px] h-12">
          <input
            className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 text-xl  outline outline-0 ring-4 ring-transparent transition-all focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=""
          />
        </div>
      </div>
      <div className="basis-1/5">
        <label className="uppercase flex text-xl mb-5 text-transparent">
          Find a hotel
        </label>
        <button
          type="button"
          className="w-full text-white text-xl font-normal bg-red-800 rounded-lg uppercase px-10 py-3 no-wrap"
        >
          Find a hotel
        </button>
      </div>
    </div>
  );
};

export default SearchHotel;
