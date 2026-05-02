export default function Slide8Reserve() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative flex"
      style={{ background: "#1f1a16" }}
    >
      <div
        className="absolute top-0 right-0 w-[40vw] h-[50vh]"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(232,104,58,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[30vw] h-[35vh]"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(201,169,97,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col justify-center px-[8vw] w-[55vw]">
        <div className="flex items-center gap-[1vw] mb-[3vh]">
          <div className="w-[2vw] h-[2px]" style={{ background: "#e8683a" }} />
          <p
            className="font-body text-[1.5vw] tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#e8683a" }}
          >
            Reserve Your Stay
          </p>
        </div>

        <h2
          className="font-display text-[5vw] font-normal italic leading-[1.1] mb-[2.5vh]"
          style={{ color: "#fbf7f2", textWrap: "balance" }}
        >
          Ready to feel at home
          in Kathmandu?
        </h2>

        <p
          className="font-body text-[1.7vw] leading-relaxed mb-[5vh]"
          style={{ color: "#9a8d80" }}
        >
          We'll have a hot cup of milk tea waiting.
        </p>

        <div
          className="flex flex-col gap-[1.8vh]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "3vh" }}
        >
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[1.5vw] h-[1px]" style={{ background: "#e8683a" }} />
            <p className="font-body text-[1.6vw]" style={{ color: "#c9b8a8" }}>
              Thamel, Kathmandu 44600, Nepal
            </p>
          </div>
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[1.5vw] h-[1px]" style={{ background: "#e8683a" }} />
            <p className="font-body text-[1.6vw]" style={{ color: "#c9b8a8" }}>
              +977 1-4981138
            </p>
          </div>
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[1.5vw] h-[1px]" style={{ background: "#e8683a" }} />
            <p className="font-body text-[1.6vw]" style={{ color: "#c9b8a8" }}>
              familypeacehouse@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-[1.5vw]">
            <div className="w-[1.5vw] h-[1px]" style={{ background: "#e8683a" }} />
            <p className="font-body text-[1.6vw]" style={{ color: "#c9b8a8" }}>
              Reception open 24 / 7 · Check-in from 12:00
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-end items-end pb-[7vh] pr-[7vw] flex-1">
        <p
          className="font-display text-[3vw] italic font-normal leading-[1.2] text-right mb-[2vh]"
          style={{ color: "rgba(251,247,242,0.12)" }}
        >
          Family Peace House
        </p>
        <p
          className="font-display text-[8vw] italic font-semibold leading-none text-right"
          style={{ color: "rgba(232,104,58,0.15)" }}
        >
          Nepal
        </p>
      </div>
    </div>
  );
}
