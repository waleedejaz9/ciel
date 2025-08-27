import Image from "next/image";
import { portfolioTab1, portfolioTab2, portfolioTab3, portfolioTab4, portfolioTab5, portfolioTab6 } from "../global"
const Portfolio = () => {

    return (
        <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-x-7 gap-y-7 w-9/12">
            <div>
                <Image className="w-full" src={portfolioTab1} alt="portfolio1"></Image>
            </div>
            <div>
                <Image className="w-full" src={portfolioTab2} alt="portfolio2"></Image>
            </div>
            <div>
                <Image className="w-full" src={portfolioTab3} alt="portfolio3"></Image>
            </div>
            <div>
                <Image className="w-full" src={portfolioTab4} alt="portfolio4"></Image>
            </div>
            <div>
                <Image className="w-full" src={portfolioTab5} alt="portfolio5"></Image>
            </div>
            <div>
                <Image className="w-full" src={portfolioTab6} alt="portfolio6"></Image>
            </div>
        </div>

        </div>
    )
}
export default Portfolio;