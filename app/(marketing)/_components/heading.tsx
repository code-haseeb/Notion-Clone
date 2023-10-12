"use client"

import {useConvexAuth} from "convex/react"
import {ArrowRight} from "lucide-react"
import {SignInButton} from "clerk/clerk-react"
import Link from "next/link"

const Heading = () => {
    return (<div className="max-w-3xl space-y-4">
<h1 className="text-3xl sm:text-5xl md:text-6xl fond-bold">
Yur Ideas, Documents and Plans. Unified. Welcome to <span>Jotion</span>
</h1>
<h3 className="text-base sm:text-xl md:text-2xl  font-medium ">
    Jotion is a connected Workspace where<br/>
    better fast work happens
</h3>
{isLoading && (<div className="w-full flex items-center justify-center">
    <Spinner size="lg"/>
</div>)}
{isAuthenticated && !isLoading && (<Button asChild>
    <Link href="/documents">Enter Jotion
    <ArrowRight className="h-4 w-4 ml-2"/>
    </Link>
</Button>)}
{!isAuthenticated && !isLoading && (<SignInButton mode="modal">
    <Button className="">Get Jotion Free
    <ArrowRight className="w-4 h-4 ml-2"/></Button>
</SignInButton>)}
    </div>)
}