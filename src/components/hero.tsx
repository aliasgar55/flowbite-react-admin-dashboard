export default function Hero() {
  return (
    <div className="bg-[url('/hero_image_1.jpeg')] flex justify-around items-center">
      <div className="bg-black bg-opacity-45 font-normal text-white my-24 w-3/12 rounded-tr-3xl rounded-bl-3xl">
        <div className="p-8 leading-6 text-xl">
          <p>
            Luxury Hotels, a renowned global brand founded in England 17 years
            ago, is currently present in 89 countries. We provide Luxury Hotels
            for affluent travellers through our online platform and in print and
            digital formats. Each Edition is accessible for free download on 5
            different platforms and attracts 4-5 million online readers
            annually.
          </p>
          <br />
          <p className="">
            Through our Printed Edition Rotation Program, your hotel will be
            featured as one of the top Luxury Hotels and will ensure a
            continuous influx of bookings and a consistent occupancy rate of
            800,000 to 1 million tourists throughout the year, all without any
            commission fees.
          </p>
        </div>
      </div>
      <div className="">
        <div className="text-3xl text-orange-700 uppercase font-medium">
          Luxury Hotels
        </div>
        <div className="text-2xl text-orange-300 text-center">Presents</div>
      </div>
    </div>
  );
}
