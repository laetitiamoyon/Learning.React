import {QueryClient, QueryClientProvider} from 'react-query';
import {FC} from "react";
import React from "react";

const queryClient = new QueryClient()

const ReactQueryProvider: FC = ({children}) =>
{
    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
};

export default ReactQueryProvider;