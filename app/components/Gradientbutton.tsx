import Image from "next/image";
import { rightConsultationArrow } from '../../global'
import Link from "next/link";
import propTypes from 'prop-types';

interface gradientButtonProps {
    text: string;
    link: string;
    customClassName?: string
    inLineClassName?: string
}

const GradientButton = (props: gradientButtonProps) => {
    return (
        <>
            <button className={`shadow shadow-gradientButtonColor shadow-md rounded-full bg-gradient-to-r from-gradientColor3 via-gradientColor2 to-gradientColor1 p-0.5 ${props.customClassName}`}>
                <Link href={props.link}>
                    <div className={`flex pt-2 pb-2 rounded-full items-center justify-center bg-white back ${props.inLineClassName}`}>
                        <h3 className="bg-gradient-to-r from-gradientColor3 via-gradientColor2 to-gradientColor1 bg-clip-text text-transparent text-sm">
                            {props.text}
                        </h3>
                        <Image className="w-3 mt-0.5" src={rightConsultationArrow} alt="rightSvg" />
                    </div>
                </Link>
            </button>
        </>
    )
}

GradientButton.propTypes = {
    text: propTypes.string.isRequired,
    link: propTypes.string,
    customClassName: propTypes.string,
    inLineClassName: propTypes.string
}

export default GradientButton;