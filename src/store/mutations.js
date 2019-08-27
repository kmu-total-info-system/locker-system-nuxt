export default {
    CurrentChange: function (state, data) {
        state.current = data.link
    },
    LockerCurrentChange: function (state, data) {
        state.lockerCurrent = data.id;
    },
    ClickNoneChange: function (state, data) {
        state.clickNone = data;
    },
    User: function (state, data) {
        state.user = data;
    },
    Logout: function (state) {
        state.user = {};
    },
    LockerId: function (state, data) {
        // state.lockerId = [];
        state.lockerId.push(data[0]);
    },
    LockerClick: function (state, data) {
        let lockerId = state.lockerId;
        state.lockerId = [];
        state.lockerId = lockerId;
        if (state.lockerId.length != 1) {
            state.lockerId.pop();
            state.lockerId.push({id: data});
        } else {
            state.lockerId.push({id: data});
        }
    },
    LockerData: function (state, {data, isWhole}) {
        if (!isWhole && state.lockerData[1] != undefined) {
            state.lockerData.pop();
        }
        state.lockerData.push(data);
    }
}
