interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({
    children
} : LayoutProps)=>{
    return (
        <div  className="flex flex-col gap-y-4">
            <nav className="text-xs p-1 bg-red-200 text-white">
                i am a reusable navbar!
            </nav>
            <nav className="text-xs p-1 bg-red-300 text-white">
                i am a  navbar!
            </nav>
            <nav className="text-xs p-1 bg-red-400 text-white">
                i am a  navbar!
            </nav>
            <nav className="text-xs p-1 bg-red-500 text-white">
                i am a navbar!
            </nav>
            {children}</div>
    )
}

export default Layout;