import CountUp from "react-countup";
import { stats } from "../config";

const Stats = ({ inView }) => {
  return (
    <section id="stats" className="pt-4 pb-12 md:pt-0  md:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[90vw] mx-auto md:max-w-none ">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center md:justify-start"
              key={index}
            >
              {inView && (
                <CountUp
                  end={item.num}
                  duration={3}
                  className="text-3xl md:text-6xl font-extrabold"
                />
              )}
              <p
                className={`max-w-[100px]
                    leading-snug text-sm text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
