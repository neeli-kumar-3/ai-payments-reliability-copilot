import {
    sampleTransactions,
    Transaction,
  } from "@/data/sample-transactions";
  
  type Props = {
    selectedId: string;
    transactions?: Transaction[];
  };
  
  const workflows = {
    INSUFFICIENT_FUNDS: [
      "Failure Classified",
      "Balance Check Tool",
      "Retry Recommendation",
    ],
  
    BANK_TIMEOUT: [
      "Failure Classified",
      "Bank Connectivity Check",
      "Retry Decision Engine",
    ],
  
    FRAUD_SUSPECTED: [
      "Failure Classified",
      "Fraud Risk Tool",
      "Customer Lookup Tool",
      "Fraud Review",
    ],
  };
  
  export default function WorkflowPipeline({
    selectedId,
    transactions,
  }: Props) {
    const transaction = (
      transactions ?? sampleTransactions
    ).find((txn) => txn.id === selectedId);
  
    const isSuccess =
      transaction?.status === "SUCCESS";
  
    const key =
      transaction?.failureType?.trim();
  
    const steps =
      workflows[key as keyof typeof workflows] ?? [
        "Failure Classified",
        "AI Investigation Pending",
      ];
  
    return (
      <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-6">
          Workflow Pipeline
        </h3>
  
        {isSuccess ? (
          <div className="space-y-2">
            <p>
              Payment processed successfully.
            </p>
  
            <p>
              No investigation required.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step}
                className="flex items-center gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-sm">
                  ✓
                </div>
  
                <p>{step}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }