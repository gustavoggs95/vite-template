import { QueryClientConfig } from "@tanstack/react-query";

export const reactQueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await fetch(`https://dummyjson.com${queryKey[0]}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      },
      refetchOnWindowFocus: false,
    },
  },
};
