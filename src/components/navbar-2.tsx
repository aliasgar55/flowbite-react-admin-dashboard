const navItems1 = [
  { text: "Find Hotel", link: "/" , key:1},
  { text: "Publish News", link: "/news" , key:2},
  { text: "Login", link: "/news", key:3},
];

const navItems2 = [
  { text: "Home", link: "/", key: 1 },
  { text: "Luxury Hotels & Resorts", link: "/hotels", key:2 },
];

export default function Navbar() {
  return (
    <>
      <nav className="bg-white-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 dark:bg-slate-800">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 sm:items-stretch sm:justify-end">
              <div className="sm:ml-6 sm:block">
                <div className="flex">
                  {navItems1.map((item) => (
                    <a
                      href={item.link}
                      className="text-black px-3 py-2 text-xl font-normal dark:text-white"
		      key={item.key}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="text-white text-xl font-normal bg-red-700 py-4 px-6 rounded-lg uppercase"
              >
                Find a hotel
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-[#cdcdcd] h-px"></div>
      <nav className="bg-white-800 mt-1">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 dark:bg-slate-800">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 sm:items-stretch sm:justify-end">
              <div className="sm:ml-6 sm:block">
                <div className="flex">
                  {navItems2.map((item) => (
                    <a
                      href={item.link}
                      className="text-black px-3 py-2 text-xl font-normal dark:text-white"
                    >
                      {item.text}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="text-black px-3 py-2 text-xl font-normal dark:text-white"
                  >
                    News
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
