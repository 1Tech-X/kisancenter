import { APPS } from "./Constants"
export const getApp=()=>{
    const main =APPS.find((app)=>app.main)
    if(!main) throw new Error("app must have main")
    const subdomain=getSubdomain(window.location.hostname)
    if(subdomain==="") return main.app

    
    const app=APPS.find((app)=> subdomain===app.subdomain)
    if(!app) return main.app;
    return app.app;
    

}
const getSubdomain = (location)=>{
 const locationParts=location.split(".");
 let sliceTill=-2;
 const isLocalHost=locationParts.slice(-1)[0]==="localhost";

 if(isLocalHost) sliceTill=-1;
 return locationParts.slice(0,sliceTill).join("");
}