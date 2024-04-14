import { writeFile } from "fs/promises";
import meshData from "./mesh_data.json" assert { type: "json" };

console.log(meshData.length);

meshData.forEach((mesh, meshIndex) => {
  const vertices = mesh.indices.map((index) => mesh.vertices[index]);
  let lines = vertices
    .map((v) => `${v.join(",")}`)
    .filter((value, index, array) => array.indexOf(value) === index);
  lines = [...lines, lines[0]];

  writeFile(`proj1/fuselage/generated/${meshIndex}.txt`, lines.join("\n"));
});
