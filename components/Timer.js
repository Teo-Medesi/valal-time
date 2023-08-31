"use client"
import { useBranch } from "@/context/BranchContext";
import { useStopwatch } from "react-timer-hook";

const Timer = () => {
    const { isRunning, start: start_timer, reset: reset_timer, pause: pause_timer, hours, minutes, seconds } = useStopwatch({ autoStart: false });
    const { selectedTask } = useBranch();

    const reset = () => {
        reset_timer(undefined, false);
    }

    const stop = () => {
        reset_timer(undefined, false);
    }

    return (
        <div className='hero my-8'>
            <div className='hero-content flex flex-col gap-8 md:gap-16'>
                <h1 className="text-5xl text-neutral-content">{`${hours}h ${minutes}m ${seconds}s`}</h1>
                <div className="flex gap-8">
                    <div onClick={reset} className={`${!selectedTask?.id && "btn-disabled"} btn-lg btn btn-primary btn-outline p-4`}><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.364 18.364C19.9926 16.7353 21 14.4853 21 12C21 7.02944 16.9706 3 12 3C9.51472 3 7.26472 4.00736 5.63604 5.63604M18.364 18.364C16.7353 19.9926 14.4853 21 12 21C7.02944 21 3 16.9706 3 12C3 9.51472 4.00736 7.26472 5.63604 5.63604M18.364 18.364L5.63604 5.63604" stroke="#000000" className="stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
                    <div onClick={isRunning ? pause_timer : start_timer} className={`${!selectedTask?.id && "btn-disabled cursor-not-allowed"} btn-lg btn btn-primary btn-outline p-4`}>
                        {
                            isRunning
                                ?
                                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 5V19M16 5V19" stroke="#000000" className="stroke-current fill-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                :
                                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="#000000" className="fill-current stroke-current" stroke-width="2" stroke-linejoin="round"></path> </g></svg>
                        }
                    </div>
                    <div onClick={stop} className={`${!selectedTask?.id && "btn-disabled"} btn-lg btn btn-primary btn-outline p-4`}><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4" y="4" width="16" height="16" rx="2" className="stroke-current fill-current" stroke="#161212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect> </g></svg></div>
                </div>
            </div>
        </div>
    )
}

export default Timer