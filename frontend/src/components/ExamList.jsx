import { useEffect, useState } from "react";
import ExamCard from "./ExamCard";
import FilterModal from "./FilterModal";
import { fetchExamSessions, fetchExamSessionsSort } from "../api/examApi";
import SortByButton from "./SortByButton";

export default function ExamList() {
  const [examSessions, setExamSessions] = useState([]);
  const [originalExamSessions, setOriginalExamSessions] = useState([]);
  const [hideFilterModal, setHideFilterModal] = useState(true);
  const [filtersObject, setFiltersObject] = useState({
    date: "",
    name: "",
    location: "",
    title: "",
  });

  // TODO: Update the component with the exam session data
  useEffect(() => {
    fetchExamSessions().then((examSessionsData) => {
      setExamSessions(examSessionsData);
      setOriginalExamSessions(examSessionsData);
    });
  }, []);

  useEffect(() => {
    setExamSessions(originalExamSessions);
    if (filtersObject.date !== "") {
      setExamSessions((currentSessions) => {
        return currentSessions.filter(
          (session) => session.datetime.slice(0, 10) === filtersObject.date
        );
      });
    }

    if (filtersObject.name !== "") {
      setExamSessions((currentSessions) => {
        return currentSessions.filter((session) =>
          session.candidates.some(
            (candidate) =>
              candidate.name.toLowerCase() === filtersObject.name.toLowerCase()
          )
        );
      });
    }

    if (filtersObject.location !== "") {
      setExamSessions((currentSessions) => {
        return currentSessions.filter((session) =>
          session.country
            .toLowerCase()
            .includes(filtersObject.location.toLowerCase())
        );
      });
    }
  }, [filtersObject]);

  const handleSortChange = async (sortValue) => {
    setFiltersObject({ date: "", name: "", location: "" });
    const sortedData = await fetchExamSessionsSort(sortValue);
    setExamSessions(sortedData);
  };

  return (
    <main className="ExamList">
      <div className="text-center my-8">
        <h2 className="text-2xl font-semibold text-white-800 mb-6">
          Upcoming Sessions
        </h2>

        <FilterModal
          hide={hideFilterModal}
          setHide={setHideFilterModal}
          setFiltersObject={setFiltersObject}
          filtersObject={filtersObject}
        />

        <div className="flex justify-center gap-4">
          <button
            className="px-5 py-2 bg-blue-600/60 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
            onClick={() => setHideFilterModal(false)}
          >
            👁 Show Filters
          </button>

          <button
            className="px-5 py-2 bg-gray-300 text-gray-800 font-medium rounded-lg shadow-md hover:bg-gray-400 transition-all duration-200"
            onClick={() => {
              setFiltersObject({ date: "", name: "", location: "" });
              setExamSessions(originalExamSessions);
            }}
          >
            ↻ Reset Filters
          </button>
          <SortByButton onSortChange={handleSortChange} />
        </div>
      </div>
      <div
        id="SessionList"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {examSessions.length ? (
          examSessions.map((session) => (
            <ExamCard session={session} key={session.id} />
          ))
        ) : (
          <p>No sessions to display...</p>
        )}
      </div>
    </main>
  );
}
