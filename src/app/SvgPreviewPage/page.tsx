import fs from "fs";
import path from "path";

const SvgPreviewPage = () => {
  const iconsDir = path.join(process.cwd(), "public/");
  const files = fs.readdirSync(iconsDir);
  const svgFiles = files.filter((file) => file.endsWith(".svg"));

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">SVG 미리보기</h1>
      <div className="grid grid-cols-4 gap-6">
        {svgFiles.map((file, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={`/${file}`} alt={file} className="w-20 h-20" />
            <span className="mt-2 text-sm text-gray-600">{file}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SvgPreviewPage;
