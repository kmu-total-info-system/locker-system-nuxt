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
    LockerData: function (state, data) {
        state.locker.push(data);
        console.log(state.locker,'test')
    }
}
