const base = import.meta.env.BASE_URL;

export default function Slide2Story() {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex" style={{ background: "#fbf7f2" }}>
      <div className="w-[52vw] h-full relative flex-shrink-0">
        <img
          src={`${base}images/exterior.png`}
          crossOrigin="anonymous"
          className="w-full h-full object-cover"
          alt="Family Peace House exterior"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent 70%, #fbf7f2 100%)",
          }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-[5vw] pr-[7vw]">
        <div className="flex items-center gap-[1vw] mb-[2vh]">
          <div className="w-[2vw] h-[2px]" style={{ background: "#e8683a" }} />
          <p
            className="font-body text-[1.5vw] tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#e8683a" }}
          >
            Our Story
          </p>
        </div>

        <h2
          className="font-display text-[4vw] font-normal italic leading-[1.12] mb-[3vh]"
          style={{ color: "#3a3530", textWrap: "balance" }}
        >
          A guesthouse where guests
          become family.
        </h2>

        <p
          className="font-body text-[1.65vw] leading-[1.7] mb-[4vh]"
          style={{ color: "#5a4e46" }}
        >
          Tucked away on a quiet pedestrian lane in Thamel,
          Family Peace House has welcomed travelers from around
          the world for 15 years. Personally managed by Bimal
          and his team, we offer warm Nepali hospitality,
          freshly cooked courtyard breakfasts, and a true
          home base for your Kathmandu adventures.
        </p>

        <div
          className="pt-[2.5vh]"
          style={{ borderTop: "1px solid #e2d5c4" }}
        >
          <p
            className="font-display text-[2.2vw] italic"
            style={{ color: "#c9a961" }}
          >
            — Bimal &amp; family
          </p>
          <p
            className="font-body text-[1.5vw] mt-[0.5vh]"
            style={{ color: "#7a6f64" }}
          >
            Proprietors, Family Peace House Pvt. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
}
