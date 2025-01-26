import imag from "./../../../assets/Images/HeroImage.svg";
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#997A00] to-[#FFCC00] pb-10 md:pb-0 flex flex-col-reverse md:flex-row justify-between items-center">

      <div className="flex flex-col w-full md:w-[50%] justify-center items-center">
        <h1 className="text-8xl font-extrabold text-white text-center mb-7">دوره المبيعات</h1>
        <h2 className="text-4xl font-bold text-white text-center mb-5"> كن خبيراً في توليد مبيعات <br/> عالية الجودة</h2>
        <strong className="text-center text-[#006EB6] text-4xl font-bold mt-10">خلال 16 ساعه فقط
        </strong>
        <div className="bg-white text-center py-3 px-10 rounded-full mt-20"> <h2 className="text-4xl font-bold text-[#006EB6]">المهندس. وليد الحنبلي</h2> </div>
      </div>
      <div className="md:self-start flex w-full md:w-[50%] h-screen relative">
        <img src={imag} className="h-screen absolute left-0 top-0  object-contain md:object-cover" alt="" />
      </div>
    </section>
  )
}
