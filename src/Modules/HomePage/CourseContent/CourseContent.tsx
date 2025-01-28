import { IoCaretBackCircleSharp } from "react-icons/io5";
import frame from "./../../../assets/Images/frame.svg"
import contentImg from "./../../../assets/Images/Frame9.png";
export default function CourseContent() {
    const content = [
        {
            dis: "مبيعاتك واقعه ، ومش عارف تحقق التارجت ؟!"
        },
        {
            dis: "أنت صاحب بيزنس أو مدير مبيعات مش عارف ترفع أداء فريقك ؟ "
        },
        {
            dis: "بتبدأ حياتك، ومش لاقي شغل ؟!"
        },
        {
            dis: "بتشتغل بس مش راضي عن مستواك المادي ؟!"
        }

    ];




    return (
        <section className="py-7">
           
            <div className=" relative">
        <img src={frame} alt="" />
        <h1 className="bg-[#006EB6] h-fit px-5 py-3 text-4xl text-white rounded-full absolute top-0 left-1/2 -translate-x-1/2">محتوي الدوره</h1>
        </div>


            <div className="container mx-auto flex items-center justify-between">

                <ul className="space-y-4 text-left text-3xl">
                    {content.map((item, index) => (
                        <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <IoCaretBackCircleSharp className="text-4xl text-[#006EB6]" />
                        <span className="">{item.dis}</span>
                    </li>))}


                </ul>
                <img src={contentImg} alt="" className="hidden xl:block"/>
            </div>
            <div className="container mx-auto ">
                <h2 className="bg-[#B8DFF4] mt-5 w-fit text-3xl p-2 rounded-md">لو أنت واحد من ال 4 اشخاص دوول فالكلام الجاي ده ليك أنت .</h2>
                <h3 className="text-3xl my-4">ال 4 حالات دوول حلهم الوحيد انك تتعلم وبجد 27 نقطة فارقه في عالم البيع !</h3>
                <h3 className="text-3xl my-4"> تتعلم من حد فعلا حقق ده مش بيقول كلام نظري  ، وتعرفه كويس ، وتسمعله أي حاجه ( مجانيه ) الاول زي انك تدخل  هنا وتعرف منه مثلا ازاي تتعامل مع اعتراض السعر الغالي . </h3>
            </div>
            <div className="flex justify-center my-10 px-5">
            <iframe className="w-3/4 " height="550" src="https://www.youtube.com/embed/HLxJwtL4hzU" title="مقدمة كورس مقدمة فى الذكاء الاصطناعي - وليد الحنبلي" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <h3 className="text-3xl my-4">
                وبعدها ممكن تحجز معاه استشاره مجانيه مدتها 15 دقيقه من هنا علشان تتأكد اذا كان الكورس مناسب ليك وهيحل مشكلتك  حقيقي ولا لا . 
                </h3>
                <button className="w-fit bg-[#FFCC01] text-3xl py-5 px-8 rounded-full duration-200 hover:bg-[#eaca4a] my-6">احجز استشاره مجانيه دلوقتي من هنا</button>
            </div>
        </section>
    )
}
