export type Transaction = {
    id: string;
    amount: number;
    status: string;
    failureType: string;
    priority: string;
  };
  
  export const sampleTransactions: Transaction[] = [
    {
      id: "TXN-1001",
      amount: 250,
      status: "FAILED",
      failureType: "INSUFFICIENT_FUNDS",
      priority: "Medium",
    },
    {
      id: "TXN-1002",
      amount: 1200,
      status: "FAILED",
      failureType: "BANK_TIMEOUT",
      priority: "High",
    },
    {
      id: "TXN-1003",
      amount: 5500,
      status: "FAILED",
      failureType: "FRAUD_SUSPECTED",
      priority: "Critical",
    },
  ];