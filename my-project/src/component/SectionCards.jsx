
export function SectionCards({ img }) {
    return (
        <div className="bg-[#282F4A] rounded-2xl justify-between flex md:flex-row flex-col items-center snap-center min-w-[90%] md:min-w-[60%] lg:min-w-[60%]">
            <div className="px-10">
                <div className="border-b border-[#1F5A72] w-40 mb-4">
                    <h1 className="text-[#03FFFF] text-3xl">03.</h1>
                </div>
                <div>
                    <h1 className="text-[#03FFFF] text-5xl w-[50%]">Обычный человек</h1><br />
                    <p className="text-2xl font-bold w-50">который хочет освоить онлайн профессию</p>
                </div>
            </div>
            <div>
                <img className="h-100" src={img} alt="" />
            </div>
        </div>
    )
}

