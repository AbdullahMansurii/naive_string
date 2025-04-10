


        function search(pat, txt) {
            const M = pat.length;
            const N = txt.length;
            const matches = [];
            
            // A loop to slide pat[] one by one
            for (let i = 0; i <= N - M; i++) {
                let j = 0;
                
                // For current index i, check for pattern match
                while (j < M && txt[i + j] === pat[j]) {
                    j++;
                }
                
                // If pattern matches at index i
                if (j === M) {
                    matches.push(i);
                }
            }
            
            return matches;
        }

        // DOM Elements
        const textInput = document.getElementById('text');
        const patternInput = document.getElementById('pattern');
        const searchBtn = document.getElementById('search-btn');
        const resultsDisplay = document.getElementById('results');
        
        // Event listeners
        searchBtn.addEventListener('click', performSearch);
        
        // Function to perform search and display results
        function performSearch() {
            const txt = textInput.value;
            const pat = patternInput.value;
            
            if (!txt || !pat) {
                alert('Please enter both text and pattern!');
                return;
            }
            
            const matches = search(pat, txt);
            
            let output = `Searching for pattern "${pat}" in text "${txt}"\n\n`;
            
            if (matches.length > 0) {
                output += `Found ${matches.length} match${matches.length > 1 ? 'es' : ''}:\n`;
                matches.forEach(index => {
                    output += `- Pattern found at index ${index}\n`;
                    
                    // Show the match context
                    let startContext = Math.max(0, index - 5);
                    let endContext = Math.min(txt.length, index + pat.length + 5);
                    let context = txt.substring(startContext, index);
                    let matchPart = txt.substring(index, index + pat.length);
                    let afterContext = txt.substring(index + pat.length, endContext);
                    
                    output += `  Context: ${context}<span class="match-location">${matchPart}</span>${afterContext}\n`;
                });
            } else {
                output += `<span class="no-match">No matches found.</span>`;
            }
            
            resultsDisplay.innerHTML = output;
        }
        
        // Initialize with default values
        performSearch();
