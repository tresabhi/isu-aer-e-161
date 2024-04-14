import { writeFile } from "fs/promises";
import meshData from "./mesh_data.json" assert { type: "json" };

console.log(meshData.length);

meshData.forEach((mesh, meshIndex) => {
  const vertices = mesh.indices.map((index) => mesh.vertices[index]);

  writeFile(
    `proj1/fuselage/generated/${meshIndex}.txt`,
    vertices.map((v) => `${v.join(",")}`).join("\n")
  );
});
