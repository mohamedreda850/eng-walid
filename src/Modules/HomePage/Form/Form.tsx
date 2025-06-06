import { FaFacebookF, FaWhatsapp } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"
import { useForm } from "react-hook-form"
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
interface FormData {
    name: string;
    message: string;
    email: string;
    phone: string;
}
export default function Form() {

    const {register , handleSubmit , reset } = useForm({
        defaultValues:{
            name:"",
            email:"",
            phone:"",
            message:""
        }
    })
    const onSubmit = (data:FormData) => {
        const templateData ={
            from_name:data.name,
            message:data.message,
            email:data.email,
            phone:data.phone
        }
        emailjs.send("service_6lhdnmj","template_63xnbhp",templateData,"zkFwdMfFSGpyI2UuB").then(()=>{
            console.log("success");
            toast.success("تم ارسال الرساله بنجاح");
            reset();
        }).catch(()=>{
            console.log("error");
            
        });
    }
    return (
        <section id="form" className="container mx-auto grid grid-cols-1 lg:grid-cols-2 w-full py-10 border-t-2 px-[1%] gap-6 ">
            <div className="w-full p-[2%] bg-white rounded-lg ">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم</label>
                        <input {...register("name" ,{required:"الرجاء ادخال الاسم"})} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg" placeholder="محمد" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الالكتروني</label>
                        <input type="email" {...register("email" ,{required:"الرجاء ادخال البريد الالكتروني"})} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg" placeholder="mohamed@example.com" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الموبايل</label>
                        <input type="text" {...register("phone" , {required:"الرجاء ادخال رقم الهاتف"})} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg" placeholder="01123456789" required />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الرساله</label>
                        <textarea  id="first_name" {...register("message")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg"  required ></textarea>
                    </div>
                    <button type="submit" className="bg-[#FFCC00] px-10 py-2 rounded-full text-white ">ارسال</button>
                </form>
            </div>
            <div className="w-full p-[2%] bg-white rounded-lg">
            <div className="bg-[#f2f2f2] rounded-lg flex py-4 px-4 items-center text-3xl my-2">
                <FaFacebookF className="me-4 text-5xl"/>
                    <a href="https://www.facebook.com/share/19EM9QKbom/?mibextid=LQQJ4d" target="_blank" className="text-blue-500 underline">تابعنا علي فيسبوك</a>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg flex py-4 px-4 items-center text-3xl my-2">
                <FaWhatsapp className="me-4 text-5xl"/>
                    <a href="https://wa.me/201111137851?text=Hello%20I%20have%20a%20question" target="_blank" className="text-blue-500 underline">تابعنا علي واتساب</a>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg flex py-4 px-4 items-center text-3xl my-2">
                <FiYoutube className="me-4 text-5xl"/>
                    <a href="https://youtube.com/channel/UCpQRCzVrPPk0QLqLwfdtStw?si=pd70feU-czF4_2p8" target="_blank" className="text-blue-500 underline">تابعنا علي يوتيوب</a>
                </div>
            </div>
        </section>
    )
}
