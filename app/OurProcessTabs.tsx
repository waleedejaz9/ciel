import CielHeading from './components/CielHeading';
import GradientButton from './components/Gradientbutton';
import Image from 'next/image';
import { ourProcess } from '@globals';

const OurProcessTabs = () => {
  return (<>
    {/* request consultation section */}
    <section className="flex justify-center">
      <div className="container mx-auto my-16">
        <div className="flex justify-center">
          <div className="grid gris-cols-1 xl:grid-cols-2 bg-requestConsultation">
            <div>
              <div className="flex justify-center">
                <CielHeading customClassName="w-8/12" headingTextPrimary={"How We Stand Out"} headingTextSecondary={" - WE ARE Proactive Experts"} />
              </div>
              <div className="flex justify-center">
                <p className="text-ptColor w-8/12 font-normal text-sm track-wide mt-4">
                  CIEL provides high-quality development services and IT-based business solutions. Providing high-quality services and attention to micro-level detail gives the company a competitive edge. CIEL drives on the motive of one extra degree of effort separate good from great. We provide cost-effective business solutions in a limited timeline and simultaneously ensure quality standards and an effective chain of command.
                </p>

              </div>
              <div className="flex justify-center">
                <p className="text-ptColor font-normal track-wide text-sm w-8/12 mt-2">
                  We provide cost-effective business solutions in a limited timeline and simultaneously ensure quality standards and an effective chain of command.
                </p>

              </div>
              <div className="flex justify-center mt-10">
                <div className="mt-3 w-8/12 lg:-ml-6">
                  <GradientButton inLineClassName="gap-x-4" customClassName="w-52" link="/request-consultation" text={"Request Consultation"} />

                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-3 md:mt-0">
              <div className="w-8/12">
                <Image src={ourProcess} alt="requestConsultationSvg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>)
}
export default OurProcessTabs;