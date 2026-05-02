const base = import.meta.env.BASE_URL;

export default function Slide4Spaces() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <img
        src={`${base}images/courtyard-breakfast.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Guests enjoying courtyard breakfast"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,26,22,0.55) 0%, rgba(31,26,22,0.3) 40%, rgba(31,26,22,0.75) 100%)",
        }}
      />

      <div className="absolute top-[6vh] left-[7vw] z-10">
        <div className="flex items-center gap-[1vw] mb-[1.5vh]">
          <div className="w-[2vw] h-[2px]" style={{ background: "#e8683a" }} />
          <p
            className="font-body text-[1.5vw] tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#e8683a" }}
          >
            Our Spaces
          </p>
        </div>
        <h2
          className="font-display text-[5.5vw] font-normal italic leading-[1.08]"
          style={{ color: "#fbf7f2", textWrap: "balance" }}
        >
          A glimpse of home.
        </h2>
      </div>

      <div className="absolute bottom-[6vh] left-0 right-0 z-10 px-[7vw]">
        <div className="flex gap-[4vw]">
          <div
            className="flex-1 pt-[2vh]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}
          >
            <p
              className="font-body text-[1.5vw] tracking-[0.2em] uppercase mb-[0.8vh]"
              style={{ color: "#e8683a" }}
            >
              Outdoor
            </p>
            <p
              className="font-display text-[2vw] italic"
              style={{ color: "#fbf7f2" }}
            >
              Prayer-Flag Courtyard
            </p>
          </div>

          <div
            className="flex-1 pt-[2vh]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}
          >
            <p
              className="font-body text-[1.5vw] tracking-[0.2em] uppercase mb-[0.8vh]"
              style={{ color: "#e8683a" }}
            >
              Mornings
            </p>
            <p
              className="font-display text-[2vw] italic"
              style={{ color: "#fbf7f2" }}
            >
              Family Breakfast Table
            </p>
          </div>

          <div
            className="flex-1 pt-[2vh]"
            style={{ borderTop: "1px solid rgba(255,255,255,0.3)" }}
          >
            <p
              className="font-body text-[1.5vw] tracking-[0.2em] uppercase mb-[0.8vh]"
              style={{ color: "#e8683a" }}
            >
              Evening
            </p>
            <p
              className="font-display text-[2vw] italic"
              style={{ color: "#fbf7f2" }}
            >
              Rooftop Garden
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
