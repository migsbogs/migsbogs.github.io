     const menulogin = document.querySelectorAll('.jmlogin');
     const menulogout = document.querySelectorAll('.jmlogout');
     

     const setupUI = (user) => {
       if (user){
         menulogin.forEach(item=>item.style.display = 'block');
         menulogout.forEach(item=>item.style.display = 'none');
       }else {
        menulogin.forEach(item=>item.style.display = 'none');
        menulogout.forEach(item=>item.style.display = 'block');
       }
     }
     
     // setup about

     const aboutList = document.querySelector('.right');

     function renderAbout(doc){
       let h1 = document.createElement('h1');
       let p = document.createElement('p');
       let div = document.createElement('div');
       let a = document.createElement('a');

       div.setAttribute('doc_id', doc.id);
       h1.textContent = doc.data().title;
       p.textContent = doc.data().caption;
       a.textContent = 'x';

       div.className = "aboutcontainer";
       p.style = "text-align: justify";
       a.style ="color: white";

       div.appendChild(a);
       div.appendChild(h1);
       div.appendChild(p);
       

       aboutList.appendChild(div);

       // delete
       a.addEventListener('click', (e) =>{
         e.stopPropagation();
         
         let deleteid = e.target.parentElement.getAttribute('doc_id');
     
         db.collection("about").doc(deleteid).delete().then(function () {
           console.log("Document successfully deleted!");
         }).catch(function (error) {
           console.error("Error removing document: ", error);
         });
         e.preventDefault();
       })
     };

     const schoolList = document.querySelector('.jm4');

     function renderSchool(doc){
      let h3 = document.createElement('h3');
      let h4 = document.createElement('h4');
      let div = document.createElement('div');
      let a = document.createElement('a');
      let image1 = document.createElement('img')
      let image2 = document.createElement('img')
      let div2 = document.createElement('div');
      let h5 = document.createElement('h3');
      let div3 = document.createElement('div');
      let divcon = document.createElement('div');

      divcon.setAttribute('doc_id', doc.id);
      image1.setAttribute('src',doc.data().img);
      image2.setAttribute('src',doc.data().img2);
      h3.textContent = doc.data().Name;
      h4.textContent = doc.data().Year;
      h5.textContent = doc.data().Level;
      a.textContent = 'x';

      
      divcon.classname = "schoolcontainer"
      div.className = "card";
      div2.className ="card__face card__face--front";
      div3.className = "card__face card__face--back"
      a.style ="color: white";

      divcon.appendChild(a);
      divcon.appendChild(div);
      
      div.appendChild(div2);
      div2.appendChild(image2);
      div2.appendChild(h3);
      div2.appendChild(h4);
      div.appendChild(div3);
      div3.appendChild(image1);
      div3.appendChild(h5);
      
      schoolList.appendChild(divcon);

      // delete
      a.addEventListener('click', (e) =>{
        e.stopPropagation();
        
        let deleteid = e.target.parentElement.getAttribute('doc_id');
    
        db.collection("school").doc(deleteid).delete().then(function () {
          console.log("Document successfully deleted!");
        }).catch(function (error) {
          console.error("Error removing document: ", error);
        });
        e.preventDefault();
      })
    };


    const organizationList = document.querySelector('#orgsec');

     function renderOrg(doc){
       let h1 = document.createElement('h1');
       let divcon = document.createElement('div');
       let a = document.createElement('a');
       let divglitch = document.createElement('div');
       let divglitchimg = document.createElement('div');
       let divglitchimg2 = document.createElement('div');
       let divglitchimg3 = document.createElement('div');
       let divglitchimg4 = document.createElement('div');
       let divtext = document.createElement('div');
       let image = document.createElement('img');

       divcon.setAttribute('doc_id', doc.id);
       h1.textContent = doc.data().title;
       image.setAttribute('src',doc.data().img);
       
       a.textContent = 'x';
       var insert = "background-image:url(' ";
       var insert2 = doc.data().img;
        
       divglitch.className = "c-glitch";
       divglitchimg.className = "c-glitch__img";
       divglitchimg2.className = "c-glitch__img";
       divglitchimg3.className = "c-glitch__img";
       divglitchimg4.className = "c-glitch__img";
       divglitch.style = insert + insert2 + "');";
       divglitchimg.style = insert + insert2 + "');";
       divglitchimg2.style = insert + insert2 + "');";
       divglitchimg3.style = insert + insert2 + "');";
       divglitchimg4.style = insert + insert2 + "');";
       divtext.className = "textraptor";
       divcon.className = "orgcontainer";
       a.style ="color: white";

       divcon.appendChild(a);
       divcon.appendChild(divglitch);

       divglitch.appendChild(divglitchimg);
       divglitch.appendChild(divglitchimg2);
       divglitch.appendChild(divglitchimg3);
       divglitch.appendChild(divglitchimg4);
       
       divcon.appendChild(divtext);
       divtext.appendChild(h1);

       organizationList.appendChild(divcon);

       // delete
       a.addEventListener('click', (e) =>{
         e.stopPropagation();
         
         let deleteid = e.target.parentElement.getAttribute('doc_id');
     
         db.collection("organization").doc(deleteid).delete().then(function () {
           console.log("Document successfully deleted!");
         }).catch(function (error) {
           console.error("Error removing document: ", error);
         });
         e.preventDefault();
       })
     };


     const worksList = document.querySelector('.jm');

     function renderWorks(doc){
    
      let div = document.createElement('div');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let a = document.createElement('a');
      let image = document.createElement('img')
      let h1 = document.createElement('h1');
      let divcon = document.createElement('div');

      
      divcon.setAttribute('doc_id', doc.id);
      image.setAttribute('src',doc.data().img);
      
      h1.textContent = doc.data().title;
      a.textContent = 'x';
      divcon.className = "workscontainer";
      div.className = "wrapper";
      div1.className = "cardwork";
      div2.className = "descriptions";
      a.style ="color: white";
      
      divcon.appendChild(a);
      divcon.appendChild(div);
      div.appendChild(div1);
      div1.appendChild(image);
      div1.appendChild(div2);
      div2.appendChild(h1);

      
      worksList.appendChild(divcon);

      // delete
      a.addEventListener('click', (e) =>{
        e.stopPropagation();
        
        let deleteid = e.target.parentElement.getAttribute('doc_id');
    
        db.collection("Works").doc(deleteid).delete().then(function () {
          console.log("Document successfully deleted!");
        }).catch(function (error) {
          console.error("Error removing document: ", error);
        });
        e.preventDefault();
      })
    };


    const contactsList = document.querySelector('.jm3');

    function renderContacts(doc){
      let i = document.createElement('i');
      let title = document.createElement('a');
      let div = document.createElement('div');
      let a = document.createElement('a');
      let div2 = document.createElement('div');
      let caption = document.createElement('p');
      let div3 = document.createElement('div');
      let divcon = document.createElement('div');
      let div4 = document.createElement('div');
      let div5 = document.createElement('div');
      let div6 = document.createElement('div');
      let h3 = document.createElement('h3');

      divcon.setAttribute('doc_id', doc.id);
      i.className = doc.data().fa;
      title.href = doc.data().link;
      title.setAttribute("target","_blank");
      title.textContent = doc.data().title;
      caption.textContent = doc.data().caption;
      title.textContent = doc.data().title;
      a.textContent = 'x';
    
      
      divcon.classname = "contactscontainer"
      div.className = "card";
      div2.className ="face face1";
      div3.className = "content";
      div4.className = "icon";
      div5.className = "face face2";
      div6.className = "content";
      
      a.style ="color: white";

      divcon.appendChild(a);
      divcon.appendChild(div);
      div.appendChild(div2);
      div2.appendChild(div3);
      div3.appendChild(div4);
      div4.appendChild(i);
      div.appendChild(div5);
      div5.appendChild(div6);
      div6.appendChild(h3);
      h3.appendChild(title);
      div6.appendChild(caption);
      
      contactsList.appendChild(divcon);

      // delete
      a.addEventListener('click', (e) =>{
        e.stopPropagation();
        
        let deleteid = e.target.parentElement.getAttribute('doc_id');
    
        db.collection("Contact").doc(deleteid).delete().then(function () {
          console.log("Document successfully deleted!");
        }).catch(function (error) {
          console.error("Error removing document: ", error);
        });
        e.preventDefault();
      })
    };