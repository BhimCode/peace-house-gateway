export default function Slide6Experience() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col px-[7vw] py-[5vh]"
      style={{ background: "#f5ede2" }}
    >
      <div
        className="absolute bottom-0 right-0 w-[28vw] h-[28vh] opacity-30"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, #e8683a 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-[1vw] mb-[1.5vh]">
          <div className="w-[2vw] h-[2px]" style={{ background: "#e8683a" }} />
          <p
            className="font-body text-[1.5vw] tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#e8683a" }}
          >
            The Experience
          </p>
        </div>

        <h2
          className="font-display text-[3.8vw] font-normal italic leading-[1.1] mb-[4.5vh]"
          style={{ color: "#3a3530", textWrap: "balance" }}
        >
          More than just a stay.
        </h2>

        <div className="grid grid-cols-2 gap-x-[4vw] gap-y-[3vh] flex-1">
          <div
            className="flex gap-[2vw] items-start p-[2.5vh_2vw]"
            style={{ background: "#fbf7f2", borderRadius: "2px" }}
          >
            <div
              className="w-[5vw] h-[5vw] rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#e8683a" }}
            >
              <svg width="2.2vw" height="2.2vw" viewBox="0 0 24 24" fill="none" stroke="#fbf7f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>
            <div>
              <h4
                className="font-display text-[2.2vw] italic mb-[0.8vh]"
                style={{ color: "#3a3530" }}
              >
                Daily Breakfast
              </h4>
              <p
                className="font-body text-[1.5vw] leading-[1.6]"
                style={{ color: "#7a6f64" }}
              >
                Freshly cooked Nepali and continental breakfast
                served each morning in the open courtyard.
              </p>
            </div>
          </div>

          <div
            className="flex gap-[2vw] items-start p-[2.5vh_2vw]"
            style={{ background: "#fbf7f2", borderRadius: "2px" }}
          >
            <div
              className="w-[5vw] h-[5vw] rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#c9a961" }}
            >
              <svg width="2.2vw" height="2.2vw" viewBox="0 0 24 24" fill="none" stroke="#fbf7f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <h4
                className="font-display text-[2.2vw] italic mb-[0.8vh]"
                style={{ color: "#3a3530" }}
              >
                Trek Planning
              </h4>
              <p
                className="font-body text-[1.5vw] leading-[1.6]"
                style={{ color: "#7a6f64" }}
              >
                Bimal personally helps plan day hikes, mountain
                flights, and longer Himalayan treks.
              </p>
            </div>
          </div>

          <div
            className="flex gap-[2vw] items-start p-[2.5vh_2vw]"
            style={{ background: "#fbf7f2", borderRadius: "2px" }}
          >
            <div
              className="w-[5vw] h-[5vw] rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#c9a961" }}
            >
              <svg width="2.2vw" height="2.2vw" viewBox="0 0 24 24" fill="none" stroke="#fbf7f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h4
                className="font-display text-[2.2vw] italic mb-[0.8vh]"
                style={{ color: "#3a3530" }}
              >
                Airport Pickup
              </h4>
              <p
                className="font-body text-[1.5vw] leading-[1.6]"
                style={{ color: "#7a6f64" }}
              >
                Skip the haggling — let us arrange a friendly
                driver to collect you on arrival.
              </p>
            </div>
          </div>

          <div
            className="flex gap-[2vw] items-start p-[2.5vh_2vw]"
            style={{ background: "#fbf7f2", borderRadius: "2px" }}
          >
            <div
              className="w-[5vw] h-[5vw] rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "#e8683a" }}
            >
              <svg width="2.2vw" height="2.2vw" viewBox="0 0 24 24" fill="none" stroke="#fbf7f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h4
                className="font-display text-[2.2vw] italic mb-[0.8vh]"
                style={{ color: "#3a3530" }}
              >
                Local Tours
              </h4>
              <p
                className="font-body text-[1.5vw] leading-[1.6]"
                style={{ color: "#7a6f64" }}
              >
                Discover hidden temples, monasteries, and the
                best momos in Thamel with our local guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
