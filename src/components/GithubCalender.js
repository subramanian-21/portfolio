import { useEffect } from "react"
import gitHubcalendar from '@hackclub/github-calendar';


const GitHubCalendar = ({username}) =>{  useEffect(() => {
    gitHubcalendar('.github-calendar', username, { responsive: true });
  }, [username]);

  return <div className="github-calendar"></div>;

}
export default GitHubCalendar