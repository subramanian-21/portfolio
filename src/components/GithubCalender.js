import { useEffect } from "react"
import gitHubcalendar from 'github-calendar';


const GithubCalendar = ({username}) =>{  useEffect(() => {
    gitHubcalendar('.github-calendar', username, { responsive: true });
  }, [username]);

  return <div className="github-calendar"></div>;

}
export default GithubCalendar