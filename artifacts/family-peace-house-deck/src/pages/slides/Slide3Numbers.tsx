export default function Slide3Numbers() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex flex-col"
      style={{ background: "#1f1a16" }}
    >
      <div
        className="absolute top-0 left-0 w-[35vw] h-[35vh] opacity-10 rounded-full"
        style={{
          background: "radial-gradient(circle, #e8683a 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[30vw] h-[30vh] opacity-8 rounded-full"
        style={{
          background: "radial-gradient(circle, #c9a961 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-[8vw] py-[6vh]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[2vw] h-[2px]" style={{ background: "#e8683a" }} />
          <p
            className="font-body text-[1.5vw] tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#e8683a" }}
          >
            By the Numbers
          </p>
        </div>

        <h2
          className="font-display text-[4vw] font-normal italic leading-[1.1] mb-[5vh]"
          style={{ color: "#fbf7f2", textWrap: "balance" }}
        >
          15 years of doors left open.
        </h2>

        <div className="grid grid-cols-2 gap-x-[6vw] gap-y-[4vh] flex-1">
          <div
            className="flex flex-col justify-center px-[3vw] py-[3vh] rounded-sm"
            style={{ background: "rgba(251,247,242,0.04)", borderLeft: "3px solid #e8683a" }}
          >
            <p
              className="font-display text-[9vw] font-semibold leading-none tracking-tight"
              style={{ color: "#e8683a" }}
            >
              15
            </p>
            <p
              className="font-body text-[1.6vw] tracking-[0.15em] uppercase mt-[1vh]"
              style={{ color: "#9a8d80" }}
            >
              Years of warmth
            </p>
          </div>

          <div
            className="flex flex-col justify-center px-[3vw] py-[3vh] rounded-sm"
            style={{ background: "rgba(251,247,242,0.04)", borderLeft: "3px solid #c9a961" }}
          >
            <p
              className="font-display text-[9vw] font-semibold leading-none tracking-tight"
              style={{ color: "#c9a961" }}
            >
              2,400+
            </p>
            <p
              className="font-body text-[1.6vw] tracking-[0.15em] uppercase mt-[1vh]"
              style={{ color: "#9a8d80" }}
            >
              Happy guests
            </p>
          </div>

          <div
            className="flex flex-col justify-center px-[3vw] py-[3vh] rounded-sm"
            style={{ background: "rgba(251,247,242,0.04)", borderLeft: "3px solid #c9a961" }}
          >
            <p
              className="font-display text-[9vw] font-semibold leading-none tracking-tight"
              style={{ color: "#c9a961" }}
            >
              48
            </p>
            <p
              className="font-body text-[1.6vw] tracking-[0.15em] uppercase mt-[1vh]"
              style={{ color: "#9a8d80" }}
            >
              Countries represented
            </p>
          </div>

          <div
            className="flex flex-col justify-center px-[3vw] py-[3vh] rounded-sm"
            style={{ background: "rgba(251,247,242,0.04)", borderLeft: "3px solid #e8683a" }}
          >
            <p
              className="font-display text-[9vw] font-semibold leading-none tracking-tight"
              style={{ color: "#e8683a" }}
            >
              4.9
            </p>
            <p
              className="font-body text-[1.6vw] tracking-[0.15em] uppercase mt-[1vh]"
              style={{ color: "#9a8d80" }}
            >
              Average guest rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
