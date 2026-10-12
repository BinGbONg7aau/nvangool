import * as Icon from "@deemlol/next-icons";

export default function Footer() {
  return (
    <>
      <div className="w-full text-center my-4 text-projectYellow">
        Designed and developed by Nikolaj Krog van Gool | Software developer | 2026
      </div>
      <a
        className="flex justify-center mx-auto w-fit my-4"
        href="https://github.com/BinGbONg7aau/nvangool"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-row gap-1 border-b border-projectBlack hover:border-projectWhite">
          <p>View source code </p>
          <Icon.ExternalLink strokeWidth={2} size={20} />
        </div>
      </a>
    </>
  );
}
