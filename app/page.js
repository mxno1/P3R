"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [menuNumber, setMenuNumber] = useState("01");

  const goToSkill = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      router.push("/skill");
    }, 1000);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes skillTransition {
          from {
            width: 20px;
            height: 20px;
          }

          to {
            width: 220vmax;
            height: 220vmax;
          }
        }
      `}</style>
<div className="w-screen h-screen flex justify-center items-center max-sm:items-start bg-black">
  <div className="w-[min(1380px,100vw,177.78vh)] aspect-video relative overflow-hidden">

          {/* P3R Transition */}
          {isTransitioning && (
  <div className="absolute inset-0 z-[9999] pointer-events-none overflow-hidden">
    <div className="absolute left-[250px] top-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-800 animate-[skillTransition_0.5s_ease-in_forwards]" />
  </div>
)}

          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/m2-res_1080p.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-[-4%] left-[-9%] w-[25%] h-[25%] z-20 rotate-90 flex items-center justify-center @container">
            <span className="text-[98cqw] leading-none italic text-[#817d85] font-[1000] scale-x-85">
              {menuNumber}
            </span>
          </div>

          <div className="absolute h-[9%] left-[6%] top-[6%] z-70 w-[13%] bg-white border-2 border-gray-600 @container flex flex-col justify-center">

            <div className="pl-[8%] flex items-start leading-none text-[18cqw] font-normal font-serif">
              <span>¥</span>
              <span className="pl-[3%]">52,163</span>
            </div>

            <span className="pl-[8%] block mt-[2cqw] font-bold text-[6cqw] leading-none">
              current wallet
            </span>

          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[65%] z-50 @container">

            <a
              href="/skill"
              onMouseEnter={() => setMenuNumber("01")}
              onMouseLeave={() => setMenuNumber("01")}
              onClick={(e) => {
                e.preventDefault();
                goToSkill();
              }}
              className="group absolute left-[7%] top-[30%] text-[18cqw] font-[1000] italic leading-none tracking-[-0.08em] rotate-[-19deg] origin-left cursor-pointer hover:z-50 hover:scale-[1.5] transition-transform duration-150"
            >
              <span className="relative z-10 block text-[#70dfe8] group-hover:text-black transition-colors duration-150">
                SKILL
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[120%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_52%,100%_30%,95%_90%)]">
                <span className="absolute inset-0 flex items-center justify-center text-[18cqw] font-[1000] italic leading-none tracking-[-0.08em] text-red-600 whitespace-nowrap">
                  SKILL
                </span>
              </div>
            </a>

            <a
              href="/frpage"
              onMouseEnter={() => setMenuNumber("02")}
              onMouseLeave={() => setMenuNumber("02")}
              className="group absolute left-[18%] top-[37%] text-[18cqw] font-[1000] italic leading-none tracking-[-0.08em] text-[#70dfe8] rotate-[-10deg] origin-left cursor-pointer transition-all duration-150 hover:text-black hover:z-10 hover:scale-[1.5]"
            >
              <span className="relative z-10">
                ITEM
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[120%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_52%,100%_20%,100%_90%)]">
                <span className="absolute left-[8%] top-[18%] text-[18cqw] font-[1000] italic leading-none tracking-[-0.08em] text-red-600 whitespace-nowrap">
                  ITEM
                </span>
              </div>
            </a>

            <a
              href="#"
              onMouseEnter={() => setMenuNumber("03")}
              onMouseLeave={() => setMenuNumber("03")}
              className="group absolute left-[9%] top-[45%] text-[19cqw] font-[1000] italic leading-none tracking-[-0.08em] text-[#66f2ffce] rotate-[-13deg] origin-left cursor-pointer transition-all duration-150 hover:text-black hover:z-10 hover:scale-[1.5]"
            >
              <span className="relative z-10">
                EQUIP
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[120%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_52%,100%_20%,90%_90%)]">
                <span className="absolute left-[8%] top-[18%] text-[19cqw] font-[1000] italic leading-none tracking-[-0.08em] text-red-600 whitespace-nowrap">
                  EQUIP
                </span>
              </div>
            </a>

            <a
              href="#"
              onMouseEnter={() => setMenuNumber("04")}
              onMouseLeave={() => setMenuNumber("04")}
              className="group absolute left-[-1%] top-[55%] text-[18cqw] font-[1000] italic leading-none tracking-[-0.1em] text-[#92f6ff] rotate-[-12deg] origin-left cursor-pointer transition-all duration-150 hover:text-black hover:z-10 hover:scale-[1.5]"
            >
              <span className="relative z-10">
                PERSONA
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[120%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_35%,100%_20%,90%_90%)]">
                <span className="absolute left-[8%] top-[18%] text-[18cqw] font-[1000] italic leading-none tracking-[-0.1em] text-red-600 whitespace-nowrap">
                  PERSONA
                </span>
              </div>
            </a>

            <a
              href="#"
              onMouseEnter={() => setMenuNumber("05")}
              onMouseLeave={() => setMenuNumber("05")}
              className="group absolute left-[14%] top-[59%] text-[17cqw] font-[1000] italic leading-none tracking-[-0.1em] text-[#70dee8bc] rotate-[2deg] origin-left cursor-pointer transition-all duration-150 hover:text-black hover:z-10 hover:scale-[1.5]"
            >
              <span className="relative z-10">
                STATS
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[140%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_70%,100%_5%,90%_70%)]">
                <span className="absolute left-[8%] top-[18%] text-[17cqw] font-[1000] italic leading-none tracking-[-0.1em] text-red-600 whitespace-nowrap">
                  STATS
                </span>
              </div>
            </a>

            <a
              href="#"
              onMouseEnter={() => setMenuNumber("06")}
              onMouseLeave={() => setMenuNumber("06")}
              className="group absolute left-[7%] top-[68%] text-[16cqw] font-[1000] italic leading-none tracking-[-0.1em] text-[#70dfe8] rotate-[-8deg] origin-left cursor-pointer transition-all duration-150 hover:text-black hover:z-10 hover:scale-[1.5]"
            >
              <span className="relative z-10">
                QUEST
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[120%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_52%,100%_20%,80%_90%)]">
                <span className="absolute left-[8%] top-[18%] text-[16cqw] font-[1000] italic leading-none tracking-[-0.1em] text-red-600 whitespace-nowrap">
                  QUEST
                </span>
              </div>
            </a>

            <a
              href="#"
              onMouseEnter={() => setMenuNumber("07")}
              onMouseLeave={() => setMenuNumber("07")}
              className="group absolute left-[5%] top-[76%] text-[17cqw] font-[1000] italic leading-none tracking-[-0.09em]  text-[#92f6ff] rotate-[-7deg] origin-left cursor-pointer transition-all duration-150 hover:text-black hover:z-10 hover:scale-[1.12]"
            >
              <span className="relative z-10">
                SOCIAL LINK
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[120%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_42%,100%_20%,80%_90%)]">
                <span className="absolute left-[8%] top-[18%] text-[17cqw] font-[1000] italic leading-none tracking-[-0.09em] text-red-600 whitespace-nowrap">
                  SOCIAL LINK
                </span>
              </div>
            </a>

            <a
              href="#"
              onMouseEnter={() => setMenuNumber("08")}
              onMouseLeave={() => setMenuNumber("08")}
              className="group absolute top-[83%] text-[17cqw] font-[1000] italic leading-none tracking-[-0.09em] text-[#70dfe8] rotate-[-4deg] origin-left cursor-pointer transition-all duration-150 hover:text-black hover:z-10 hover:scale-[1.5]"
            >
              <span className="relative z-10">
                CALENDAR
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[120%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_62%,100%_20%,85%_90%)]">
                <span className="absolute left-[8%] top-[18%] text-[17cqw] font-[1000] italic leading-none tracking-[-0.09em] text-red-600 whitespace-nowrap">
                  CALENDAR
                </span>
              </div>
            </a>

            <a
              href="#"
              onMouseEnter={() => setMenuNumber("09")}
              onMouseLeave={() => setMenuNumber("09")}
              className="group absolute left-[17%] top-[88%] text-[16cqw] font-[1000] italic leading-none tracking-[-0.1em] text-[#70dee8bc] rotate-[8deg] origin-left cursor-pointer transition-all duration-150 hover:text-black hover:z-10 hover:scale-[1.5]"
            >
              <span className="relative z-10">
                SYSTEM
              </span>

              <div className="absolute left-[-10%] top-[-20%] w-[140%] h-[145%] bg-white/90 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none z-20 [clip-path:polygon(0%_58%,100%_10%,80%_90%)]">
                <span className="absolute left-[8%] top-[18%] text-[16cqw] font-[1000] italic leading-none tracking-[-0.1em] text-red-600 whitespace-nowrap">
                  SYSTEM
                </span>
              </div>
            </a>

          </div>

          <div className="absolute right-[3%] bottom-[4%] z-[100] text-white italic font-black leading-none drop-shadow-[3px_3px_0px_black]">

            <div className="flex items-baseline justify-end">
              <span className="text-[1.1vw]">
                Use a
              </span>

              <span className="ml-[0.25vw] text-[1.5vw]">
                Skill
              </span>
            </div>

            <div className="flex items-center justify-end mt-[-0.1vw]">
              <span className="text-[0.75vw] mr-[0.4vw]">
                Command
              </span>

              <div className="w-[8vw] h-[2px] bg-white" />
            </div>

            <div className="flex items-center justify-end gap-[0.8vw] mt-[0.5vw]">

              <div className="flex items-center gap-[0.3vw]">
                <span className="flex items-center justify-center w-[1.5vw] h-[1.5vw] border-[2px] border-white rounded-[3px] text-[0.9vw] not-italic">
                  ↵
                </span>

                <span className="text-[1.15vw]">
                  Confirm
                </span>
              </div>

              <div className="flex items-center gap-[0.3vw]">
                <span className="flex items-center justify-center w-[1.5vw] h-[1.5vw] border-[2px] border-white rounded-[3px] text-[0.9vw] not-italic font-black">
                  C
                </span>

                <span className="text-[1.15vw]">
                  Close
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}