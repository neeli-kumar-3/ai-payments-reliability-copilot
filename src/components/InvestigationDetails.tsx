import {
    sampleTransactions,
    Transaction,
  } from "@/data/sample-transactions";
  
  type Props = {
    selectedId: string;
    transactions?: Transaction[];
  };
  
  export default function InvestigationDetails({
    selectedId,
    transactions,
  }: Props) {
    const transaction = (
      transactions ?? sampleTransactions
    ).find((txn) => txn.id === selectedId);
  
    const isSuccess =
      transaction?.status === "SUCCESS";
  
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
              AMOUNT
            </p>
            <p>${transaction?.amount}</p>
          </div>
  
          <div>
            <p className="text-xs text-zinc-500 mb-1">
              STATUS
            </p>
  
            <p
              className={
                isSuccess
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            >
              {transaction?.status}
            </p>
          </div>
  
          {!isSuccess && (
            <>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs text-zinc-500">
                    PRIORITY
                  </p>
  
                  <div className="relative group">
                    <span className="text-xs text-zinc-500 cursor-help">
                      (?)
                    </span>
  
                    <div className="absolute left-6 top-0 hidden group-hover:block w-64 border border-zinc-700 bg-zinc-900 rounded-lg p-3 text-xs text-zinc-300 z-50">
                      <p className="mb-2 font-medium">
                        Priority Rules
                      </p>
  
                      <p>
                        Critical
                      </p>
                      <p className="mb-2 text-zinc-500">
                        Amount &gt; $5,000 and Fraud Suspected
                      </p>
  
                      <p>
                        High
                      </p>
                      <p className="mb-2 text-zinc-500">
                        Amount &gt; $1,000 or Bank Timeout
                      </p>
  
                      <p>
                        Medium
                      </p>
                      <p className="text-zinc-500">
                        All remaining failures
                      </p>
                    </div>
                  </div>
                </div>
  
                <p>{transaction?.priority}</p>
              </div>
  
              <div>
                <p className="text-xs text-zinc-500 mb-1">
                  FAILURE TYPE
                </p>
                <p>{transaction?.failureType}</p>
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
            </>
          )}
  
        </div>
      </div>
    );
  }