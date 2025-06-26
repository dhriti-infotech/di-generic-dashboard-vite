// import React, { useState } from "react";

// // Sample diff data
// const diffData = {
//     "02782d41-8dd1-4c1e-a454-cde5f3bb12ef": [
//         {
//             "newValue": {
//                 "pickup": {
//                     "tntCollectionId": "string-againchanged-3rdtime",
//                     "originalAddress": {
//                         "stateOrProvinceCode": "string-ch7th"
//                     },
//                     "pickupOrderType": "RPO"
//                 }
//             },
//             "oldValue": {
//                 "pickup": {
//                     "tntCollectionId": "string-changes=0876",
//                     "originalAddress": {
//                         "stateOrProvinceCode": "string-ch5"
//                     },
//                     "pickupOrderType": "SPO"
//                 }
//             }
//         },
//         {
//             "newValue": {
//                 "pickup": {
//                     "tntCollectionId": "string-againchanged-3rdtime",
//                     "originalAddress": {
//                         "stateOrProvinceCode": "string-ch7th"
//                     },
//                     "pickupOrderType": "RPO"
//                 }
//             },
//             "oldValue": {
//                 "pickup": {
//                     "tntCollectionId": "string-changes=0876-againchanged",
//                     "originalAddress": {
//                         "stateOrProvinceCode": "string-ch6th"
//                     },
//                     "pickupOrderType": "SPO"
//                 }
//             }
//         }
//     ],
//     "02782d41-8dd1-4c1e-a454-cde5f3bb12ea": [
//         {
//             "newValue": {
//                 "pickup": {
//                     "tntCollectionId": "string-againchanged-3rdtime",
//                     "originalAddress": {
//                         "stateOrProvinceCode": "string-ch7th"
//                     },
//                     "pickupOrderType": "RPO"
//                 }
//             },
//             "oldValue": {
//                 "pickup": {
//                     "tntCollectionId": "string-changes=0876",
//                     "originalAddress": {
//                         "stateOrProvinceCode": "string-ch5"
//                     },
//                     "pickupOrderType": "SPO"
//                 }
//             }
//         },
//         {
//             "newValue": {
//                 "pickup": {
//                     "tntCollectionId": "string-againchanged-3rdtime",
//                     "originalAddress": {
//                         "stateOrProvinceCode": "string-ch7th"
//                     },
//                     "pickupOrderType": "RPO"
//                 }
//             },
//             "oldValue": {
//                 "pickup": {
//                     "tntCollectionId": "string-changes=0876-againchanged",
//                     "originalAddress": {
//                         "stateOrProvinceCode": "string-ch6th"
//                     },
//                     "pickupOrderType": "SPO"
//                 }
//             }
//         }
//     ]
// };

// // Row for showing field changes
// const DiffRow = ({ label, oldVal, newVal }) => (
//   <div
//     style={{
//       display: "grid",
//       gridTemplateColumns: "1fr 1fr 1fr",
//       padding: "6px 0",
//       borderBottom: "1px solid #e0e0e0",
//       fontSize: "14px"
//     }}
//   >
//     <div><strong>{label}</strong></div>
//     <div style={{ color: "#FF4C4C" }}>{oldVal}</div>
//     <div style={{ color: "#4D148C" }}>{newVal}</div>
//   </div>
// );

// // Card showing each individual change
// const DiffCard = ({ diffItem, index }) => {
//   const oldPickup = diffItem.oldValue.pickup;
//   const newPickup = diffItem.newValue.pickup;

//   return (
//     <div
//       style={{
//         border: "1px solid #ddd",
//         padding: "16px",
//         marginBottom: "16px",
//         borderRadius: "8px",
//         backgroundColor: "#fff9f9",
//         boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
//       }}
//     >
//       <h4 style={{ marginBottom: "12px", color: "#4D148C" }}>Change #{index + 1}</h4>
//       <DiffRow
//         label="TNT Collection ID"
//         oldVal={oldPickup.tntCollectionId}
//         newVal={newPickup.tntCollectionId}
//       />
//       <DiffRow
//         label="State/Province Code"
//         oldVal={oldPickup.originalAddress.stateOrProvinceCode}
//         newVal={newPickup.originalAddress.stateOrProvinceCode}
//       />
//       <DiffRow
//         label="Pickup Order Type"
//         oldVal={oldPickup.pickupOrderType}
//         newVal={newPickup.pickupOrderType}
//       />
//     </div>
//   );
// };

// const CodeDiff = () => {
//   const [expandedUUID, setExpandedUUID] = useState(null);

//   const toggleUUID = (uuid) => {
//     setExpandedUUID(prev => (prev === uuid ? null : uuid));
//   };

//   return (
//     <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "24px" }}>
//       <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px", color: "#4D148C" }}>
//         UUID Change Dashboard
//       </h2>

