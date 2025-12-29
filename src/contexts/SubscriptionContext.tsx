import { createContext, useContext, useState, ReactNode } from "react";

interface SubscriptionContextType {
  isSubscriptionOpen: boolean;
  setIsSubscriptionOpen: (open: boolean) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

  return (
    <SubscriptionContext.Provider value={{ isSubscriptionOpen, setIsSubscriptionOpen }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("useSubscription must be used within a SubscriptionProvider");
  }
  return context;
};
