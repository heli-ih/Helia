import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { BufferGeometry, MeshBasicMaterial, Vector3 } from "three";

// const createTriangleMesh = (vertices: number[], color: string) => {
//   return (
//     <mesh
//       geometry={new BufferGeometry().setAttribute(
//         "position",
//         new BufferAttribute(new Float32Array(vertices), 3)
//       )}
//     >
//       <meshStandardMaterial color={color} />
//     </mesh>
//   );
// };

// const generateNewVertices = (
//   initialVertices: number[],
//   i: number
// ): number[] => {
//   // [0,3,6] ==> [ab,bc,ac]

//   //   for (const i of [0, 3, 6]) {
//   if (i == 0) {
//     const unchangedVertex = initialVertices.slice(i, i + 6);
//     const newVertices: number[] = [
//       ...unchangedVertex,
//       Math.floor(Math.random() * (5 - 1) + 1),
//       Math.floor(Math.random() * (5 - 1) + 1),
//       0,
//     ];
//     console.log(newVertices);
//     return newVertices;
//   } else if (i == 1) {
//     i = i * 3;
//     const unchangedVertex = initialVertices.slice(i, i + 6);
//     const newVertices: number[] = [
//       Math.floor(Math.random() * (5 - 1) + 1),
//       Math.floor(Math.random() * (5 - 1) + 1),
//       0,
//       ...unchangedVertex,
//     ];
//     console.log(newVertices);
//     return newVertices;
//   } else if (i == 2) {
//     i = i * 3;
//     const unchangedVertex = [
//       ...initialVertices.slice(i - 6, i - 3),
//       ...initialVertices.slice(i, i + 3),
//     ];
//     const newVertices: number[] = [
//       ...unchangedVertex.slice(0, 3),
//       Math.floor(Math.random() * (5 - 1) + 1),
//       Math.floor(Math.random() * (5 - 1) + 1),
//       0,
//       ...unchangedVertex.slice(6, 9),
//     ];
//     console.log(newVertices);
//     return newVertices;
//   }
//   //   }

//   return [];
// };

// const Triangle: React.FC = () => {
//   let initialVertices: number[] = [0, 1, 0, -1, -1, 0, 1, -1, 0];
//   createTriangleMesh(initialVertices, "red");

//   const triangles = [];
//   for (let i = 0; i < 3; i++) {
//     const nextVertices: number[] = generateNewVertices(initialVertices, i);
//     console.log("nextVertices is", nextVertices);
//     if (i == 0) {
//       triangles.push(createTriangleMesh(nextVertices, "blue"));
//     } else if (i == 1) {
//       triangles.push(createTriangleMesh(nextVertices, "green"));
//     } else if (i == 2) {
//       triangles.push(createTriangleMesh(nextVertices, "yellow"));
//     }

//     initialVertices = nextVertices;
//     console.log("initial is", initialVertices);
//   }

//   return (
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <perspectiveCamera position={[0, 0, 5]} />

//       {triangles}
//     </Canvas>
//   );
// };

const Triangle = () => {
  const triangleVertices = [
    new Vector3(0, 1, 0),
    new Vector3(-1, -1, 0),
    new Vector3(1, -1, 0),
  ];

  const originalGeometry = new BufferGeometry().setFromPoints(triangleVertices);
  const triangles = [];

  for (let i = 0; i < 20; i++) {
    const clonedGeometry = originalGeometry.clone();

    const clonedMesh = (
      <mesh
        geometry={clonedGeometry}
        material={new MeshBasicMaterial({ color: getRandomColor() })}
        position={[i, 0, 0]}
        rotation={[0, 0, i * Math.PI]}
      />
    );
    const clonedMesh1 = (
      <mesh
        geometry={clonedGeometry}
        material={new MeshBasicMaterial({ color: getRandomColor() })}
        position={[i + 1, 2, 0]}
        rotation={[0, 0, i * Math.PI]}
      />
    );

    triangles.push(clonedMesh, clonedMesh1);
  }

  function getRandomColor() {
    return Math.random() * 0xffffff;
  }

  return (
    <Canvas style={{ width: "900px", height: "100%" }}>{triangles}</Canvas>
  );
};

export default Triangle;
