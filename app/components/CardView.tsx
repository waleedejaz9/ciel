import propTypes from 'prop-types'
import Image from 'next/image'
import { rightArrow } from '../../global'

interface cardViewProps {
    customClassName?: string;
    imageClassName?: string;
    imageSrc: {
        src: string;
        height: number;
        width: number;
    }
    text: string;
    textClassName?: string;
    learnMoreCheck?: Boolean;
    cardHeadingCheck?: Boolean;
    headingText?: string;
    buttonClassName?: string
}
const CardView = (props: cardViewProps) => {
    return (
        <>
            <div className={`${props.customClassName}`}>
                <div className={`${props.imageClassName}`}>
                    <Image width={props.imageSrc.width} height={props.imageSrc.height} src={props.imageSrc.src} alt='logo'></Image>
                </div>
                {
                    props.cardHeadingCheck && <h1 className="font-Montserrat font-bold tracking-wide capitalize leading-7 text-lg">{props.headingText}</h1>
                }
                <p className={`${props.textClassName}`}>
                    {props.text}
                </p>
                {props.learnMoreCheck && <div>
                    <button className='flex gap-x-3 items-center'>
                        <h3 className={`font-Montserrat font-semibold text-xs leading-9 capitalize text-primary1 ${props.buttonClassName}`}>
                            Learn More
                        </h3>
                        <Image className='w-5' src={rightArrow} alt='rightArrow'></Image>
                    </button>
                </div>}
            </div>
        </>
    )
}
CardView.propTypes = {
    customClassName: propTypes.string,
    imageClassName: propTypes.string,
    imageSrc: propTypes.object,
    text: propTypes.string,
    textClassName: propTypes.string
}
export default CardView;

