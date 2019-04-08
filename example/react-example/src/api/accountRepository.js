import axios from 'axios';

export class AccountRepository{
        url = "https://api.johnlawrimore.com/directory/accounts";
        options = {
            headers: {
                Authorization: 'jlawrimore'
            }
        };

        getAccounts(){
            return new Promise((resolve,reject) => {
                axios.get(this.url, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
            });
        }

        addAccount(account){
            return new Promise((resolve,reject) => {
                axios.post(this.url, account,  this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
            });
        }
}