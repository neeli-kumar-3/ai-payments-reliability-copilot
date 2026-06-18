import { Transaction } from "@/data/sample-transactions";

type Props = {
  transactions: Transaction[];
};

export default function FailureClassification({
  transactions,
}: Props) {
  const failedTransactions = transactions.filter(
    (txn) => txn.status === "FAILED"
  );

  const totalFailures = failedTransactions.length;

  const counts: Record<string, number> = {};

  failedTransactions.forEach((txn) => {
    const key = txn.failureType;

    counts[key] = (counts[key] || 0) + 1;
  });

  return (
    <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-6">
      <h3 className="text-lg font-semibold mb-4">
        Failure Breakdown
      </h3>

      <div className="space-y-3">
        {Object.entries(counts).map(
          ([failureType, count]) => {
            const percentage =
              totalFailures > 0
                ? Math.round(
                    (count / totalFailures) * 100
                  )
                : 0;

            return (
              <div
                key={failureType}
                className="flex items-center justify-between"
              >
                <p className="text-sm text-zinc-400">
                  {failureType}
                </p>

                <p className="text-sm text-zinc-300">
                  {count} ({percentage}%)
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}