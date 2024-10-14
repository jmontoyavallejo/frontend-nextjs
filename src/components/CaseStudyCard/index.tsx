interface CaseStudyCardProps {
  title: string;
  summary: string;
}

const CaseStudyCard = ({ title, summary }: CaseStudyCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{summary}</p>
    </div>
  );
};

export default CaseStudyCard;
