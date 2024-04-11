 let notes =[];

 const createdNotes = ()=>{
    let title = document.getElementById("title");
    let description = document.getElementById("description")
    const note = {
        title:title.value,
        description:description.value,
        date:new Date()
    }
    notes.push(note)
    renderTasks()
    console.log(notes)
  
 } 
 const renderTasks = () => {
    const notedlist = document.getElementById('createdNotes');
    notedlist.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note.title;
        li.className="li"
        const btn = document.createElement('button');
        btn.innerHTML = 'delete';
        btn.className = 'del-btn';
        btn.addEventListener('click', () => {
            notes.splice(index, 1);
            renderTasks();
        });
        li.appendChild(btn);
        notedlist.appendChild(li);
    });
};
