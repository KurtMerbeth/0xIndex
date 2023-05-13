import Project from "./Project";
import { useState } from "react";

const TableBody = ({ projects, max, expand }) => {
  const [more, setMore] = useState(false);
  const toggleMore = () => {
    setMore(!more);
  };

  return (
    <>
      <tbody>
        {projects
          .sort((a, b) => b.rating - a.rating)
          .slice(0, max)
          .map((p) => (
            <Project key={p.id} project={p} />
          ))}
        {projects.length > max && (
          <tr className="justify-content-end">
            <td>
              <div
                variant="link"
                style={{ color: "grey", cursor: "pointer", textAlign: "right" }}
                onClick={expand}
              >
                {more ? "View less" : `View more (${projects.length - max})`}
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </>
  );
};

export default TableBody;
