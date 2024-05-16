export default function Logo({ link }) {
    return (
        <div className="flex items-center h-full mt-2">
            <a href={link} className="bg-black text-white px-1.5 py-1.5 rounded tracking-tight font-bold text-lg">PRO</a>
        </div>
    )
}