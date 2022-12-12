import Image from 'next/image'
import LoadingImage from '../../public/ball-triangle.svg'
const Loading = () => {
    return(
        <>
        <div className="loading">
            <Image src={LoadingImage} width={30} height={30} alt="Loading Images" />
        </div>
        </>
    )
}
export default Loading