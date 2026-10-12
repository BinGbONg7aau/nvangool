
interface SectionHeaderProps {
  title: string;
  text: React.ReactNode;
}

export default function SectionHeader({
  title,
  text,
}: SectionHeaderProps) {
  return (
    <>
      <div className="flex flex-col lg:flex-row py-8 lg:py-12 lg:min-h-50">
        <p className="flex w-full lg:w-1/2 items-center justify-end border-r border-b border-projectYellow p-8 text-right text-5xl lg:text-7xl font-bold">
          {title}
        </p>

        <div className="flex w-full lg:w-1/2 items-center lg:border-t border-projectYellow p-4 lg:p-8 text-xl lg:pr-42">
          {text}
        </div>
      </div>
    </>
  );
}
