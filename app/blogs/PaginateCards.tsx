import { useState } from "react";
import Card from "./Card";
import * as blog_images from "assets/blog";
import { default as paginateRightArrow } from "assets/right_arrow.svg";
import { default as paginateleftArrow } from "assets/left_arrow.svg";
import ReactPaginate from "react-paginate";
import Image from "next/image";

const items = [
  {
    title: "Top Business & Technology Trends 2022",
    icon: blog_images.blog,
    release_date: "April 25,2022",
  },
  {
    title: "Top Business & Technology Trends 2022",
    icon: blog_images.blog,
    release_date: "April 25,2022",
  },
  {
    title: "Top Business & Technology Trends 2022",
    icon: blog_images.blog,
    release_date: "April 25,2022",
  },
  {
    title: "Top Business & Technology Trends 2022",
    icon: blog_images.blog,
    release_date: "April 25,2022",
  },
  {
    title: "Top Business & Technology Trends 2022",
    icon: blog_images.blog,
    release_date: "April 25,2022",
  },
  {
    title: "Top Business & Technology Trends 2022",
    icon: blog_images.blog,
    release_date: "April 25,2022",
  },
];

const PaginateCard = ({ type }: { type: string }) => {
  console.log({ type });
  const [itemsPerPage, setItemPerPage] = useState(6);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  // api call here to get all blogs
  // create function here to filter blogs here against
  // selected type

  return (
    <>
      <div className="flex justify-center flex-wrap px-32 mx-auto gap-10">
        {currentItems.map((val, index) => (
          <Card
            Id={index + 1}
            key={index}
            icon={val.icon}
            title={val.title}
            release_date={val.release_date}
          />
        ))}
      </div>

      <div className="flex justify-center mx-auto items-center mt-10">
        <ReactPaginate
          nextLabel={
            <>
              <Image
                src={paginateRightArrow}
                width={60}
                alt="paginateRightArrow"
              />
            </>
          }
          breakLabel="..."
          previousLabel={
            <>
              <Image
                src={paginateleftArrow}
                width={60}
                alt="paginateLeftArrow"
              />
            </>
          }
          pageCount={pageCount}
          pageRangeDisplayed={6}
          renderOnZeroPageCount={null}
          onPageChange={handlePageClick}
          pageClassName="pagination"
          pageLinkClassName="pagination"
          disabledClassName="disablePagination"
          disabledLinkClassName="disablePagination"
          activeLinkClassName="paginateActive"
          containerClassName="paginateContainer"
        />
      </div>
    </>
  );
};

export default PaginateCard;
