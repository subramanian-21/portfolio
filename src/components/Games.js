import Hangman from "../minigames/Hangman"
import Ttt from "../minigames/Ttt"
import Memory from "../minigames/Memory"
import Rps from "../minigames/Rps"
import Quiz from "../minigames/Quiz"
import { useState } from "react"
const Games = () =>{

    const [game,changeGame] = useState(<Ttt/>)
return(<div className="w-4/5 bg-black container mx-auto min-h-[100vh] font-mono text-white">
    <div className="text-4xl w-full flex justify-center  pt-5 ">Mini Games</div>
    <div className="flex w-full gap-2 text-[10px] ">
        <div onClick={()=>{changeGame(<Ttt/>)}} className="bg-[#282c34] flex-1 flex justify-center items-center p-2 md:p-5">Tic Tac Toe</div>
        <div onClick={()=>{changeGame(<Hangman/>)}} className="bg-[#282c34] flex-1 flex justify-center items-center p-2 md:p-5">Hangman</div>
        <div onClick={()=>{changeGame(<Memory/>)}} className="bg-[#282c34] flex-1 flex justify-center items-center p-2 md:p-5">Memory game</div>
        <div onClick={()=>{changeGame(<Rps/>)}} className="bg-[#282c34] flex-1 flex justify-center items-center p-2 md:p-5">RPS</div>
        <div onClick={()=>{changeGame(<Quiz/>)}} className="bg-[#282c34] flex-1 flex justify-center items-center p-2 md:p-5">Quiz Game</div>

    </div>
    <div className="w-full h-[10px] bg-red-500"></div>
    {game}
</div>)
}
export default Games