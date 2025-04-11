

import { IoCaretBackCircleSharp } from 'react-icons/io5'

export default function Finaly() {
  const questions =
    [
      {
        question: "مين الكورس ده مناسب لمين؟",
        answer: <h3 className='text-xl md:text-2xl ms-8 mb-4'>الكورس مناسب لأي حد عايز يتعلم البيع سواء كان مبتدئ أو عنده بيزنس وعايز يرفع مبيعاته.</h3>,
      },
      {
        question: "هقدر ألاقي شغل بعد ما أخلص الكورس؟",
        answer:<h3 className='text-xl md:text-2xl ms-8 mb-4'>الكورس متصمم بالشكل اللي يوصلك لكده ، وبفضل الله ناس كثير سافرت بره مصر ، وجوه مصر وأصبح <span className='bg-[#FFCC01] px-2 py-0.5 rounded-lg'>راتبهم بين 30 الى 50 ألف بعد أول 6 أشهر ، وبعضهم وصل ل 150 ألف خصوصا اللي بستغل في شركات التسويق الالكتروني في المبيعات</span> ، ولكن مفيش كورس في الدنيا يضمنلك لوحده انك تشتغل ، لازم تطبق وتنزل تدرب عملي ، لكن أوعدك أنت بمجرد ماتعمل التاسكات اللي بتطلب منك بعد كل جزء في الكورس ، أنت كده هتكون جاهز ومش هتحتاج تدريب عملي أكثر من شهر واحد في أي شركه تروحها ، وبعد كده هتتثبت براتب محترم </h3> ,
      },
      {
        question: "الكورس بيوفر إيه غير التدريب؟",
        answer:<h3 className='text-xl md:text-2xl ms-8 mb-4'>بالإضافة للمحتوى القوي، هتاخد استشارات مجانية بعد ما تخلص الكورس علشان نساعدك في التطبيق العملي، ولو خلصت المهام المطلوبه على مدار الكورس كامله ، هنساعدك في توفير<span className='bg-[#FFCC01] px-2 py-0.5 rounded-lg'> فرصة شغل .</span> </h3> ,
      },
      {
        question: " إيه اللي يميز الكورس ده عن كورسات تانية؟",
        answer:<h3 className='text-xl md:text-2xl ms-8 mb-4'>الكورس شامل مهارات مستحيل تلاقيها في كورس واحد ، ده يعتبر<span className='bg-[#FFCC01] px-2 py-0.5 rounded-lg'> 7 كورسات في بعض</span> ، وبسعر كورس واحد ،ده غير الاستشارات اللي بتتقدم بعد الكورس ، علشان تساعدك عالتطبيق العملي .</h3>,
      },
      {
        question: "إزاي أقدر أطبق الكورس ده على شغلي؟   ",
        answer:<h3 className='text-xl md:text-2xl ms-8 mb-4'>الكورس قابل للتطبيق على أي نوع بيزنس أيا كان لأن البيع واحد ، وأنت بمجرد الاجابه عالأسأله اللي بتتوجه في الكورس بعد كل قسم فأنت كده بتكون طبقت عملي بالفعل ، لانك عرفت خلاص هتقول ايه امتى ، هيبقى ناقصك بس فرصه انك تقوله ، ولو أنت فعلا كنت جاهز احنا هنساعدك في انك تلاقي الفرصه دي ان شاء الله .</h3> ,
      },
    ]
  return (
    <section className='container mx-auto py-10 px-5 border-t-2'>
      <div className="flex items-center mb-6 bg-[#B8DFF4] w-fit text-xl lg:text-5xl py-3 px-6 rounded-md mx-10" >


        <h1> وأخيرا الاسئله الي بتدور في بالك دلوقتي واجباتها</h1>
      </div>

      <div>
        {questions.map((item, idx) => (<div key={idx}><div className='flex items-start'>
          <IoCaretBackCircleSharp className="text-4xl text-[#006EB6]" />
          <h2 className='text-xl md:text-3xl text-[#0077b6] font-semibold'>{item.question}</h2>
        </div>
          <h3 className='text-xl md:text-2xl ms-8 mb-4'>
            {item.answer}
          </h3></div>))}




      </div>
      <div className='flex items-center justify-center mt-10'>
        <button className="text-xl font-semibold md:text-4xl bg-[#FFCC01] px-10 py-5 rounded-full me-3 hover:bg-[#eaca4a]" > <a href='https://wa.me/201111137851?text=Hello%20I%20have%20a%20question' target='_blank'>استغل الفرصة قبل ماتفوتك ، حقيقي انت حياتك ممكن تتغير من هنا . </a> </button>
      </div>
    </section>
  )
}
