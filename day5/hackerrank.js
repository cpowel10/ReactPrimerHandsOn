class Member{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class StaffList {
    //add your code here
    staff = [];
    
    add(name,age){
        if(age > 20){
            let tempMember = new Member(name,age);
            for(let member of staff){
                if(member.name == tempMember.name){
                    return;
                }
            }
            staff.push(tempMember);
        }
        else{
            console.error("Staff member age must be greater than 20");
        }
        return;
    }
    
    remove(name){
        for(let member of staff){
                if(member.name == name){
                    staff.pop(member);
                    return true;
                }
            }
        return false;
    }
    
    getSize(){
        return staff.length;
    }
}