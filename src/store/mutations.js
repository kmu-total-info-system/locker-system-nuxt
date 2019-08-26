export default {
    CurrentChange: function (state, data) {
        state.current = data.link
    },
    User: function (state, data) {
        state.user = data;
    },
    Logout: function (state) {
        state.user = {};
    },
    LockerId: function (state, data) {
        state.lockerId = [];
        state.lockerId = data;
    },
    LockerData: function (state, {data, isWhole}) {
        if (!isWhole && state.lockerData[1] != undefined) {
            state.lockerData.pop();
        }
        state.lockerData.push(data);
        console.log(state.lockerData)
    }
}
