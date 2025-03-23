import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        id:1,
        name: 'Marcelo Contreras Gonzalez',
        userName: 'Darcadian',
        isFollowing: true
    },
    {
        id:2,
        name: 'Felipe Fernandez Morel',
        userName: 'MatutiDark',
        isFollowing: false
    },
    {
        id:3,
        name: 'Nicolas Cañas Arriagada',
        userName: 'Combinao',
        isFollowing: true
    },
    {
        id:4,
        name: 'Jordan Urzua Escudero',
        userName: 'Jordanium101',
        isFollowing: false
    },
    {
        id:5,
        name: 'Miguel Angel Durán',
        userName: 'midudev',
        isFollowing: true
    }

]

export function App(){
    const formatUserName = (username) => `@${username}`
    return(
        <section className='App'>
        {
            users.map(({id,name, userName, isFollowing}) => (
                <TwitterFollowCard key={id} formatUserName={formatUserName}  username={userName} initialIsFollowing={isFollowing}>
                {name}
                </TwitterFollowCard>
            )
            )
        }
            
        </section>
    )
}