//Init gitHub
const github = new GitHub;
const ui = new UI;



//Search input

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
   //Get input Text

   const userText = e.target.value;
   
   if (userText !== ''){
       github.getUser(userText)
           .then(data => {
               if (data.profileresponseData.message === 'Not Found'){
                   //show alert
                   ui.showAlert('User Not found','alert alert-danger');
               } else {
                   //Show profile
                    ui.showUser(data.profileresponseData);
                    ui.showRepo(data.repoResponseData);
               }
                console.log(data);
           });
   }else{
       //clear profile
       ui.clearProfile();

   }
});