const base = import.meta.env.BASE_URL;

export default function Slide7Voices() {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex flex-col items-center justify-center text-center">
      <img
        src={`${base}images/courtyard-flags.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Prayer flag courtyard"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(31,26,22,0.78) 0%, rgba(31,26,22,0.72) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-[12vw]">
        <div className="flex items-center gap-[1.5vw] mb-[3vh]">
          <div className="w-[2vw] h-[1px]" style={{ background: "#e8683a" }} />
          <p
            className="font-body text-[1.5vw] tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#e8683a" }}
          >
            Guest Voices
          </p>
          <div className="w-[2vw] h-[1px]" style={{ background: "#e8683a" }} />
        </div>

        <p
          className="font-display text-[7vw] leading-none mb-[1vh]"
          style={{ color: "#e8683a", opacity: 0.7, lineHeight: 0.6 }}
        >
          "
        </p>

        <blockquote
          className="font-display text-[2.8vw] italic font-normal leading-[1.45] mb-[4vh] max-w-[65vw]"
          style={{ color: "#f4ebe0", textWrap: "balance" }}
        >
          Family Peace House is a peaceful and quiet place near Thamel.
          The owner Bimal is friendly and helpful — he organised a day hike
          and a mountain flight for us. Highly recommended for young travelers!
        </blockquote>

        <div className="flex items-center gap-[2vw]">
          <div className="w-[3vw] h-[1px]" style={{ background: "rgba(200,180,160,0.4)" }} />
          <div>
            <p
              className="font-body text-[1.6vw] font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#c9a961" }}
            >
              Sarah M. — United Kingdom
            </p>
            <p
              className="font-body text-[1.5vw] mt-[0.4vh]"
              style={{ color: "rgba(200,180,160,0.65)" }}
            >
              March 2024
            </p>
          </div>
          <div className="w-[3vw] h-[1px]" style={{ background: "rgba(200,180,160,0.4)" }} />
        </div>
      </div>
    </div>
  );
}
