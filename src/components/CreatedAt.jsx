import { parseISO, formatDistanceToNowStrict } from "date-fns";


const CreatedAt = ({ timeStamp , classname}) => {
    
    let timeAgo = "";
    
    if(timeStamp){
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNowStrict(date)
    timeAgo = `${timePeriod} ago` ; 
}
return (
<p className={classname} title={timeAgo}>{timeAgo}</p>
)
}

export default CreatedAt