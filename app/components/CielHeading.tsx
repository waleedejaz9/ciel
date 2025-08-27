import propTypes from 'prop-types';

interface CielHeadingProps {
    headingTextPrimary: string;
    headingTextSecondary: string;
    headingTextPrimaryClassName?: string;
    headingTextSecondaryClassName?: string;
    customClassName?: string
}

const CielHeading = (props: CielHeadingProps) => {
    return (
        <div className={`${props.customClassName}`}>
            <h3 className={`font-bold text-2xl uppercase font-Montserrat ${props.headingTextPrimaryClassName}`}>
                {props.headingTextPrimary}
                <span className={`text-primary1 ${props.headingTextSecondaryClassName}`}>
                    {props.headingTextSecondary}
                </span>
            </h3>
        </div>
    )
}

CielHeading.propTypes = {
    headingTextPrimary: propTypes.string.isRequired,
    headingTextSecondary: propTypes.string.isRequired,
    headingTextPrimaryClassName: propTypes.string,
    headingTextSecondaryClassName: propTypes.string,
    customClassName: propTypes.string
}

export default CielHeading;
