import { useEffect, type FormEvent, useState } from 'react';
import { searchGithub,  searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import SavedCandidates from './SavedCandidates';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
   Image: '',
   Name: '',
   Location: '',
   Email: '',
   Company: '',
   Bio: '',
   Reject: null,
  });

  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    searchGithub('userName'); // Replace 'defaultName' with an appropriate string argument if needed.
  }, []);

  const addToCandidateList = () => {
    let parsedCandidatesToSearch: Candidate[] = [];
    const storedCandidatesToSearch = localStorage.getItem('candidatesToSearch');
    if (typeof storedCandidatesToSearch === 'string') {
      parsedCandidatesToSearch = JSON.parse(storedCandidatesToSearch)
    }
    parsedCandidatesToSearch.push(currentCandidate)
    localStorage.setItem('candidatesToSearch', JSON.stringify(parsedCandidatesToSearch))
  };

  const searchForCandidateByName = async (event: FormEvent, userName: string) => {
    event.preventDefault();
    
    const data: Candidate = await searchGithubUser(userName);
    

    setCurrentCandidate(data);
  };
  return(
  <>
    <section>
          <h1>CandidateSearch</h1>
            <form
            onSubmit={(event: FormEvent) => 
              searchForCandidateByName(event, searchInput)
            }
          >
            <input 
              type='text'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder='Enter candidate name'
            />
            <button type='submit'>Search</button>

            <SavedCandidates
              currentCandidate={currentCandidate}
              addToCandidateList={addToCandidateList}
              />
            
          
          </form>


    </section>


  </>
  )
};

export default CandidateSearch;
