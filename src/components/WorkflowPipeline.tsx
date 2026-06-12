type Props = {
    selectedId: string;
  };
  
  const workflows = {
    "TXN-1001": [
      "Failure Classified",
      "Balance Check Tool",
      "Retry Recommendation",
    ],
    "TXN-1002": [
      "Failure Classified",
      "Bank Connectivity Check",
      "Retry Decision Engine",
    ],
    "TXN-1003": [
      "Failure Classified",
      "Fraud Risk Tool",
      "Customer Lookup Tool",
      "Fraud Review",
    ],
  };
  
  export default function WorkflowPipeline({
    selectedId,
  }: Props) {
    const steps =
      workflows[selectedId as keyof typeof workflows];
  
    return (
      <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-6">
          Workflow Pipeline
        </h3>
  
        <div className="space-y-4">
          {steps.map((step, index) => (
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
      </div>
    );
  }