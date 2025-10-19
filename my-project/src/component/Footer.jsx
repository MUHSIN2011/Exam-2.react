
// import logo2 from '../assets/Layer 2 1.png'
// import logo3 from '../assets/Group 48096434.png'
// import logo4 from '../assets/Layer 6 1.png'

import logotelegram from '../assets/Frame 3.png'



export function Footer() {
    return (
        <footer className="w-full  bg-[#00060b] text-white">
            <div className=" mx-auto md:px-20 px-5 py-10">
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                    <div className="flex flex-col gap-4 ">
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl font-black">погружение<span className='text-[#00DBDD]'> 1.0</span></h2>
                        </div>
                        <p className="text-sm text-[#9CA3AF]">Политика конфиденциальности © 2014 - 2022. Все права защищены</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className='flex items-center gap-10'>
                            <div className='flex items-center '>
                                <img src={logotelegram} alt="" />
                                <p>Traffic Diver</p>
                            </div>
                            <div className='flex items-center '>
                                <img src={logotelegram} alt="" />
                                <p>Жёлтый Веб</p>
                            </div>
                            <div className='flex items-center '>
                                <img src={logotelegram} alt="" />
                                <p>Crazy Profits Agency</p>
                            </div>
                        </div>
                        <div>
                            <ul className='flex md:flex-row flex-col text-center items-center gap-5'>
                                <li className='text-[#00FFFF]'>о нас</li>
                                <li>связаться с нами</li>
                                <li>зарегистрироваться</li>
                                <li>рекламодателям</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
