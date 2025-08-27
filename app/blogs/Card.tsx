import Image from "next/image";
import * as blog_images from "assets/blog";
import Link from "next/link";

const Card = ({
  Id,
  icon,
  title,
  release_date,
}: {
  Id: number;
  icon: any;
  title: string;
  release_date: string;
}) => {
  return (
    <div>
      <div>
        <Image src={icon} alt="tech icon here" />
      </div>
      <div>
        <p className="text-primary1 pt-2 pb-2">Design | {release_date}</p>
        <h3 className="font-medium font-Montserrat text-2xl">{title}</h3>
        <div className="py-2 flex items-center gap-2">
          <Link className="capitalize text-primary1" href={`/blogs/${Id}`}>
            Learn More
          </Link>
          <span>
            <Image src={blog_images.right_arrow} alt="tech icon here" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
