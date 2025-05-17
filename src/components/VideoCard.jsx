

function VideoCard(props){

    return <div className="p-2 ">
        <img src={props.image} alt="" className="rounded-xl w-full h-40 md:h-48 lg:h-56 object-cover"/>

        {/* video details */}
        <div className="grid grid-cols-12 pt-2">

            <div className="col-span-1">
                {/* image */}
                <img className="rounded-full h-12 w-12" src={props.thumbnailImage} alt="" />
            </div>

            <div className="col-span-11 pl-5">
                {/* title and description */}
                <p>{props.title}</p>
                <p className="text-gray-400" >{props.channel}</p>
                <p className="text-gray-400 ">{props.views}. {props.timestamp}</p>
            </div>

        </div>
    </div>
}


export default VideoCard;