export default function UserProfile({ url = "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" }) {
    return (
        <div className="UserProfile hover:cursor-pointer w-14">
            <img src={url} alt="" className="rounded-full" />
        </div>
    )
}