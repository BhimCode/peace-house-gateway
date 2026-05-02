const base = import.meta.env.BASE_URL;

export default function Slide1Cover() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <img
        src={`${base}images/courtyard-flags.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Prayer flag courtyard at Family Peace House"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(31,26,22,0.88) 0%, rgba(31,26,22,0.65) 55%, rgba(31,26,22,0.35) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col justify-center h-full px-[8vw]">
        <div className="flex items-center gap-[1.5vw] mb-[2.5vh]">
          <div className="w-[3vw] h-[1px] bg-primary" />
          <p
            className="font-body text-[1.5vw] tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#e8683a" }}
          >
            Namaste — Welcome
          </p>
        </div>

        <h1
          className="font-display text-[6.5vw] font-normal italic leading-[1.05] tracking-tight mb-[3vh]"
          style={{ color: "#fbf7f2", textWrap: "balance" }}
        >
          Family Peace House
        </h1>

        <p
          className="font-body text-[1.8vw] leading-relaxed mb-[6vh] max-w-[40vw]"
          style={{ color: "#d8c9b8" }}
        >
          A family-run guesthouse in the heart of Thamel —
          warm Nepali hospitality, courtyard breakfasts,
          and rooftop sunsets over the Himalayan foothills.
        </p>

        <div className="flex items-center gap-[2vw]">
          <p
            className="font-body text-[1.5vw] tracking-[0.2em] uppercase"
            style={{ color: "#9a8d80" }}
          >
            Thamel, Kathmandu, Nepal
          </p>
          <div
            className="w-[1px] h-[2.5vh]"
            style={{ background: "rgba(200,180,160,0.4)" }}
          />
          <p
            className="font-body text-[1.5vw] tracking-[0.2em] uppercase"
            style={{ color: "#9a8d80" }}
          >
            Est. 2009
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-[4vh] right-[5vw] text-right"
        style={{ color: "rgba(200,180,160,0.5)" }}
      >
        <p className="font-display text-[1.8vw] italic">familypeacehouse@gmail.com</p>
      </div>
    </div>
  );
}
