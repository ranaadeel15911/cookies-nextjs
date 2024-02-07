import { NextResponse } from "next/server"

export const GET = (req)=>{
const res =  NextResponse.json({
    user:'adeel Nadeem'
})
res.cookies.delete('user',{maxAge:0,expires: new Date(0)})
res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
return res
// return NextResponse.json("GET")
}