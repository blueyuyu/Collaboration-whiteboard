"use client";

import { ClerkProvider,useAuth,SignedIn } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading,Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from '@/components/auth/loading';


interface ConvexClientProviderProps {
    children: React.ReactNode
}

// 从环境变量里，获取convex的url
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

// 新建服务器
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
    children
}: ConvexClientProviderProps) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <Loading></Loading>
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}

