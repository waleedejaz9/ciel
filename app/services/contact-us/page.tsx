import Image from "next/image";
import { home_svg } from "assets/stack";
import { contact_side_img } from "assets/services";

const ContactUs = () => {
  return (
    <div className="bg-cover bg-contactBg">
      <div className="container mx-auto py-8">
        <div
          className="flex flex-row bg-primary1 h-14 w-80 rounded-lg"
          style={{
            border: "1.58px solid",
            borderImageSource:
              "linear-gradient(269.23deg, rgba(132, 71, 233, 0.6) 0.62%, rgba(62, 118, 255, 0.6) 51.96%, rgba(255, 67, 187, 0.6) 100.19%)",
          }}>
          <div
            className="flex justify-center gap-2 bg-tabColor items-center h-full w-56 rounded-lg"
            style={{
              clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",
            }}>
            <Image src={home_svg} alt="home icon here" />
            <h3 className=" text-md font-Montserrat text-left text-primary1 font-bold tracking-wide">
              Company
            </h3>
          </div>
          <div className="flex justify-center items-center h-full w-56">
            <h3 className="text-md font-Montserrat capitalize text-center text-mainBg tracking-wide">
              Contact Us
            </h3>
          </div>
        </div>
      </div>

      <section className="pt-8 pb-8">
        <div className="grid gris-cols-1 xl:grid-cols-2">
          <div className={`flex justify-center`}>
            <Image src={contact_side_img} width={550} alt="contact side bg" />
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold uppercase">When Do We Start ?</p>
            <p className="text-2xl font-bold text-primary1 uppercase">
              Connect With Us Today.
            </p>

            <p className="font-paragraph font-normal pt-5 w-1/2">
              We proactively consult, design, develop & scale robust web, mobile
              & custom software solutions, that fuel innovation & deliver
              digital success!
            </p>

            <div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
