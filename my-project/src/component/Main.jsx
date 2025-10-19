import { SectionCards } from "./SectionCards";

import img1 from '../assets/Rectangle 1125.png'
import logo1 from '../assets/Group 48096431.png'
import logo2 from '../assets/Layer 2 1.png'
import logo3 from '../assets/Group 48096434.png'
import logo4 from '../assets/Layer 6 1.png'
import logo5 from '../assets/photo_2024-04-17 09.29.png'
import logo6 from '../assets/Layer 3 1.png'
import logo7 from '../assets/Frame 48096552.png'
import logo8 from '../assets/Group 48096433.png'
import logo11 from '../assets/Ellipse 52.png'
import logo12 from '../assets/Frame 48096548.png'
import logo13 from '../assets/01 (1).png'
import imgMan from '../assets/Speaker_01.png'
import imgg12 from '../assets/Mask group (3).png'
import { useState } from "react";
import Continer from "./Continer";

import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import AddModal from "./AddModal";
import EditModal from "./EditeModal";
import { Cards } from "./Cards";
import { ImgParag } from "./imgParag";
import CardStud from "./CardStud";

export function Main() {


    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const [openAdd, setOpenAdd] = useState(false);

    const [openEdit, setOpenEdit] = useState(false);

    const [selectedUser, setSelectedUser] = useState(null);




    const [Products, SetProducts] = useState([
        {
            id: 1,
            name: "Выбирать прибыльные предложения",
            img: logo1
        },
        {
            id: 2,
            name: "Создавать яркие креативы",
            img: logo2
        },
        {
            id: 3,
            name: "Настраивать техническую часть",
            img: logo3
        },
        {
            id: 4,
            name: "Запускать рекламные компании",
            img: logo4
        },
        {
            id: 5,
            name: "Использовать все необходимые инструменты",
            img: logo5
        },
        {
            id: 6,
            name: "Продавать товары и услуги по всему миру",
            img: logo6
        },
        {
            id: 7,
            name: "Анализировать данные и принимать правильные решения",
            img: logo7
        },
        {
            id: 8,
            name: "Выбирать прибыльные предложения",
            img: logo8,
        }])

    function addUser(e) {
        e.preventDefault();
        const newUser = {
            id: Date.now(),
            img: image || img1,
            name: name,
        };
        SetProducts([...Products, newUser]);
        setOpenAdd(false);
        setName("");
        setImage("");
    }

    const [search, Setsearch] = useState('')


    function saveEdit() {
        SetProducts(
            Products.map((user) =>
                user.id === selectedUser.id ? { ...user, name: name, img: image } : user
            )
        );
        setOpenEdit(false);
        setSelectedUser(null);
    }



    function Edit(user) {
        setSelectedUser(user);
        setName(user.name);
        setImage(user.img);
        setOpenEdit(true);
    }

    function DeleteUser(id) {
        SetProducts(Products.filter((prod) => prod.id != id))
    }


    return (
        <main className="bg-[#030817] text-white">
            <section>
                <section className="pt-10">
                    <div className="flex items-center justify-center">
                        <h1 className="md:w-[20%] text-center md:text-5xl text-2xl font-black">Это для тебя, если ты:</h1>
                    </div><br />
                    <section className="flex overflow-x-scroll gap-10 no-scrollbar ">
                        <SectionCards img={img1} />
                        <SectionCards img={img1} />
                        <SectionCards img={img1} />
                    </section>
                </section>

                <section className="mt-20">
                    <div className="flex items-center justify-center">
                        <h1 className="md:w-[30%] text-center md:text-5xl text-2xl font-black">По итогу курса ты научишься:</h1>
                    </div><br />
                    <div className="flex items-center justify-center md:gap-10 gap-3">
                        <Button variant="contained">SORT</Button>
                        <TextField
                            sx={{ border: "1px solid white", borderRadius: '6px', color: 'white' }}
                            id="outlined-multiline-flexible"
                            label="SEARCH"
                            // multiline
                            maxRows={4}
                            value={search}
                            onChange={(e) => Setsearch(e.target.value)}
                        />
                        <Button variant="contained" onClick={() => setOpenAdd(true)}>ADD</Button>
                    </div><br />

                    <div className="md:px-25 px-5">
                        <Continer Products={Products} DeleteUser={DeleteUser} search={search} Edit={Edit} />
                    </div><br />
                    <div className="flex flex-col items-center justify-center ">
                        <button className="bg-[#79F8F8] text-black md:px-10 px-5 py-4 md:text-4xl text-3xl rounded-2xl md:w-[40%]">принять участие</button>
                    </div>
                </section><br />

                <section className="mt-5">
                    <div>
                        <h1 className="text-center text-4xl  font-black">Программа курса:</h1>
                    </div><br />
                    <div className="md:px-30 px-5">
                        <div className="flex md:flex-row flex-col justify-cente ">
                            <div className="flex items-start bg-[#3895AA] md:w-[50%] md:px-10 px-5 py-5 md:rounded-tl-2xl rounded-t-2xl">
                                <div>
                                    <h1 className="text-2xl text-[#00FFFF]">01. </h1>
                                </div>
                                <div>
                                    <h1 className="text-3xl text-[#00FFFF]">Что такое арбитраж трафика?</h1>
                                    <p className="text-[#B2FF51]">В этом уроке вы узнаете:</p>
                                </div>
                            </div>
                            <div className="bg-[#2CB0E9] md:w-[50%]  md:rounded-tr-2xl  px-8 py-3">
                                <h1 className="text-3xl font-bold">Результат</h1>
                                <p>Узнаешь что такое арбитраж трафика и сможешь выбрать страны, с которыми будешь работать исходя из своего бюджета.</p>
                            </div>
                        </div>
                        <div className="bg-[#2E4551] py-5 md:px-20 px-5 rounded-b-2xl">
                            <div className="md:text-2xl text-[20px]">
                                <div className="md:ml-2">
                                    <p><span className="text-[#B2FF51]">Продолжительность: </span>40 мин</p>
                                </div><br />
                                <div className="flex md:flex-row flex-col items-center gap-1">
                                    <img src={logo11} alt="" />
                                    <p className="text-[#B2FF51]">Что такое арбитраж трафика в социальных сетях;</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src={logo11} alt="" />
                                    <p>Механика работы простыми словам</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src={logo11} alt="" />
                                    <p>Участники рынка</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src={logo11} alt="" />
                                    <p>Модели продаж <span className="text-[#B2FF51]">(CPL, CPA, CPS, Revshare)</span> </p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src={logo11} alt="" />
                                    <p>Навыки и принципы мышления нужные для получения результата;</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <img src={logo11} alt="" />
                                    <p>Актуальный бюджет для рекламы в разных странах.</p>
                                </div>
                            </div>
                        </div>
                    </div><br /><br />
                    <div className="flex flex-col items-center justify-center ">
                        <button className="bg-[#2D404D] text-white md:px-10 px-5 py-4 md:text-4xl text-2xl rounded-2xl md:w-[50%]">Открыть всю программу курса</button>
                    </div>
                </section><br /><br />



                <div className="md:px-30 px-5">
                    <div className="flex md:flex-row flex-col justify-cente ">
                        <div className="flex items-start gap-5 bg-[#292F4B] md:w-[50%] md:px-10 px-5 py-5 md:rounded-tl-2xl md:rounded-bl-2xl rounded-t-2xl">
                            <div>
                                <img src={logo12} alt="" />
                            </div>
                            <div>
                                <h1 className="text-3xl text-[#00FFFF]">Бонусный блок</h1>
                                <p className="text-[#B2FF51]">Уроки:</p>
                            </div>
                        </div>
                        <div className="bg-[#2CB0E9] md:w-[50%]  md:rounded-tr-2xl  rounded-b-2xl  px-8 py-3">
                            <h1 className="text-3xl font-bold">Результат</h1>
                            <p>Узнаешь что такое арбитраж трафика и сможешь выбрать страны, с которыми будешь работать исходя из своего бюджета.</p>
                        </div>
                    </div>
                </div><br /><br />

                <div className="flex flex-col items-center justify-center ">
                    <button className="bg-[#2D404D] text-white md:px-10 px-5 py-4 md:text-4xl text-2xl rounded-2xl md:w-[50%]">подробнее о бонусном  блоке</button>
                </div><br /><br />

                <section className="flex flex-col items-center text-center">
                    <h1 className="text-xl md:text-5xl font-bold mt-[10px] md:mt-[30px]">
                        ТАРИфЫ:
                    </h1>
                    <button className="py-[10px] px-[40px] font-bold md:px-[40px] mt-[10px] md:mt-[50px] rounded-2xl bg-[#163043]">
                        00:00:25
                    </button>
                    <div className="overflow-auto flex gap-[30px] max-w-[1300px] m-auto mt-[30px] rounded-2xl no-scrollbar md:px-0 px-5">
                        <Cards />
                        <div className="hidden md:flex">
                            <Cards />
                        </div>

                        <div className="hidden md:flex">
                            <Cards />
                        </div>

                        <div className="hidden md:flex">
                            <Cards />
                        </div>

                        <div className="hidden md:flex">
                            <Cards />
                        </div>

                    </div>
                </section>


                <section className="mt-[30px] pb-[20px] flex flex-col items-center gap-[20px] md:px-0 px-5">
                    <h1 className="text-2xl md:text-4xl text-center md:w-[900px] m-auto">
                        <span className="text-[#01FFFF]">Возникли проблемы</span>  с оплатой? напиши в чат поддержки погружения.
                    </h1>
                    <button className="px-[10px] md:px-[120px] py-[20px] bg-[#2CCAD2] rounded-xl text-3xl">
                        поддержка
                    </button>
                    <div className="flex flex-col md:flex-row max-w-[1200px] m-auto">
                        <div className="md:w-[60%] bg-[#243850] p-[30px] md:rounded-l-2xl rounded-t-2xl">
                            <h1 className="text-xl md:text-7xl">Можно платить частями</h1><br />
                            <button className="px-[30px] py-[20px] rounded-2xl font-black bg-[#3A4353] md:w-[80%]">
                                Оформить рассрочку
                            </button>
                        </div>
                        <div className="md:w-[30%] bg-[#184D5C] p-[20px] md:rounded-r-2xl rounded-b-2xl">
                            <div className="flex items-center gap-[10px]">
                                <h1 className="text-6xl mb-[20px]">.</h1>
                                <h1 className="text-xl font-bold">
                                    Без процентов на 3,6 и 12 месяцев
                                </h1>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <h1 className="text-6xl mb-[20px]">.</h1>
                                <h1 className="text-xl font-bold">
                                    Без процентов на 3,6 и 12 месяцев
                                </h1>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <h1 className="text-6xl mb-[20px]">.</h1>
                                <h1 className="text-xl font-bold">
                                    Без процентов на 3,6 и 12 месяцев
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-[30px] pb-[20px] flex flex-col items-center gap-[20px]">
                    <h1 className="text-2xl md:text-5xl text-center md:w-[30%] m-auto"> <span className="text-[#01FFFF]">Как проходит </span>обучение:</h1>

                    <div className="flex flex-col md:flex-row gap-10">
                        <ImgParag img={logo13} bluetxt={"Получаете"} txt={" обучающий материал"} />
                        <ImgParag img={logo13} bluetxt={"Получаете"} txt={" обучающий материал"} />
                        <ImgParag img={logo13} bluetxt={"Получаете"} txt={" обучающий материал"} />
                    </div>
                    <div className="border-1 md:flex hidden border-[#00FFFF] w-225"></div>
                    <div className="md:flex hidden flex-col md:flex-row gap-10 ">
                        <ImgParag img={logo13} bluetxt={"Получаете"} txt={" обучающий материал"} />
                        <ImgParag img={logo13} bluetxt={"Получаете"} txt={" обучающий материал"} />
                        <ImgParag img={logo13} bluetxt={"Получаете"} txt={" обучающий материал"} />
                    </div>
                </section><br /><br />

                <section className="flex flex-col items-center gap-[20px] max-w-[900px] text-start m-auto md:px-0 px-10">
                    <h1 className="text-2xl md:text-5xl md:w-[50%] text-center font-black">Какие  <span className="text-[#00FFFF]">плюсы</span> быть на обученние:</h1>
                    <div className="flex gap-[10px] md:gap-[20px] max-w-[600px] justify-end items-start m-auto">
                        <h1 className="text-2xl text-[#00FFFF] font-black shadow-2xl">+</h1>
                        <h1><span className="text-[#00FFFF] font-bold">Лучший на рынке </span>обучающий партнерскую материал по арбитражу от экспертов</h1>
                    </div>
                    <div className="flex gap-[10px] md:gap-[30px] max-w-[600px] m-auto text-start">
                        <h1 className="text-2xl text-[#00FFFF] font-black shadow-2xl">+</h1>
                        <h1>
                            <span className="text-[#00FFFF] font-bold">Доступ в нашу партнерскую программу где ставки на товары выше на
                                100%.</span> Ставка если вы не были на <span className="text-[#00FFFF] font-bold">обучение Италия-20$</span> Ставка если вы
                            были на обучение и имеете куколд Италия-40$
                        </h1>
                    </div>
                    <div className="flex gap-[10px] md:gap-[30px] max-w-[600px] m-auto text-start">
                        <h1 className="text-2xl text-[#00FFFF] font-black shadow-2xl">+</h1>
                        <h1>
                            <span className="text-[#00FFFF] font-bold">Доступ ко всем платным инстурментам на 1-2 месяца</span> (Трекер,
                            Автозалив, Антидетект браузер) (Стоимость 500$ в месяц) Стоимость
                            для участников курса 0$ (1-2 месяца)
                        </h1>
                    </div>
                    <div className="flex gap-[10px] md:gap-[30px] max-w-[600px] m-auto text-start">
                        <h1 className="text-2xl text-[#00FFFF] font-black shadow-2xl">+</h1>
                        <h1>
                            <span className="text-[#00FFFF] font-bold">Возможность попасть в нашу команду,</span> так как по этому материалу мы
                            обучаем своих сотрудников
                        </h1>
                    </div>
                    <button className="bg-[#4EE4E7] px-[75px] md:px-[150px] py-[10px] md:py-[20px] rounded-xl text-black font-black">принять участие</button>
                </section><br /><br />

                <section className="max-w-[1200px] m-auto pb-[50px] mt-[50px] md:px-0 px-5">
                    <h1 className="text-2xl md:text-5xl font-black md:w-[550px] m-auto text-center">Истории <span className="text-[#00FFFF]">наших учеников</span></h1>
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-[30px]">
                        <CardStud image={imgg12} text={'Семкив'} />
                        <CardStud image={imgg12} text={'Юсупов'} />
                        <CardStud image={imgg12} text={'Арсений'} />
                        <CardStud image={imgg12} text={'Лерка'} />
                        <CardStud image={imgg12} text={'Серега'} />
                        <CardStud image={imgg12} text={'Саня Тай'} />
                    </div>
                </section>


                <section className="flex items-center flex-col">
                    <div>
                        <h1 className="text-5xl"><span className="text-[#00FFFF]">Спикеры</span>  курса:</h1>
                    </div>
                    <div className="flex items-center md:flex-row flex-col md:justify-center">
                        <div className="flex flex-col">
                            <img className="w-120" src={imgMan} alt="" />
                            <div className="relative top-[-120px] md:left-25 left-20 w-[300px] px-5">
                                <div className="backdrop-blur-xl px-2 py-2 rounded-t-2xl">
                                    <h1 className="text-3xl text-center">Евгений</h1>
                                </div>
                                <div className="bg-[#044145] flex flex-col gap-5 px-2 py-2 rounded-b-2xl">
                                    <p>В арбитраже с 2019 года, был тимлидом в 2-х крупных командах</p>
                                    <p>Совладелец Crazy Profits Agency</p>
                                    <p>Создатель паблики Желтый веб</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex flex-col hidden">
                            <img className="w-120" src={imgMan} alt="" />
                            <div className="relative top-[-120px] left-25 w-[300px] px-5">
                                <div className="backdrop-blur-xl px-2 py-2 rounded-t-2xl">
                                    <h1 className="text-3xl text-center">Евгений</h1>
                                </div>
                                <div className="bg-[#044145] flex flex-col gap-5 px-2 py-2 rounded-b-2xl">
                                    <p>В арбитраже с 2019 года, был тимлидом в 2-х крупных командах</p>
                                    <p>Совладелец Crazy Profits Agency</p>
                                    <p>Создатель паблики Желтый веб</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


            <AddModal
                open={openAdd}
                setOpen={setOpenAdd}
                addUser={addUser}
                name={name}
                setName={setName}
                image={image}
                setImage={setImage}
            />


            <EditModal
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
                name={name}
                setName={setName}
                image={image}
                setImage={setImage}
                saveEdit={saveEdit}
            />

        </main>
    )
}
