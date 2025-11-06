import { useState } from "react";
import guidePDF from "../assets/AntiD Guidebook.pdf"; // <-- Ensure the path is correct

export default function RhCompatibilityModal({ className = "" }) {
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState("");
  const [yourGroup, setYourGroup] = useState("");
  const [partnerGroup, setPartnerGroup] = useState("");
  const [result, setResult] = useState(null); // "safe" | "risk" | "na"

  // Function to determine Rh factor
  const getRh = (group) => {
    if (!group || group === "Don't Know") return null;
    return group.includes("+") ? "positive" : "negative";
  };

  // Core logic
  const checkCompatibility = () => {
    if (!gender || !yourGroup || !partnerGroup) {
      alert("Please select all fields!");
      return;
    }

    // 🟡 If either blood group is Don't Know
    if (yourGroup === "Don't Know" || partnerGroup === "Don't Know") {
      setResult("na");
      return;
    }

    const yourRh = getRh(yourGroup);
    const partnerRh = getRh(partnerGroup);

    let motherRh, fatherRh;

    if (gender === "Female") {
      motherRh = yourRh;
      fatherRh = partnerRh;
    } else {
      motherRh = partnerRh;
      fatherRh = yourRh;
    }

    if (motherRh === "negative" && fatherRh === "positive") {
      setResult("risk");
    } else {
      setResult("safe");
    }
  };

  const resetModal = () => {
    setResult(null);
    setGender("");
    setYourGroup("");
    setPartnerGroup("");
    setOpen(false);
  };

  return (
    <div className="flex justify-center items-end">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className={`p-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-400 transition ${className}`}
      >
        Check Rh Compatibility
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-300 text-gray-900 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative">
            {/* Close Button */}
            <button
              onClick={resetModal}
              className="absolute top-3 right-3 text-gray-800 hover:text-white transition"
            >
              ✕
            </button>

            {/* RESULT SCREEN */}
            {result ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                  Rh Compatibility Check Result
                </h2>
                <p className="text-sm mb-6">Here are your test results</p>

                {result === "safe" && (
                  <>
                    <div className="text-5xl mb-4">✅</div>
                    <p className="font-medium">
                      Your test results show <b>no Rh incompatibility</b>.
                    </p>
                    <p className="text-sm mt-2">
                      The blood groups are compatible. No Rh-related risk.
                    </p>
                  </>
                )}

                {result === "risk" && (
                  <>
                    <div className="text-5xl mb-4 text-red-600">⚠️</div>
                    <p className="font-medium text-red-800">
                      Your test results show <b>Rh incompatibility</b>.
                    </p>
                    <p className="text-sm mt-2">
                      Mother is Rh-negative and Father is Rh-positive.
                      This can cause complications in pregnancy or transfusion,
                      but it’s manageable with medical care.
                    </p>
                    <a
                      href={guidePDF}
                      download="AntiD-Patient-Guide.pdf"
                      className="inline-block mt-6 px-6 py-2 bg-white text-cyan-700 font-semibold rounded-lg hover:bg-cyan-100 transition"
                    >
                      Download Guide
                    </a>
                  </>
                )}

                {result === "na" && (
                 <>
  <div className="text-5xl mb-4 text-yellow-600">ℹ️</div>

  <p className="font-medium text-gray-800">
    Sorry, we can’t assess your Rh Compatibility.
  </p>

  <p className="text-sm mt-2">
    Knowing your and your partner’s blood group is the <br></br> first step towards a healthy pregnancy.
    <br />
    Get your blood group tested today.
  </p>

  <a
    href={guidePDF}
    download="Rh-Guide.pdf"
    className="inline-block mt-6 px-6 py-2 bg-white text-cyan-700 font-semibold rounded-lg hover:bg-cyan-100 transition"
  >
    Download Rh Guide
  </a>
</>

                )}

                <button
                  onClick={resetModal}
                  className="mt-6 px-6 py-2 bg-cyan-800 text-white rounded-lg hover:bg-cyan-600 transition block mx-auto"
                >
                  Close
                </button>
              </div>
            ) : (
              // FORM SCREEN
              <>
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                  Rh Compatibility Check
                </h2>
                <p className="text-sm text-gray-800 mb-6">
                  Whether you’re planning a pregnancy or just curious, knowing
                  your Rh compatibility helps you understand how your blood
                  groups interact.
                </p>

                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    checkCompatibility();
                  }}
                >
                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Select your gender :
                    </label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border-none text-gray-700 focus:ring-2 focus:ring-cyan-600 outline-none"
                    >
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Select your blood group :
                    </label>
                    <select
                      value={yourGroup}
                      onChange={(e) => setYourGroup(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border-none text-gray-700 focus:ring-2 focus:ring-cyan-600 outline-none"
                    >
                      <option value="">Select Blood Group</option>
                      {[
                        "A+",
                        "A−",
                        "B+",
                        "B−",
                        "O+",
                        "O−",
                        "AB+",
                        "AB−",
                        "Don't Know",
                      ].map((g) => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium">
                      Select your Partner’s blood group :
                    </label>
                    <select
                      value={partnerGroup}
                      onChange={(e) => setPartnerGroup(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border-none text-gray-700 focus:ring-2 focus:ring-cyan-600 outline-none"
                    >
                      <option value="">Select Blood Group</option>
                      {[
                        "A+",
                        "A−",
                        "B+",
                        "B−",
                        "O+",
                        "O−",
                        "AB+",
                        "AB−",
                        "Don't Know",
                      ].map((g) => (
                        <option key={g}>{g}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-800 text-white font-semibold py-3 rounded-lg hover:bg-cyan-600 transition"
                  >
                    Check Results
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
