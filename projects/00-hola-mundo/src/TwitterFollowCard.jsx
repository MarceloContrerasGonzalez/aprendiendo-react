import { useState } from "react"

export function TwitterFollowCard({children, formatUserName, username='unknown', initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    /* hacemos una ternaria */
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-image' alt="Avatar del usuario" src={`https://unavatar.io/X/${username}`}/>
                <div className='tw-followCard-textBlock'>
                    <strong className='tw-followCard-name'>{children}</strong>
                    <span className='tw-followCard-user'>{formatUserName(username)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}