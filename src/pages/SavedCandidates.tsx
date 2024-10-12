import Candidate from '../interfaces/Candidate.interface';
  



interface SavedCandidatesProps {

  currentCandidate: Candidate;

  addToCandidateList: () => void;

}



const SavedCandidates: React.FC<SavedCandidatesProps> = ({ currentCandidate, addToCandidateList }) => {

  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        <h2>{currentCandidate.Name}</h2>
        <button onClick={addToCandidateList}>Add to List</button>
      </div>
    </>
  );
};

export default SavedCandidates;
