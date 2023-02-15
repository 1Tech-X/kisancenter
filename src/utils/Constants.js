import { App, SubDomain, SubDomain1, SubDomain2 } from "../App";

export const APPS=[
    {
        subdomain:"www",
        app:App,
        main:true
        
    },
    {
        subdomain:"prashant",
        app:SubDomain,
        main:false
        
    },
    {
        subdomain:"example",
        app:SubDomain1,
        main:false
        
    },
    {
        subdomain:"datta",
        app:SubDomain2,
        main:false
        
    },
]