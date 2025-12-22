function Greeting({userName = "User", userIcon}) {
    return (
        <div className="flex items-start gap-3 mb-6">
            <img 
                src={userIcon || "#"} 
                alt="user-icon" 
                className="w-10 h-10 rounded-full border border-grey-300"
            />
            <h2 className="text-xl font-semibold text-grey-200">
                Welcome back, {userName}!
            </h2>
        </div>
    );
}

export default Greeting;