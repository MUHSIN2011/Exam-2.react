
export function ImgParag({img,bluetxt,txt}) {
  return (
    <div className="bg-[#242A44] flex flex-col items-center gap-5 px-5 py-5 rounded-2xl">
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1 className="font-bold"><span className="text-[#00FFFF]">{bluetxt}</span> {txt}</h1>
        </div>
    </div>
  )
}
