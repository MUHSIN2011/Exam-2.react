import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';


export default function Continer({ Products, DeleteUser, search,Edit }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3 md:p-6">
            {Products.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            ).map((product) => (
                    <div
                        key={product.id}
                        className="bg-[#5F47B5]  px-6 py-6 rounded-2xl flex flex-col items-center shadow-lg cursor-pointer justify-between"
                    >
                        <div className="w-full flex justify-center">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-[150px] h-[150px] object-contain mb-4"
                            />
                        </div>
                        <div className="text-center">
                            <h1 className="text-[18px] font-semibold text-white tracking-wide">
                                {product.name}
                            </h1>
                        </div><br />
                        <div className='flex items-center justify-center gap-10'>
                            <div onClick={() => DeleteUser(product.id)}>
                                <DeleteForeverRoundedIcon />
                            </div>
                            <div onClick={() => Edit(product)}>
                                <BorderColorRoundedIcon />
                            </div>

                        </div>
                    </div>
                ))}
        </div>
    );
}
