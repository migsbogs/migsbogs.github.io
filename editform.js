// auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        
        //get data
        db.collection('school').onSnapshot(snapshot =>{
            let changes = snapshot.docChanges();
            changes.forEach(change =>{
                if (change.type == 'added') {
                    renderSchool(change.doc);
                }else if (change.type =='removed'){
                    let x = schoolList.querySelector('[doc_id=' + change.doc.id + ']');
                    schoolList.removeChild(x);
                }
            });
            setupUI(user);
        })

        db.collection('Works').onSnapshot(snapshot =>{
            let changes = snapshot.docChanges();
            changes.forEach(change =>{
                if (change.type == 'added') {
                    renderWorks(change.doc);
                }else if (change.type =='removed'){
                    let x = worksList.querySelector('[doc_id=' + change.doc.id + ']');
                    worksList.removeChild(x);
                }
            });
            setupUI(user);
        })

        db.collection('organization').onSnapshot(snapshot =>{
            let changes = snapshot.docChanges();
            changes.forEach(change =>{
                if (change.type == 'added') {
                    renderOrg(change.doc);
                }else if (change.type =='removed'){
                    let x = organizationList.querySelector('[doc_id=' + change.doc.id + ']');
                    organizationList.removeChild(x);
                }
            });
            setupUI(user);
        })

        db.collection('Contact').onSnapshot(snapshot =>{
            let changes = snapshot.docChanges();
            changes.forEach(change =>{
                if (change.type == 'added') {
                    renderContacts(change.doc);
                }else if (change.type =='removed'){
                    let x = contactsList.querySelector('[doc_id=' + change.doc.id + ']');
                    contactsList.removeChild(x);
                }
            });
            setupUI(user);
        })

        db.collection('about').onSnapshot(snapshot =>{
            let changes = snapshot.docChanges();
            changes.forEach(change =>{
                if (change.type == 'added') {
                    renderAbout(change.doc);
                }else if (change.type =='removed'){
                    let x = aboutList.querySelector('[doc_id=' + change.doc.id + ']');
                    aboutList.removeChild(x);
                }
            });
            setupUI(user);
        })

        setupUI(user);
        
    } else {
        
        setupUI();
    }
});

const createForm = document.querySelector('#school');
createForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    db.collection('school').add({
        Year: createForm['year-school'].value,
        Level: createForm['level-education'].value,
        img:  createForm['img1-school'].value,
        img2: createForm['img2-school'].value,
        Name: createForm['name-school'].value
    }).then(()=>{
        createForm.reset();
    })
});

const createForm2 = document.querySelector('#about');
createForm2.addEventListener('submit',(e)=>{
    e.preventDefault();

    db.collection('about').add({
        caption: createForm2['caption-about'].value,
        title: createForm2['title-about'].value
    }).then(()=>{
        createForm2.reset();
    })
});

const createForm3 = document.querySelector('#work');
createForm3.addEventListener('submit',(e)=>{
    e.preventDefault();

    db.collection('Works').add({
        img: createForm3['img-work'].value,
        title: createForm3['title-work'].value
    }).then(()=>{
        createForm3.reset();
    })
});

const createForm4 = document.querySelector('#organization');
createForm4.addEventListener('submit',(e)=>{
    e.preventDefault();

    db.collection('organization').add({
        img: createForm4['img-org'].value,
        title: createForm4['title-org'].value
    }).then(()=>{
        createForm4.reset();
    })
});

const createForm5 = document.querySelector('#contact');
createForm5.addEventListener('submit',(e)=>{
    e.preventDefault();

    db.collection('Contact').add({
        caption: createForm5['caption-contact'].value,
        title: createForm5['title-contact'].value,
        link: createForm5['link-contact'].value,
        fa: createForm5['fa-contact'].value
    }).then(()=>{
        createForm5.reset();
    })
});


// log out
const logout = document.querySelector('#logout-btn');

logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('user logged out!');
    })
});

// log in

const loginForm = document.querySelector('#formlogin');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm['loginemail'].value;
    const password = loginForm['loginpassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        loginForm.reset();

    })
});

