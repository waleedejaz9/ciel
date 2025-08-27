import Image from "next/image";
import * as portfolio_images from "assets/portfolio";
import "./style.css";

interface ImageItem {
  image: string;
}

const AllSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-col items-center">
        <div className="w-10/12 pt-3 relative hovered hover:mt-10 hover:mb-10">
          <Image
            height={520}
            className="mx-auto"
            src={portfolio_images.product2}
            alt="All Tabs Image"
          />
          <div className="flex justify-center heading">
            <div className="flex items-center justify-between absolute bottom-5 z-20 w-11/12 mx-auto">
              <h2 className="font-montessrat font-bold text-xl uppercase text-white">
                MEGAFANS
              </h2>
              <Image
                className="h-10"
                src={portfolio_images.arrowIcon}
                alt="arrow icon"
              />
            </div>
          </div>
          <div className="overlay z-10"></div>
        </div>
        <div className="w-10/12 pt-3 relative hovered hover:mt-10 hover:mb-10">
          <Image
            height={520}
            className="mx-auto"
            src={portfolio_images.product4}
            alt="All Tabs Image"
          />
          <div className="flex justify-center heading">
            <div className="flex items-center justify-between absolute bottom-5 z-20 w-11/12 mx-auto">
              <h2 className="font-montessrat font-bold text-xl uppercase text-white">
                MEGAFANS
              </h2>
              <Image
                className="h-10"
                src={portfolio_images.arrowIcon}
                alt="arrow icon"
              />
            </div>
          </div>
          <div className="overlay z-10"></div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-10/12 pt-3 relative hovered hover:mt-10 hover:mb-10">
          <Image
            height={520}
            className="mx-auto"
            src={portfolio_images.product1}
            alt="All Tabs Image"
          />
          <div className="flex justify-center heading">
            <div className="flex items-center justify-between absolute bottom-5 z-20 w-11/12 mx-auto">
              <h2 className="font-montessrat font-bold text-xl uppercase text-white">
                MEGAFANS
              </h2>
              <Image
                className="h-10"
                src={portfolio_images.arrowIcon}
                alt="arrow icon"
              />
            </div>
          </div>
          <div className="overlay z-10"></div>
        </div>
        <div className="w-10/12 pt-3 relative hovered hover:mt-10 hover:mb-10">
          <Image
            height={520}
            className="mx-auto"
            src={portfolio_images.product5}
            alt="All Tabs Image"
          />
          <div className="flex justify-center heading">
            <div className="flex items-center justify-between absolute bottom-5 z-20 w-11/12 mx-auto">
              <h2 className="font-montessrat font-bold text-xl uppercase text-white">
                MEGAFANS
              </h2>
              <Image
                className="h-10"
                src={portfolio_images.arrowIcon}
                alt="arrow icon"
              />
            </div>
          </div>
          <div className="overlay z-10"></div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10/12 pt-3 relative hovered hover:mt-10 hover:mb-10">
          <Image
            height={520}
            className="mx-auto"
            src={portfolio_images.product3}
            alt="All Tabs Image"
          />
          <div className="flex justify-center heading">
            <div className="flex items-center justify-between absolute bottom-5 z-20 w-11/12 mx-auto">
              <h2 className="font-montessrat font-bold text-xl uppercase text-white">
                MEGAFANS
              </h2>
              <Image
                className="h-10"
                src={portfolio_images.arrowIcon}
                alt="arrow icon"
              />
            </div>
          </div>
          <div className="overlay z-10"></div>
        </div>
        <div className="w-10/12 pt-3 relative hovered hover:mt-10 hover:mb-10">
          <Image
            height={520}
            className="mx-auto"
            src={portfolio_images.product6}
            alt="All Tabs Image"
          />
          <div className="flex justify-center heading">
            <div className="flex items-center justify-between absolute bottom-5 z-20 w-11/12 mx-auto">
              <h2 className="font-montessrat font-bold text-xl uppercase text-white">
                MEGAFANS
              </h2>
              <Image
                className="h-10"
                src={portfolio_images.arrowIcon}
                alt="arrow icon"
              />
            </div>
          </div>
          <div className="overlay z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default AllSection;
