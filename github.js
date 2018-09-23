class GitHub {
    constructor(){
        this.client_id = 'e2289aa3891e3ddebfa8';
        this.client_secret = '47f644b8b33cc11da837dc0e7f26eb2ec8a3d1d4';
        this.repos_count =5;
        this.repos_sort ='created:asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}? client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort= ${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileresponseData = await profileResponse.json();
        const repoResponseData = await repoResponse.json();
        return {
            profileresponseData,
            repoResponseData
        };
    }
    
}