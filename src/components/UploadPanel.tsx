"use client";

import { useState } from "react";

import { Transaction } from "@/data/sample-transactions";

type Props = {
  setTransactions: React.Dispatch<
    React.SetStateAction<Transaction[]>
  >;
};

export default function UploadPanel({
  setTransactions,
}: Props) {
  const [fileName, setFileName] = useState("");
  const [rows, setRows] = useState<Transaction[]>([]);

  return (
    <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-16 text-center mb-6">
      <p className="text-xl mb-3">
        Upload Payments CSV
      </p>

      <p className="text-zinc-500 mb-6">
        Upload payment transaction data for AI investigation
      </p>

      <input
        type="file"
        accept=".csv"
        onChange={async (e) => {
          const file = e.target.files?.[0];

          if (file) {
            setFileName(file.name);

            const text = await file.text();

            const parsedRows = text
              .split("\n")
              .slice(1)
              .filter((row) => row.trim() !== "")
              .map((row) => {
                const [
                  id,
                  amount,
                  status,
                  failureType,
                ] = row.split(",");

                return {
                  id: id.trim(),
                  amount: Number(amount),
                  status: status.trim(),
                  failureType:
                    failureType?.trim() ?? "",
                  priority: "Medium",
                };
              });

            setRows(parsedRows);
            setTransactions(parsedRows);
          }
        }}
      />

      {fileName && (
        <p className="mt-4 text-sm text-emerald-400">
          Uploaded: {fileName}
        </p>
      )}

      {rows.length > 0 && (
        <p className="mt-2 text-sm text-zinc-400">
          {rows.length} transactions loaded
        </p>
      )}
    </div>
  );
}