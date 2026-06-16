const ratelimit=require("@upstash/ratelimit");

const ratelimiter = async (req, res, next) => {
    try {
        const{success} = await ratelimit.limit("my-limit-key");
        if(!success){
            return res.status(429).json({ message: "Too many requests, please try again later." });
        }   
        next();
    } catch (error) {
        console.error("Error in rate limiter middleware:", error);
        res.status(500).json({ message: "Internal server error" });
        next(error);
    } 
}