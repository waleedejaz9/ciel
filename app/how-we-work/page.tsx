import Image from "next/image";
import * as blogs from "assets/blog";
import * as services from "assets/services";
import * as stack_images from "assets/stack";
import SectionHeading from "@/components/SectionHeading";
import DevelopmentProcess from "@/services/DevelopmentProcess";
import FooterBanner from "@/components/FooterBanner";

const HowWeWork = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <div
          className="flex flex-row bg-primary1 h-14 w-80 rounded-lg"
          style={{
            border: "1.58px solid",
            borderImageSource:
              "linear-gradient(269.23deg, rgba(132, 71, 233, 0.6) 0.62%, rgba(62, 118, 255, 0.6) 51.96%, rgba(255, 67, 187, 0.6) 100.19%)",
          }}
        >
          <div
            className="flex justify-center gap-2 bg-tabColor items-center h-full w-56 rounded-lg"
            style={{
              clipPath: "polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%)",
            }}
          >
            <Image src={stack_images.home_svg} alt="home icon here" />
            <h3 className=" text-md font-Montserrat text-left text-primary1 font-bold tracking-wide">
              Company
            </h3>
          </div>
          <div className="flex justify-center items-center h-full w-56">
            <h3 className="text-md font-Montserrat capitalize text-center text-mainBg tracking-wide">
              Get Free Qoute
            </h3>
          </div>
        </div>
      </div>

      <section className="pb-16">
        <div className="container mx-auto">
          <SectionHeading
            primary_title="for Quick Development"
            secondary_title=" Software Develoment Platforms & Tools&nbsp;"
          />
        </div>
      </section>

      <DevelopmentProcess
        primary_left
        isPrimaryBullets
        is_desc_gray={false}
        sub_heading="Model"
        primary_title="Agile&nbsp;"
        secondary_title="Development"
        side_img={blogs.blog_image}
        bulletContent={[
          "1. Discovery Workshop",
          "2. Planning",
          "3. Design",
          "4. Project Development Development",
          "5. Testing",
          "6. Maintenance",
        ]}
        secondary_detail="We build Future with human mind."
        description="We base our working approach on iterative processes, adaptability, and customer satisfaction with delivering rapid results. All our projects are subjected with the relevant models to ensure a practical and effective approach."
      />

      <DevelopmentProcess
        primary_left
        order="order-1"
        sub_heading="01"
        is_large_content
        is_desc_gray={false}
        primary_title="Agile&nbsp;"
        secondary_title="Development"
        side_img={services.services_01}
        bulletContent={[
          "Define project goals",
          "Determine a budget",
          "Set a timeline",
          "Establish measurements for success",
        ]}
        description="We initaite discovery workshop as an initial meeting during project management's discovery phase. The project team meets with clients and stakeholders to determine the project's goals and logistics, such as the budget and timeline. The participants work together to define the project objectives and establish standards for success."
      />

      <DevelopmentProcess
        primary_left
        sub_heading="02"
        is_large_content
        is_desc_gray={false}
        primary_title="Make&nbsp;"
        secondary_title="Planning"
        side_img={services.services_02}
        headingTextClassName="text-orange_primary"
        bulletContent={[
          "Managerial function",
          "Goal oriented",
          "Pervasive",
          "Continuous Process",
          "Intellectual Process",
          "Futuristic",
          "Decision making",
        ]}
        description="Planning is the fundamental management function, which involves deciding beforehand, what is to be done, when is it to be done, how it is to be done and who is going to do it. It is an intellectual process which lays down an organization's objectives and develops various courses of action, by which the organization can achieve those objectives. It chalks out exactly, how to attain a specific goal."
      />

      <DevelopmentProcess
        primary_left
        order="order-1"
        sub_heading="03"
        is_large_content
        is_desc_gray={false}
        primary_title="UI/UX&nbsp;"
        secondary_title="Development"
        side_img={services.services_03}
        bulletContent={[
          "UX Research",
          "Sketching low/ high fiedelity",
          "Design Implementation",
          "Design Prototyping",
          "Design Testing",
          "Hand Off",
          "Development",
        ]}
        description="UI UX designers create the user interface for an app, website, or other interactive media. At CIel experts includes collaborating with product managers and engineers to gather requirements from users before designing ideas that can be communicated using storyboards. They also process flows or sitemaps."
      />

      <DevelopmentProcess
        primary_left
        sub_heading="04"
        is_large_content
        is_desc_gray={false}
        primary_title="Project&nbsp;"
        secondary_title="Development"
        side_img={services.services_04}
        headingTextClassName="text-orange_primary"
        bulletContent={[
          "Initiation",
          "Planning",
          "Execution",
          "Control",
          "Closing",
        ]}
        description="Project development involves organizing and planning all the variables that go into a project, including deciding materials, creating a budget and creating tasks for team members. It also involves the processes needed to complete a project, like changing the plans throughout project completion and identifying areas of improvement to help the project run more smoothly."
      />

      <DevelopmentProcess
        primary_left
        order="order-1"
        sub_heading="05"
        is_large_content
        is_desc_gray={false}
        primary_title="Quality&nbsp;"
        secondary_title="Testing"
        side_img={services.services_05}
        bulletContent={[
          "Define project goals",
          "Determine a budget",
          "Set a timeline",
          "Establish measurements for success",
        ]}
        description="Quality assurance (QA) testing is a process organizations use to ensure their products and services meet specified regulations and standards. It's a series of techniques that Ciel employs to prevent issues from occurring and ensure they satisfy the customer with their finished product."
      />

      <DevelopmentProcess
        primary_left
        sub_heading="06"
        is_large_content
        is_desc_gray={false}
        primary_title="Maintenance&nbsp;"
        secondary_title="Support"
        side_img={services.services_06}
        headingTextClassName="text-orange_primary"
        bulletContent={[
          "Corrective",
          "Preventive",
          "Risk-based",
          "Development",
          "Condition-based",
        ]}
        description="Maintenance and Support means updates, upgrades, patches, fixes, etc. and technical support provided for the Products and Services by Ciel to ensure everything runs smoothly even after it is delivered."
      />

      <div>
        <section className="pb-16 pt-20">
          <div className="container mx-auto">
            <SectionHeading
              primary_title="Communication Structure"
              secondary_detail="we follow agile method"
              secondary_title=" Project&nbsp;"
            />
          </div>
        </section>

        <div className="container flex mx-auto gap-7">
          <div
            style={{ boxShadow: "52px 0px 32px -12px #ADADAD21" }}
            className="w-4/12  flex justify-center"
          >
            <div className="w-8/12 py-5">
              <h2 className="font-Montserrat font-bold text-3xl uppercase text-center">
                Daily Scrum Standup
              </h2>
              <h3 className="font-Montserrat text-2xl font-medium uppercase text-blueLight text-center pt-5">
                mon - fri
              </h3>
              <p className="font-Montserrat text-base font-normal text-black text-center pt-1">
                30 minutes
              </p>
              <div className="h-0.5 w-full bg-transLine my-4 "></div>
              <p className="font-Montserrat text-base font-normal text-paragraph text-center">
                Check previous day’s work, current day’s plans, any queries,
                hurdles etc
              </p>
              <p className="font-Montserrat text-base font-normal text-paragraph text-center pt-1">
                Project Manager with the entire Project Team
              </p>
            </div>
          </div>
          <div className="w-4/12  flex justify-center">
            <div className="w-8/12 py-5">
              <h2 className="font-Montserrat font-bold text-3xl uppercase text-center">
                Daily Scrum Standup
              </h2>
              <h3 className="font-Montserrat text-2xl font-medium uppercase text-blueLight text-center pt-5">
                mon - fri
              </h3>
              <p className="font-Montserrat text-base font-normal text-black text-center pt-1">
                30 minutes
              </p>
              <div className="h-0.5 w-full bg-transLine my-4 "></div>
              <p className="font-Montserrat text-base font-normal text-paragraph text-center">
                Check previous day’s work, current day’s plans, any queries,
                hurdles etc
              </p>
              <p className="font-Montserrat text-base font-normal text-paragraph text-center pt-1">
                Project Manager with the entire Project Team
              </p>
            </div>
          </div>
          <div className="w-4/12  flex justify-center">
            <div className="w-8/12 py-5">
              <h2 className="font-Montserrat font-bold text-3xl uppercase text-center">
                Daily Scrum Standup
              </h2>
              <h3 className="font-Montserrat text-2xl font-medium uppercase text-blueLight text-center pt-5">
                mon - fri
              </h3>
              <p className="font-Montserrat text-base font-normal text-black text-center pt-1">
                30 minutes
              </p>
              <div className="h-0.5 w-full bg-transLine my-4 "></div>
              <p className="font-Montserrat text-base font-normal text-paragraph text-center">
                Check previous day’s work, current day’s plans, any queries,
                hurdles etc
              </p>
              <p className="font-Montserrat text-base font-normal text-paragraph text-center pt-1">
                Project Manager with the entire Project Team
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterBanner />
    </>
  );
};

export default HowWeWork;
