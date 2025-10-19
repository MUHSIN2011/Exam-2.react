import logo1 from '../assets/Sign_humero.png'
import img1 from '../assets/Rectangle 34624946.png'


// export function Cards() {
//     return (
//         <div className="min-w-[50px] md:min-w-[10px] rounded-[6px] overflow-hidden bg-[#012E3B] snap-center pb-8 ">
//             <img className="w-full object-cover" src={img1} alt="" />


//             <div className="px-3 mt-4">
//                 <h1 className="text-2xl font-bold">16 блоков обучения</h1>
//             </div>

//             <div className="flex items-start px-3 mt-4 gap-2">
//                 <img src={logo1} alt="" />
//                 <p>Подборка самых полезных статей за последние 4 года что бы все ваши пазлы в голове сложились полностью</p>
//             </div>

//             <div className="flex items-start px-3 mt-4 gap-2">
//                 <img src={logo1} alt="" />
//                 <p>Подборка самых полезных статей за последние 4 года что бы все ваши пазлы в голове сложились полностью</p>
//             </div>

//             <div className="text-center mt-4">
//                 <p className="font-black text-[#00FFFF]">Нет лимита</p>
//                 <p className="font-black">35.00</p>
//                 <h1 className="text-2xl font-bold">19.000</h1>
//             </div>

//             <div className="flex flex-col px-3 gap-2 mt-4">
//                 <button className="bg-[#51E6EA] px-3 py-3 rounded-[6px] text-[19px]">оплатить</button>
//                 <button className="bg-[#465A67] px-3 py-3 rounded-[6px] text-[19px]">в расрочку</button>
//             </div>
//         </div>
//     )
// }


export function Cards() {
    return (
        <div className="w-[100%] md:min-w-[300px] text-start bg-[#1B3641] pb-[10px]  rounded-2xl flex flex-col gap-[20px]">
            <img className="w-full rounded-t-2xl" src={img1} alt="" />


            <div className="px-3 mt-4">
                <h1 className="text-2xl font-bold">16 блоков обучения</h1>
            </div>

            <div className="flex items-start px-3 mt-4 gap-2">
                <img src={logo1} alt="" />
                <p>Подборка самых полезных статей за последние 4 года что бы все ваши пазлы в голове сложились полностью</p>
            </div>

            <div className="flex items-start px-3 mt-4 gap-2">
                <img src={logo1} alt="" />
                <p>Подборка самых полезных статей за последние 4 года что бы все ваши пазлы в голове сложились полностью</p>
            </div>

            <div className="text-center mt-4">
                <p className="font-black text-[#00FFFF]">Нет лимита</p>
                <p className="font-black">35.00</p>
                <h1 className="text-2xl font-bold">19.000</h1>
            </div>

            <div className="flex flex-col px-3 gap-2 mt-4">
                <button className="bg-[#51E6EA] px-3 py-3 rounded-[6px] text-[19px]">оплатить</button>
                <button className="bg-[#465A67] px-3 py-3 rounded-[6px] text-[19px]">в расрочку</button>
            </div>
        </div>
    )
}