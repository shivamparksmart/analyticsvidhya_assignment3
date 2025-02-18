// optimized filter function
function fetchDataAndFilter(data, keyword) {

  //checking 
  // 1) data should be array
  // 2) and it should have a length
  if (!Array.isArray(data) || data.length === 0) return [];

  
  //checking 
  // 1) if keyword is present 
  // 2) keyword should be a string
  const keywordLower = (keyword && typeof keyword === 'string') ? keyword.toLowerCase() : '';


  const results = [];

  for (let i = 0; i < data.length; i++) {

    //checking 
    // 1) title should not be undefined 
    // 2) title should be string
    // 3) case insensitive test
    if (data[i].title 
      && typeof data[i].title === 'string' 
      && data[i].title.toLowerCase().includes(keywordLower)) 
      {
      results.push(data[i]);
    }
  }
  //returning filtered results
  return results;
}



console.log(fetchDataAndFilter(data = [
  { title: 'JavaScript Programming' },
  { title: 'Python for Beginners' },
  { title: 'Learn JavaScript' },
], 'java'))





// Test cases
function runTests() {
  // Test 1: should return matching objects based on the keyword
  let data = [
    { title: 'JavaScript Programming' },
    { title: 'Python for Beginners' },
    { title: 'Learn JavaScript' },
  ];
  let keyword = 'JavaScript';
  let result = fetchDataAndFilter(data, keyword);
  console.log(result.length === 2 ? 'Test 1 passed' : 'Test 1 failed');

  // Test 2: should handle empty data arrays
  data = [];
  keyword = 'JavaScript';
  result = fetchDataAndFilter(data, keyword);
  console.log(result.length === 0 ? 'Test 2 passed' : 'Test 2 failed');

  // Test 3: should return empty if no matches are found
  data = [
    { title: 'Python Programming' },
    { title: 'Ruby on Rails' },
  ];
  keyword = 'JavaScript';
  result = fetchDataAndFilter(data, keyword);
  console.log(result.length === 0 ? 'Test 3 passed' : 'Test 3 failed');

  // Test 4: should handle case-insensitive search
  data = [
    { title: 'JavaScript Programming' },
    { title: 'javascript for Web' },
  ];
  keyword = 'javascript';
  result = fetchDataAndFilter(data, keyword);
  console.log(result.length === 2 ? 'Test 4 passed' : 'Test 4 failed');

  // Test 5: should handle missing title properties gracefully
  data = [
    { title: 'JavaScript Programming' },
    { name: 'Ruby on Rails' },
  ];
  keyword = 'JavaScript';
  result = fetchDataAndFilter(data, keyword);
  console.log(result.length === 1 && result[0].title === 'JavaScript Programming' ? 'Test 5 passed' : 'Test 5 failed');

  // Test 6: should return empty if keyword is undefined
  data = [
    { title: 'JavaScript Programming' },
    { title: 'Python for Beginners' },
  ];
  result = fetchDataAndFilter(data, undefined);
  console.log(result.length === 0 ? 'Test 6 passed' : 'Test 6 failed');
}

// Running the tests
runTests();
