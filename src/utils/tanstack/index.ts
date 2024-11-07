import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            retryDelay: 1_000,
            staleTime: 1_000 * 60 * 60,
            gcTime: 1_000 * 60 * 60 * 24,
        },
    },
});

export { queryClient };
