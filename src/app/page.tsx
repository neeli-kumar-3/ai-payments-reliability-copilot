"use client";

import { useEffect, useState } from "react";
import MetricCard from "@/components/MetricCard";
import InvestigationQueue from "@/components/InvestigationQueue";
import InvestigationDetails from "@/components/InvestigationDetails";
import WorkflowPipeline from "@/components/WorkflowPipeline";
import UploadPanel from "@/components/UploadPanel";
import { sampleTransactions } from "@/data/sample-transactions";
import FailureClassification from "@/components/FailureClassification";

export default function Home() {
  const [selectedId, setSelectedId] = useState("TXN-1001");

  const [investigationResult, setInvestigationResult] =
    useState<any>(null);

  const [transactions, setTransactions] =
    useState(sampleTransactions);

  useEffect(() => {
    const transaction = transactions.find(
      (txn) => txn.id === selectedId
    );

    if (!transaction) return;

    const investigate = async () => {
      const response = await fetch(
        "/api/investigate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transaction),
        }
      );

      const data = await response.json();

      setInvestigationResult(data);
    };

    investigate();
  }, [selectedId, transactions]);

  console.log("PAGE TRANSACTIONS", transactions);

  const totalTransactions = transactions.length;

  const failedTransactions = transactions.filter(
    (txn) => txn.status === "FAILED"
  ).length;

  const failureRate =
    totalTransactions > 0
      ? Math.round(
          (failedTransactions / totalTransactions) * 100
        )
      : 0;
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm text-zinc-500 mb-3 tracking-wide uppercase">
              AI Operations Copilot
            </p>

            <h1 className="text-5xl font-semibold tracking-tight mb-4">
              AI Payments Analysis Copilot
            </h1>

            <p className="text-zinc-400 max-w-3xl leading-7">
              Investigate failed payment transactions using AI-powered
              orchestration workflows, operational reasoning, and
              human-in-the-loop reliability systems.
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-900 rounded-2xl px-5 py-4">
            <p className="text-xs text-zinc-500 mb-1">
              SYSTEM STATUS
            </p>

            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />

              <p className="text-sm text-zinc-300">
                Operational
              </p>
            </div>
          </div>
        </div>

        <>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

  <MetricCard
  title="Total Transactions"
  value={String(totalTransactions)}
  subtitle="Uploaded transactions"
/>

<MetricCard
  title="Failed Transactions"
  value={String(failedTransactions)}
  subtitle={`${failureRate}% failure rate`}
/>

<MetricCard
  title="Human Escalations"
  value="42"
  subtitle="Awaiting review"
/>
<FailureClassification
  transactions={transactions}
/>

  </div>

  <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-10">

<div className="flex items-center justify-between mb-8">
  <div>
    <h2 className="text-2xl font-semibold mb-2">
      Reliability Workflow Engine
    </h2>

    <p className="text-zinc-400">
      Upload transaction data to begin AI investigation workflows.
    </p>
  </div>

  <div className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-zinc-300">
    LangGraph Ready
  </div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

  <div className="lg:col-span-2">

  <UploadPanel
  setTransactions={setTransactions}
/>

<InvestigationQueue
  selectedId={selectedId}
  onSelect={setSelectedId}
  transactions={transactions}
/>

  </div>

  <div className="space-y-6 sticky top-6 self-start">
  <InvestigationDetails
  selectedId={selectedId}
  transactions={transactions}
  investigationResult={investigationResult}
/>

  <WorkflowPipeline
    selectedId={selectedId}
    transactions={transactions}
  />
</div>

</div>

</div>
</>

      </div>
    </main>
  );
}