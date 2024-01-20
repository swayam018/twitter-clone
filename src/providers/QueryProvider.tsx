"use client"
import React from "react"
import {QueryClient ,QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
 const queryClient = new QueryClient();
function QueryProvider({children}:any){
    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default QueryProvider;