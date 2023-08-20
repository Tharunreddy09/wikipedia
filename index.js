let inputEl = document.getElementById('input');
let root = document.getElementById('root');
let content = document.getElementById('content');






function render(items){
    for (let each  of items){
        let {title,link,description }=each;
        let anchor = document.createElement('a');
        anchor.textContent=title;
        anchor.href = link;
        // anchor.style.fontSize = "50px"
        anchor.classList.add('anchor','anchor-responsive');
        content.appendChild(anchor);
       
        let link1 = document.createElement('a');
        link1.textContent = link;
        link1.href = link;
        link1.target="_blank";
        // link1.style.fontSize="30px"
        link1.classList.add("link1",'link1-responsive');
        content.appendChild(link1);
        let des = document.createElement('p');
        des.textContent=description;
        // des.style.fontSize="25px"
        des.classList.add("des",'des-responsive')
        content.appendChild(des);

    }
}

inputEl.addEventListener('keydown',function(a){
    if(a.key =="Enter"){
        content.textContent="";
        let input = inputEl.value ;
        fetch(`https://apis.ccbp.in/wiki-search?search=${input}`).then(function(nani){  
            return nani.json();
        }).then(function(tharun){
            console.log(tharun);
            render(tharun.search_results);
        })
    }
})
