import { FaFacebookF, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa"
import fb from "./../../../assets/Images/facebook.svg"
import { FiYoutube } from "react-icons/fi"
export default function Form() {
    return (
        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 w-full py-10 border-t-2 px-[1%] gap-6">
            <div className="w-full p-[2%] bg-white rounded-lg">
                <form>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg" placeholder="محمد" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">البريد الالكتروني</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg" placeholder="mohamed@example.com" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم الموبايل</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg" placeholder="01123456789" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الرساله</label>
                        <textarea  id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-lg"  required ></textarea>
                    </div>
                    <button className="bg-[#FFCC00] px-10 py-2 rounded-full text-white ">ارسال</button>
                </form>
            </div>
            <div className="w-full p-[2%] bg-white rounded-lg">
            <div className="bg-[#f2f2f2] rounded-lg flex py-4 px-4 items-center text-3xl my-2">
                <FaFacebookF className="me-4 text-5xl"/>
                    <a href="https://www.facebook.com/share/19EM9QKbom/?mibextid=LQQJ4d" target="_blank" className="text-blue-500 underline">تابعنا علي فيسبوك</a>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg flex py-4 px-4 items-center text-3xl my-2">
                <FaWhatsapp className="me-4 text-5xl"/>
                    <a href="https://wa.me/201091811266?text=Hello%20I%20have%20a%20question" target="_blank" className="text-blue-500 underline">تابعنا علي واتساب</a>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg flex py-4 px-4 items-center text-3xl my-2">
                <FiYoutube className="me-4 text-5xl"/>
                    <a href="https://youtube.com/channel/UCpQRCzVrPPk0QLqLwfdtStw?si=pd70feU-czF4_2p8" target="_blank" className="text-blue-500 underline">تابعنا علي يوتيوب</a>
                </div>
            </div>
        </section>
    )
}
