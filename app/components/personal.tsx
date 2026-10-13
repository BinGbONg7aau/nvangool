import SectionHeader from "@/app/components/sectionHeader";

export default function Personal() {
  return (
    <>
      <div className="py-8 px-4 lg:px-12">
        <SectionHeader
          title="Beyond Coding"
          text={
            <>
              Naturally curious and self-motivated, I enjoy exploring new
              technologies, developing my skills, and gaining perspectives from
              people with different backgrounds and areas of expertise. I value
              a supportive team environment where people share knowledge,
              challenge ideas, and learn from one another.
            </>
          }
        />
      </div>
    </>
  );
}
