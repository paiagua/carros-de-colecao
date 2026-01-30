import { useEffect } from "react";
import { useSubscription } from "@/contexts/SubscriptionContext";
import Index from "./Index";

const Assinar = () => {
  const { setIsSubscriptionOpen } = useSubscription();

  useEffect(() => {
    // Open subscription modal automatically when visiting /assinar
    setIsSubscriptionOpen(true);
  }, [setIsSubscriptionOpen]);

  return <Index />;
};

export default Assinar;
