class User{
    constructor(name,password){
        this.name = name;
        this._password = password;
    }

    get password(){
        return this._password.replace(/./g,"*")
    }
    set password(newPassword){
        if(newPassword.length < 8){
            console.log("Error: Password must be at least 8 character");
            return;
        }
        if(!/[A-Z]/.test(newPassword)){
            console.log("Error: Password must contain at least one uppercase letter");
            return;
        }

        if(!/\d/.test(newPassword)){
            console.log("Error: Password must contain at least one Number");
            return;
        }
        this._password = newPassword;
    }
}


const user = new User("Nitish","Password123");


// console.log(user.password);

user.password = "Nitish123"

console.log(user.password);