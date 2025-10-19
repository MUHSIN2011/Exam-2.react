import imgMen from '../assets/IMAGEN.png'


export function Navabar() {
    return (
        <header className="imgHeader md:h-[100vh] h-[80vh] md:px-20 px-5 text-white">
            <nav className="flex items-center justify-between">
                <div>

                </div>
                <div className="bg-white text-black md:px-3 px-2 py-2 mt-[-15px] rounded-b-2xl rounded-[0px,6px,0px,6px]">
                    <h1 className="md:text-2xl font-bold">Старт 20 января</h1>
                </div>
                <div>
                    <button className="text-[#00FFFF] bg-[#01364A] px-3 py-2 rounded-[6px] mt-3 border-1 border-[#00FFFF]">Поддержка</button>
                </div>
            </nav>

            <section className="flex items-center flex-col mt-10">
                <div>
                    <h1 className="md:text-8xl text-4xl font-bold">ПОГРУЖЕНИЕ <span className='text-[#01D8DA]'>1.0</span> </h1>
                </div>
                <div>
                    <img className='relative md:w-[90%] w-[90%] left-7 md:top-[-100px] ' src={imgMen} alt="" />
                </div>
                <div className='flex md:flex-row flex-col items-center md:justify-center backdrop-blur-xs border-2 border-[#506C79] gap-5 z-20 px-8 py-5 rounded-2xl md:gap-60 relative md:top-[-200px]'>
                    <div>
                        <h1 className='md:text-2xl font-bold'>Как зарабатывать от 2000 $ в месяц</h1>
                        <p className='md:text-start text-center'>на арбитраже трафика в соц сетях из любой точки мира. </p>
                    </div>
                    <div>
                        <button className='bg-[#29EFF0] text-black px-3 py-3 rounded-[6px] shadow-2xl text-shadow-teal-100 shadow-[#128A95]'>Принять участие</button>
                    </div>
                </div>
            </section>
        </header>
    )
}
