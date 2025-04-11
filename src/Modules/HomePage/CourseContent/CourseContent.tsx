import { IoCaretBackCircleSharp } from "react-icons/io5";

import contentImg from "./../../../assets/Images/Frame9.png";


export default function CourseContent() {
    const content = [
        { dis: "أنت صاحب بيزنس أو مدير مبيعات مش عارف ترفع أداء فريقك " },
        { dis: "مبيعاتك واقعه ، ومش عارف تحقق التارجت " },
        { dis: "بتشتغل بس مش راضي عن مستواك المادي " },
        { dis: "بتبدأ حياتك، ومش لاقي شغل " },
    ];

   

    return (
        <section id="content" className="py-7 container mx-auto px-[2%]">
            <div className="flex items-center justify-center my-3">
                <h1
                    
                    className="bg-[#006EB6] h-fit px-5 py-3 text-4xl text-white rounded-full w-fit"
                >
                    محتوي الدوره
                </h1>
            </div>

            <div className="flex items-center justify-between">
                <ul
                    
                    className="space-y-4 text-xl md:text-3xl"
                >
                    {content.map((item, index) => (
                        <li
                            key={index}
                           
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <IoCaretBackCircleSharp className="text-4xl text-[#006EB6]" />
                            <span>{item.dis}</span>
                        </li>
                    ))}
                </ul>

                <img
                    src={contentImg}
                   
                    alt=""
                    className="hidden xl:block"
                />
            </div>

            <div
                
                className="px-5"
            >
                <h2 className="bg-[#006EB6] h-fit px-5 py-3 lg:text-4xl text-3xl text-white rounded-full w-fit mt-4">
                    لو أنت واحد من ال 4 اشخاص دوول فالكلام الجاي ده ليك أنت
                </h2>
                <h3 className="text-xl md:text-3xl my-5">
                    ال 4 حالات دوول حلهم الوحيد انك تتعلم وبجد 27 نقطة فارقه في عالم البيع !
                </h3>
                <h3 className="text-xl md:text-3xl my-5">
                    تتعلم من حد فعلا حقق ده مش بيقول كلام نظري، وتعرفه كويس، وتسمعله أي حاجه ( مجانيه ) الاول زي انك تدخل هنا وتعرف منه مثلا ازاي تتعامل مع اعتراض السعر الغالي.
                </h3>
            </div>

            <div
               
                className="flex justify-center my-10 px-5"
            >
                <iframe
                    className="w-3/4"
                    height="550"
                    src="https://www.youtube.com/embed/HLxJwtL4hzU"
                    title="مقدمة كورس مقدمة فى الذكاء الاصطناعي - وليد الحنبلي"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <div
               
                className="flex flex-col items-center"
            >
                <h3 className="text-xl md:text-3xl my-4">
                    وبعدها ممكن تحجز معاه استشاره مجانيه مدتها 15 دقيقه من هنا علشان تتأكد اذا كان الكورس مناسب ليك وهيحل مشكلتك حقيقي ولا لا.
                </h3>
                <button
                    
                    className="w-fit bg-[#FFCC01] text-xl md:text-3xl font-semibold py-5 px-8 rounded-full duration-200 hover:bg-[#eaca4a] my-6"
                >
                    <a href='https://wa.me/201111137851?text=Hello%20I%20have%20a%20question' target='_blank'>  احجز استشاره مجانيه دلوقتي من هنا</a>
                  
                </button>
            </div>
        </section>
    );
}
