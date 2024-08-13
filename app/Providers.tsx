"use client";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux'
import store from "@/redux/store";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider >
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            {children}
            </Provider>
          </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
