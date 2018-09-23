class UI {
    constructor(){
        this.profile = document.getElementById('profile');

    }

    showUser(user){

        this.profile.innerHTML = `
        
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                        
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href = "${user.html_url}" target="_blank" cl class="btn btn-primary btn-block mb-4">View Profile</a>
                 </div>
                     <div class="col-md-9">
                         <span class = 'badge badge-primary'>Public Repos : ${user.public_repos}</span>
                         <span class = 'badge badge-secondary'>Public Gists : ${user.public_gists}</span>
                         <span class = 'badge badge-sucess'>Follwers : ${user.followers}</span>
                         <span class = 'badge badge-info'>Following : ${user.following}</span>
                         <br><br>
                         <ul class="list-group">
                            <li class="list-group-item">Company : ${user.company}</li>
                            <li class="list-group-item">Website/BLG : ${user.blog}</li>
                            <li class="list-group-item">Location : ${user.location}</li>
                            <li class="list-group-item">Member Since : ${user.created_at}</li>
                         </ul>
                     </div>
                 </div>
             </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id ="repos"</div>
        
        </div>
                     
        </div>
        `;

    }


    //Show Repo
    showRepo(repos){

        let output =' ';
        repos.forEach(function (repo) {
            output += `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-6">
                             <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>       
                     <div class="col-md-6">
                         <span class = 'badge badge-primary'>Stars : ${repo.stargazers_count}</span>
                         <span class = 'badge badge-secondary'>Watchers : ${repo.watchers_count}</span>
                         <span class = 'badge badge-sucess'>Forks : ${repo.forms_count}</span>
                     </div>
                 </div>
            </div>
            `;
        });
        document.getElementById('repos').innerHTML =output;
    }

    //clear Profile
    clearProfile(){

        this.profile.innerHTML = '';
    }

    showAlert(message,className){

        //clear alerts
        this.clearAlert();

        //create a element
        const div = document.createElement('div');
        //Add class to it
        div.className = className;
        //Append child node to the element
        div.appendChild(document.createTextNode(message));

        //Get parent
        const parent = document.querySelector('.searchContainer');

        //get searchbox
        const searchBox = document.querySelector('.search');

        parent.insertBefore(div,searchBox);

        //Timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        },3000);

    }

    //Clear Exsiting alert
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove()
        }
    }


}