// Spread Operator

const friend = ["Rahim", "Karim"];

const schoolFriends = ["pintu", "cintu", "bulbul"];

const collageFriend = ["Mr. Smart", "Mr. very very smart"];

friend.push(...schoolFriends);
friend.push(...collageFriend);
// console.log(friend);


const user = { name: "Rafsun", phoneNo: "017000000" };
const otherInfo = { hobby: "Outing", favouriteColor: "black" };

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

// rest operator

const sendInvite = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Send Invitation to ${friend}`);
    })
};

const f = ["pintu", "mintu", "cintu", "kintu"]
sendInvite(...f);