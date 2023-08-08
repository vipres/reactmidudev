export function TwitterFollowCard ({username, name, isFollowing}){
    const imageSrc = `https://unavatar.io/twitter/${username}`
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                src={imageSrc} alt="El avatar de Manolo Cabrera" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='.tw-followCard-infoUserName'>@{username}</span>
                </div>
            </header>
            <aside>
                <button>Seguir</button>
            </aside>
        </article>
    )
}
