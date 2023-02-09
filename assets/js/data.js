
    
    const dataContainer = document.getElementById('dataContainer');

    fetch('https://poetrydb.org/title/Ozymandias/lines.json')
      .then(response => response.json())
      .then(data => {
        console.log('this =',data[0].lines)
        dataContainer.innerHTML = data.map(item => `<p>${item.data}</p>`).join('');
      });