import { Outlet } from "react-router-dom"
import { Footer } from "../Layout/Footer"
import { Headers } from "../Layout/Header"


export const MainLayout = () =>{
    return (
        <>
       
        <Headers/>
        <Outlet/>
        <Footer/>
        </>
    )
}