export function TwitterFollowCard ({children, username, isFollowing}){


    const imageSrc = `https://unavatar.io/twitter/${username}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                src={imageSrc} alt="El avatar de Manolo Cabrera" />
                <div className='tw-followCard-info'>
                    <strong>{children}  </strong>           <span className='.tw-followCard-infoUserName'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName}>{text}</button>
            </aside>
        </article>
    )
}
