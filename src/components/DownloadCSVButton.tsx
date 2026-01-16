"use client";

interface DownloadCSVButtonProps {
  data: (string | number)[];
  min: number;
  max: number;
  className?: string;
}

export default function DownloadCSVButton({
  data,
  min,
  max,
  className = "",
}: DownloadCSVButtonProps) {
  const handleDownload = () => {
    const csvContent = [
      "index,value",
      ...data.map((value, index) => `${index + 1},${value}`),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    const date = new Date().toISOString().split("T")[0];
    link.href = url;
    link.download = `random-numbers-${min}-${max}-${date}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (data.length < 2) return null;

  return (
    <button
      onClick={handleDownload}
      className={`py-2 px-4 bg-background border border-border rounded-lg text-sm font-medium hover:bg-background-card transition-colors ${className}`}
    >
      Download CSV
    </button>
  );
}