//       {Object.entries(diffData).map(([uuid, changes]) => (
//         <div key={uuid} style={{ marginBottom: "20px" }}>
//           <button
//             onClick={() => toggleUUID(uuid)}
//             style={{
//               width: "100%",
//               textAlign: "left",
//               padding: "14px 16px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               backgroundColor: "#EDE7F6",
//               color: "#4D148C",
//               border: `2px solid ${expandedUUID === uuid ? "#4D148C" : "#D1C4E9"}`,
//               borderRadius: "6px",
//               cursor: "pointer",
//               transition: "background-color 0.2s ease"
//             }}
//           >
//             {expandedUUID === uuid ? "▼" : "▶"} {uuid}
//           </button>

//           {expandedUUID === uuid && (
//             <div style={{ marginTop: "16px", paddingLeft: "12px" }}>
//               {changes.map((item, idx) => (
//                 <DiffCard key={idx} diffItem={item} index={idx} />
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CodeDiff;




/* Code Diff Style 1 */

import React, { useState } from "react";
import { diffLines } from "diff";

const CodeDiff = () => {
  const [codeA, setCodeA] = useState(`function sayHello() {\n  console.log("Hello");\n}`);
  const [codeB, setCodeB] = useState(`function sayHello(name) {\n  console.log("Hello " + name);\n}`);
  
  const diff = diffLines(codeA, codeB);

  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      {/* Left Editor */}
      <textarea
        value={codeA}
        onChange={(e) => setCodeA(e.target.value)}
        style={{
          flex: 1,
          height: "300px",
          fontFamily: "monospace",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
        placeholder="Original Code"
      />

      {/* Right Editor */}
      <textarea
        value={codeB}
        onChange={(e) => setCodeB(e.target.value)}
        style={{
          flex: 1,
          height: "300px",
          fontFamily: "monospace",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
        placeholder="Updated Code"
      />

      {/* Diff Viewer */}
      <div
        style={{
          flex: 1,
          height: "300px",
          overflow: "auto",
          fontFamily: "monospace",
          padding: "10px",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ccc",
          borderRadius: "8px",
          whiteSpace: "pre-wrap",
        }}
      >
        {diff.map((part, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: part.added
                ? "#e8f5e9"
                : part.removed
                ? "#ffebee"
                : "transparent",
              color: part.added
                ? "#2e7d32"
                : part.removed
                ? "#c62828"
                : "#000",
            }}
          >
            {part.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeDiff;




/* Code Diff Style 2 Need to fix bug*/
// import React, { useState } from "react";
// import { Diff, Hunk, parseDiff } from "react-diff-view";
// import { createTwoFilesPatch } from "diff";
// import "react-diff-view/style/index.css";

// const CodeDiff = () => {
//   const [codeA, setCodeA] = useState(`function sayHello() {\n  console.log("Hello");\n}`);
//   const [codeB, setCodeB] = useState(`function sayHello(name) {\n  console.log("Hello " + name);\n}`);

//   // Ensure ending newlines to avoid parseDiff error
//   const patchStr = createTwoFilesPatch(
//     "old.js",
//     "new.js",
//     codeA.endsWith("\n") ? codeA : codeA + "\n",
//     codeB.endsWith("\n") ? codeB : codeB + "\n",
//     "",
//     "",
//     { context: 3 }
//   );

//   const files = parseDiff(patchStr);
//   const file = files.length > 0 ? files[0] : null;

//   return (
//     <div style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
//       {/* Left editor */}
//       <textarea
//         value={codeA}
//         onChange={(e) => setCodeA(e.target.value)}
//         placeholder="Original Code"
//         style={{
//           width: "30%",
//           height: "350px",
//           fontFamily: "monospace",
//           border: "1px solid #ccc",
//           borderRadius: "6px",
//           padding: "10px",
//         }}
//       />

//       {/* Middle editor */}
//       <textarea
//         value={codeB}
//         onChange={(e) => setCodeB(e.target.value)}
//         placeholder="Modified Code"
//         style={{
//           width: "30%",
//           height: "350px",
//           fontFamily: "monospace",
//           border: "1px solid #ccc",
//           borderRadius: "6px",
//           padding: "10px",
//         }}
//       />

//       {/* Right diff view */}
//       <div
//         style={{
//           width: "38%",
//           height: "350px",
//           overflow: "auto",
//           border: "1px solid #ddd",
//           borderRadius: "6px",
//           padding: "10px",
//           backgroundColor: "#f9f9ff",
//         }}
//       >
//         {file ? (
//           <Diff viewType="split" diffType="modify" hunks={file.hunks}>
//             {(hunks) => hunks.map((hunk) => <Hunk key={hunk.content} hunk={hunk} />)}
//           </Diff>
//         ) : (
//           <div style={{ color: "#888", fontStyle: "italic" }}>No differences or invalid diff</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CodeDiff;
