"use client";
type Investigation = {
    id: string;
    issue: string;
    priority: string;
  };
  
  const investigations: Investigation[] = [
    {
      id: "TXN-1001",
      issue: "Insufficient Funds",
      priority: "Medium",
    },
    {
      id: "TXN-1002",
      issue: "Bank Timeout",
      priority: "High",
    },
    {
      id: "TXN-1003",
      issue: "Fraud Suspected",
      priority: "Critical",
    },
  ];
  
  type Props = {
    selectedId: string;
    onSelect: (id: string) => void;
  };
  
  export default function InvestigationQueue({
    selectedId,
    onSelect,
  }: Props) {
    return (
      <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Investigation Queue
          </h3>
  
          <p className="text-sm text-zinc-500 mt-1">
            Transactions awaiting AI analysis
          </p>
        </div>
  
        <div className="space-y-3">
          {investigations.map((item) => (
           <div
           key={item.id}
           onClick={() => onSelect(item.id)}
           className={`border rounded-xl p-4 cursor-pointer transition ${
             selectedId === item.id
               ? "border-blue-500 bg-zinc-800"
               : "border-zinc-800"
           }`}
         >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    {item.id}
                  </p>
  
                  <p className="text-sm text-zinc-500">
                    {item.issue}
                  </p>
                </div>
  
                <div className="text-sm text-zinc-400">
                  {item.priority}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }