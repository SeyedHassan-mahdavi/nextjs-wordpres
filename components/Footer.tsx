import Image from "next/image";
import imageFo from "../public/next.svg";
import imagesocial from "../public/social.svg";
import getMenuBySlug from "@/lib/queries/getMenuBySlug";
import Link from "next/link";
import { sendLetter } from "./actions";

/**
 * Footer component.
 */
export default async function Footer() {


  const menu = await getMenuBySlug('header')
  const menuContact = await getMenuBySlug('contact')


  return (
    <>
      <footer className="flex flex-col justify-center items-center bg-[#4D4B92] min-h-[350px]">

        <div className="">
          <Image
            alt="imageFoter"
            height={100}
            src={imageFo}
            width={300}
            priority={true}
          />
        </div>

        <div className="mt-5 text-white">
          پایگاه خبری صبح توس با مجوز رسمی وزارت فرهنگ و ارشاد اسلامی از سال ۱۳۹۳ شروع به فعالیت کرده است
        </div>

        <div className="flex flex-row mt-8 text-white">
          <nav className="flex justify-between flex-row gap-4">
            <span className="font-black">.</span>
            <span className="font-bold">سرویس ها</span>
            {!!menu &&
              menu.menuItems.edges.map((item) => (
                <Link key={item.node.databaseId} href={item.node.uri}>
                  {item.node.label}
                </Link>
              ))}
          </nav>
          <nav className="flex justify-between flex-row gap-4 mr-8">
            <span className="font-black">.</span>
            <span className="font-bold">دسترسی سریع</span>
            {!!menuContact &&
              menuContact.menuItems.edges.map((item) => (
                <Link key={item.node.databaseId} href={item.node.uri}>
                  {item.node.label}
                </Link>
              ))}
          </nav>
        </div>

        <div className="mt-5 text-white">
          <nav className="flex justify-between flex-row gap-4 mr-8">
            {!!menuContact &&
              menuContact.menuItems.edges.map((item) => (
                <Link key={item.node.databaseId} href={item.node.uri}>
                  {item.node.label}
                </Link>
              ))}
          </nav>
        </div>
        <div className="flex flex-row w-[60%]  justify-around mt-10">
          <div>
            <Image
              alt="imageFoter"
              height={70}
              src={imagesocial}
              width={300}
              priority={true}
            />
          </div>
          <div className="flex">
            <form className="flex flex-row gap-4 items-center" action={sendLetter}>
              <div className="flex flex-row items-center gap-4 text-white font-black text-lg">
                <label htmlFor="newsletter">خبرنامه :</label>
                <input
                  name="newsletter"
                  required
                  type="text"
                />
              </div>
              <button type="submit">تایید</button>
            </form>
          </div>
        </div>

      </footer>
      <div>تمامی حقوق مادی و معنوی متعلق به صبح توس میباشد ©</div>

    </>


  )
}



//       & copy; 2022 - { new Date().getFullYear() } - Next.js WordPress by{ ' ' }
// <a href="https://gregrickaby.com">Greg Rickaby</a>