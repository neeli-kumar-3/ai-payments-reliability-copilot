type MetricCardProps = {
    title: string;
    value: string;
    subtitle: string;
  };
  
  export default function MetricCard({
    title,
    value,
    subtitle,
  }: MetricCardProps) {
    return (
      <div className="border border-zinc-800 bg-zinc-900 rounded-2xl p-6">
        <p className="text-sm text-zinc-500 mb-3">
          {title}
        </p>
  
        <h2 className="text-4xl font-semibold">
          {value}
        </h2>
  
        <p className="text-sm text-zinc-400 mt-3">
          {subtitle}
        </p>
      </div>
    );
  }