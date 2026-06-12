type Props = {
    selectedId: string;
  };
  
  const transactionData = {
    "TXN-1001": {
      failureType: "Insufficient Funds",
    },
    "TXN-1002": {
      failureType: "Bank Timeout",
    },
    "TXN-1003": {
      failureType: "Fraud Suspected",
    },
  };
  
  export default function InvestigationDetails({
    selectedId,
  }: Props) {
    const transaction =
      transactionData[selectedId as keyof typeof transactionData];
  
    return (
      <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-6">
          Investigation Details
        </h3>
  
        <div className="space-y-5">
          <div>
            <p className="text-xs text-zinc-500 mb-1">
              TRANSACTION
            </p>
            <p>{selectedId}</p>
          </div>
  
          <div>
            <p className="text-xs text-zinc-500 mb-1">
              FAILURE TYPE
            </p>
            <p>{transaction.failureType}</p>
          </div>
  
          <div>
            <p className="text-xs text-zinc-500 mb-1">
              AI STATUS
            </p>
            <p className="text-amber-400">
              Pending Analysis
            </p>
          </div>
  
          <div>
            <p className="text-xs text-zinc-500 mb-1">
              RECOMMENDED ACTION
            </p>
            <p className="text-zinc-500">
              Awaiting AI analysis
            </p>
          </div>
  
          <div>
            <p className="text-xs text-zinc-500 mb-1">
              CUSTOMER COMMUNICATION
            </p>
            <p className="text-zinc-500">
              Not generated yet
            </p>
          </div>
        </div>
      </div>
    );
  }