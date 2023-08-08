import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){


    return (
        <section className='App'>
            <TwitterFollowCard username="manolo_cabrera">Manolo Cabrera</TwitterFollowCard>
            <TwitterFollowCard username="midudev">Miguel Angel Durán</TwitterFollowCard>
        </section>
    )
}
