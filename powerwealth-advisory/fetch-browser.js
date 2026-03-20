async function loadAssets() {
  try {
    const response = await fetch('https://powerwealth-advisory-153106838370.us-west1.run.app/assets/index-kTqQ2ac-.js');
    const data = await response.text();
    const strings = data.match(/"([^"\\](\\.[^"\\])*)"/g) || [];
    const unique = [...new Set(strings)].filter(s => 
      s.length > 20 && 
      !s.includes('function') && 
      !s.includes('return') && 
      !s.includes('react')
    );
    console.log(unique.slice(0, 100).join('
'));
  } catch (error) {
    console.error('Fetch failed:', error);
  }
}
loadAssets();
