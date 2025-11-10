import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const DeliveryProgress = ({ total = 0, goal = 350000 }) => {
    const percent = Math.min((total / goal) * 100, 100);

    const { language } = useContext(AppContext)
    const { isUzb } = language

    return (
        <div className="w-[350px] h-[150px] p-4 border-[#36374014] border-[1px] rounded-[8px] shadow-sm bg-white">
            <div className="flex items-center gap-2 mb-1">

                <p className="font-semibold text-gray-900 text-[15px]">
                    {isUzb ? `Topshirish punktiga bepul` : `Бесплатно до пункта выдачи`}
                </p>
            </div>

            <p className="text-sm text-gray-500 mb-3">
                {isUzb ? `Yana ${goal - total} so'm va kuryer orqali bepul bo'ladi` : `Еще ${goal - total} сум и будет бесплатно курьером`}
            </p>

            <div className="relative w-full h-[6px] bg-gray-200 rounded-full overflow-hidden mb-1">
                <div
                    className="absolute top-0 left-0 h-full bg-[#7000ff] transition-all duration-500"
                    style={{ width: `${percent}%` }}
                ></div>
            </div>

            <div className="flex justify-between text-[13px] text-[#7000ff] font-medium">
                <span>{total.toLocaleString()} {isUzb ? `so'm` : `сум`}</span>
                <span className="text-gray-400">0 {isUzb ? `so'm` : `сум`} </span>
            </div>
        </div>
    );
};

export default DeliveryProgress;