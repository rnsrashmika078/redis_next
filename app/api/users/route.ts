import { getRedis } from "@/app/lib/redis";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        //cache
        const key = "users:dummyjson";
        const r = await getRedis();
        const cached = await r.get(key);
        if (cached) {
            console.log("getting from cached!");
            return NextResponse.json({
                message: "Success ( redis cache) ",
                users: JSON.parse(cached),
            });
        }
        //fresh
        const res = await fetch("https://dummyjson.com/users", {});


        if (!res.ok) {
            return NextResponse.json({
                message: "error while request data!",
                users: null,
            });
        }


        const result = await res.json();
        const users = result.users;


        // Time to Live
        await r.set(key, JSON.stringify(users), { EX: 60 });


        return NextResponse.json({
            message: "Success! ( fresh ) ",
            users,
        });
    } catch (e) {
        return NextResponse.json({
            message: e instanceof Error ? e.message : "request error",
            users: null,
        });
    }
}
