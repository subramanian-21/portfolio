import Hangman from "../minigames/Hangman"

const Games = () =>{
return(<div className="w-4/5 bg-black container mx-auto min-h-[100vh] font-mono text-white">
    <div className="text-4xl w-full flex justify-center  pt-5 ">Mini Games</div>
    <div className="flex w-full gap-2">
        <div className="bg-[#282c34] flex-1 flex justify-center items-center p-5">Tic Tac Toe</div>
        <div className="bg-[#282c34] flex-1 flex justify-center items-center p-5">Hangman Game</div>
        <div className="bg-[#282c34] flex-1 flex justify-center items-center p-5">Memory Game</div>
        <div className="bg-[#282c34] flex-1 flex justify-center items-center p-5">Rock Paper Scissors</div>
        <div className="bg-[#282c34] flex-1 flex justify-center items-center p-5">Quiz Game</div>
        <div className="bg-[#282c34] flex-1 flex justify-center items-center p-5">Tic Tac Toe</div>
        <div className="bg-[#282c34] flex-1 flex justify-center items-center p-5">Tic Tac Toe</div>
    </div>
</div>)
}
export default Games