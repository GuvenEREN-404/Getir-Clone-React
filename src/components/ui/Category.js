

export default function Category( {category: {id,title,image} }) {
    return (
        <a href="#" className="flex flex-col group hover:bg-purple-50 items-center text-center p-4 gap-y-4">
            <img src={image} alt={title} className="rounded border-gray-200 w-12 h-12"/>
            <span className="text-sm font-semibold text-gray-700  group-hover:text-brand-color tracking-tight whitespace-nowrap">{title}</span>
        </a>
    )
}
