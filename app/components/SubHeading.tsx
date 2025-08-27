interface SubHeadingProps {
  headingText: string;
  customClassName?: string;
  is_large_content?: boolean;
  headingTextClassName?: string;
}

const SubHeading = (props: SubHeadingProps) => {
  return (
    <div className={`${props.customClassName}`}>
      <h3
        className={`${
          props.is_large_content
            ? "font-lemon_milk text-4xl font-bold pb-2"
            : "text-sm font-Montserrat font-medium"
        }  capitalize leading-5  ${
          props.headingTextClassName
            ? props.headingTextClassName
            : "text-primary1"
        }`}>
        {props.headingText}
      </h3>
    </div>
  );
};
export default SubHeading;
