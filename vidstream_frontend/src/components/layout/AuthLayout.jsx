function AuthLayout({ children }) {
    return (
        <div className="
            min-h-screen
            bg-gray-50
            flex
            items-center
            justify-center
            px-4
            py-8
            m-2
        ">
            {children}
        </div>
    );
}

export default AuthLayout;