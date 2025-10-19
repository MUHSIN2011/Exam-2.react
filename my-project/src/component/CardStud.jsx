export default function CardStud({ image, text }) {
    return (
        <div className="md:w-[70%] flex flex-col items-center gap-[10px] bg-[#1D556C] rounded-2xl">
            <img className="w-full" src={image} alt="" />
            <h1 className="text-2xl">{text}</h1>
        </div>
    )
}