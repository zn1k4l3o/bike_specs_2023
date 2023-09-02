import "./css/homeLinkBox.scss"

export default function LinkBox (
    {
        title,
        text,
        url,
        index
    }
    ) {

    let a = "home-link-box";
    a = index === 3 ? "home-link-box center-margin" :"home-link-box" ;
    return (
        <div className={a}>
            <h3>{title}</h3>
            <p>{text}</p>
            <button href={url}>Read More</button>
        </div>
    );
}