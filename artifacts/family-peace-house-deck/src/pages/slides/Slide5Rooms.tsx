const base = import.meta.env.BASE_URL;

export default function Slide5Rooms() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col px-[6vw] py-[5vh]"
      style={{ background: "#fbf7f2" }}
    >
      <div className="flex items-center gap-[1vw] mb-[1.5vh]">
        <div className="w-[2vw] h-[2px]" style={{ background: "#e8683a" }} />
        <p
          className="font-body text-[1.5vw] tracking-[0.3em] uppercase font-semibold"
          style={{ color: "#e8683a" }}
        >
          Our Rooms
        </p>
      </div>

      <h2
        className="font-display text-[3.8vw] font-normal italic leading-[1.1] mb-[4vh]"
        style={{ color: "#3a3530", textWrap: "balance" }}
      >
        Comfortable stays for every traveler.
      </h2>

      <div className="flex gap-[3vw] flex-1">
        <div
          className="flex-1 flex flex-col overflow-hidden rounded-sm"
          style={{ background: "#f5ede2" }}
        >
          <div className="h-[22vh] overflow-hidden flex-shrink-0">
            <img
              src={`${base}images/room-twin.png`}
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
              alt="Standard Room"
            />
          </div>
          <div className="px-[2vw] pt-[2vh] pb-[2.5vh] flex flex-col flex-1">
            <p
              className="font-body text-[1.5vw] tracking-[0.2em] uppercase mb-[0.8vh] font-semibold"
              style={{ color: "#e8683a" }}
            >
              01 — Standard
            </p>
            <h3
              className="font-display text-[2.5vw] italic font-normal mb-[0.8vh]"
              style={{ color: "#3a3530" }}
            >
              Standard Room
            </h3>
            <p
              className="font-display text-[2.2vw] font-semibold mb-[2vh]"
              style={{ color: "#c9a961" }}
            >
              NPR 800 / night
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              Twin or double bed · Fast WiFi
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              Hot shower · Breakfast included
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              Natural light · Luggage storage
            </p>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col overflow-hidden rounded-sm"
          style={{ background: "#f5ede2" }}
        >
          <div className="h-[22vh] overflow-hidden flex-shrink-0">
            <img
              src={`${base}images/exterior.png`}
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
              alt="Deluxe Room"
            />
          </div>
          <div className="px-[2vw] pt-[2vh] pb-[2.5vh] flex flex-col flex-1">
            <p
              className="font-body text-[1.5vw] tracking-[0.2em] uppercase mb-[0.8vh] font-semibold"
              style={{ color: "#e8683a" }}
            >
              02 — Deluxe
            </p>
            <h3
              className="font-display text-[2.5vw] italic font-normal mb-[0.8vh]"
              style={{ color: "#3a3530" }}
            >
              Deluxe Room
            </h3>
            <p
              className="font-display text-[2.2vw] font-semibold mb-[2vh]"
              style={{ color: "#c9a961" }}
            >
              NPR 1,500 / night
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              Queen bed · En-suite bathroom
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              Rooftop views · Premium bedding
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              Fast WiFi · Breakfast included
            </p>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col overflow-hidden rounded-sm"
          style={{ background: "#f5ede2" }}
        >
          <div className="h-[22vh] overflow-hidden flex-shrink-0">
            <img
              src={`${base}images/room-family.png`}
              crossOrigin="anonymous"
              className="w-full h-full object-cover"
              alt="Family Room"
            />
          </div>
          <div className="px-[2vw] pt-[2vh] pb-[2.5vh] flex flex-col flex-1">
            <p
              className="font-body text-[1.5vw] tracking-[0.2em] uppercase mb-[0.8vh] font-semibold"
              style={{ color: "#e8683a" }}
            >
              03 — Family
            </p>
            <h3
              className="font-display text-[2.5vw] italic font-normal mb-[0.8vh]"
              style={{ color: "#3a3530" }}
            >
              Family Room
            </h3>
            <p
              className="font-display text-[2.2vw] font-semibold mb-[2vh]"
              style={{ color: "#c9a961" }}
            >
              NPR 2,200 / night
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              3–4 beds · Extra space
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              Hot shower · Fast WiFi
            </p>
            <p
              className="font-body text-[1.5vw] leading-[1.6]"
              style={{ color: "#5a4e46" }}
            >
              Family friendly · Breakfast included
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
