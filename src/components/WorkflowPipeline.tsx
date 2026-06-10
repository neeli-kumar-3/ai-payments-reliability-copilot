export default function WorkflowPipeline() {
    const steps = [
      "Failure Classification",
      "Root Cause Analysis",
      "Tool Invocation",
      "Retry Decision Engine",
      "Human Approval",
      "Customer Communication",
    ];
  
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
                {index + 1}
              </div>
  
              <p>{step}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }