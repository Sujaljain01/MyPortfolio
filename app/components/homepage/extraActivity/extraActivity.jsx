// @flow strict
import Image from "next/image";
import { BsFillCalendarEventFill } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";

const ExtraActivities = () => {
    return (
        <div id='projects' className="relative z-50 my-12 lg:my-24 px-4">
            <div className="sticky top-10">
                <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 filter blur-3xl opacity-30"></div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center mb-4">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md mx-4">
                            Extra-Curricular Activities
                        </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                    <GlowCard>
                        <div className="relative p-4 lg:p-6 text-white">
                            <Image
                                src="/blur-23.svg"
                                alt="Hero"
                                layout="fill"
                                objectFit="cover"
                                className="absolute bottom-0 left-0 opacity-80"
                            />
                            <div className="relative">
                                <h3 className="font-bold text-xl uppercase flex items-center space-x-2 sm:space-x-3">
                                    <BsFillCalendarEventFill size={36} className="text-violet-500" />
                                    <span>Centre Of Performing Arts</span>
                                </h3>
                                <p className="text-lg mt-4 leading-relaxed">
                                    Organized and managed multi-day events Furore’23, Vibrations’23, Vibrations’22 with cultural, academic, and recreational activities.
                                    Ensured smooth logistics and provided excellent hospitality to chief guests, students, faculty, and visitors.
                                </p>
                            </div>
                        </div>
                    </GlowCard>
                </div>
            </div>
        </div>
    );
};

export default ExtraActivities;
