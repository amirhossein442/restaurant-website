import { Navigation } from "./Navigation"

export const Header = ()=> {
    return(
        <div className="flex justify-between items-center h-28">
            <div>
                <img className="w-42 h-36 -ml-10" src="/images/restaurant-logo.jpg"/>
            </div>
            <Navigation />
        </div>
        
    )
}