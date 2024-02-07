import { NextResponse } from "next/server"

export const GET = (req)=>{
    console.log('first')
const res =  NextResponse.json({
    user:'adeel'
})
res.cookies.set('user', "adeel",{maxAge:30482304823048})
res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
return res
// return NextResponse.json("GET")
}