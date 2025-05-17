import VideoCard from "./VideoCard"

const videos = [
    {
    title:"Achha ji main hari chalo maan jao na [Colorized] | Kala Pani (1958)",
    channel:"Evergreen music",
    views:"25M views",
    timestamp:"2 years ago",
    image:"../public/ZN_XrB_St-8-HD.jpg",
    thumbnailImage:"../public/thumb (1).png"
    },
    {
    title:"Ye Dil Tum Bin Kahin Lagta Nahin - Lata Mangeshkar, Mohammed Rafi [Slowed+Reverb]",
    channel:"Evergreen music",
    views:"21M views",
    timestamp:"1 year ago",
    image:"../public/i2.jpg",
    thumbnailImage:"../public/thumb (1).png"
    },
    {
    title:"Achha ji main hari chalo maan jao na [Colorized] | Kala Pani (1958)",
    channel:"Evergreen music",
    views:"25M views",
    timestamp:"2 years ago",
    image:"../public/ZN_XrB_St-8-HD.jpg",
    thumbnailImage:"../public/thumb (1).png"
    },
    {
    title:"Ye Dil Tum Bin Kahin Lagta Nahin - Lata Mangeshkar, Mohammed Rafi [Slowed+Reverb]",
    channel:"Evergreen music",
    views:"21M views",
    timestamp:"1 year ago",
    image:"../public/i2.jpg",
    thumbnailImage:"../public/thumb (1).png"
    },
    {
    title:"Achha ji main hari chalo maan jao na [Colorized] | Kala Pani (1958)",
    channel:"Evergreen music",
    views:"25M views",
    timestamp:"2 years ago",
    image:"../public/ZN_XrB_St-8-HD.jpg",
    thumbnailImage:"../public/thumb (1).png"
    },


]
export const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                videos.map(video => (
                    <VideoCard 
                    title={video.title}
                    channel={video.channel}
                    views={video.views}
                    timestamp={video.timestamp}
                    image={video.image}
                    thumbnailImage={video.thumbnailImage}
                    />
                ))
            }
        </div>
    )
}
